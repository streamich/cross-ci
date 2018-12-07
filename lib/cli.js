const {spawn} = require('child_process');
const vars = require('./createVars')();

const env = {
    ...process.env,
    ...vars,
};

Object.assign(process.env, vars);

const executeCommand = (command) => {
    const proc = spawn(command, [], {
        stdio: [0, 1, 2],
        env,
        shell: true,
    });

    proc.on('close', (code) => {
        // eslint-disable-next-line no-process-exit
        process.exit(code);
    });
};

const executePassthrogh = (args) => {
    executeCommand(args.join(' '));
};

const createParamEvalWrapper = (ci) => [
    '(function (ci, {' + Object.keys(ci).join(',') + '}) { return `',
    '`; })',
];

const evalTemplate = (template) => {
    const wrapper = createParamEvalWrapper(env);
    const script = wrapper[0] + String(template) + wrapper[1];

    // eslint-disable-next-line no-eval
    return eval(script)(env, env);
};

const evalCommand = (args) => {
    let command = '';

    for (let index = 1; index < args.length; index++) {
        command += evalTemplate(args[index]) + ' ';
    }

    return command;
};

const executeEcho = (args) => {
    // eslint-disable-next-line no-console
    console.log(evalCommand(args));
};

const executeRun = (args) => {
    executeCommand(evalCommand(args));
};

const argv = process.argv.slice(2);

if (!argv[0]) {
    /* eslint-disable no-console, no-process-exit */
    console.log(JSON.stringify(vars, null, 4));
    process.exit(0);
    /* eslint-enable */
}

switch (argv[0]) {
case ':echo':
case 'echo:':
    executeEcho(argv);
    break;
case ':run':
case 'run:':
    executeRun(argv);
    break;
default:
    executePassthrogh(argv, process.env);
}
