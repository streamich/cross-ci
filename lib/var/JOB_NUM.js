/// CI service job number
const envCi = require('../envCi');

const JOB_NUM = () => envCi.job;

module.exports = JOB_NUM;
