/// Link to the CI service job
const envCi = require('../envCi');

const JOB_URL = () => envCi.jobUrl;

module.exports = JOB_URL;
