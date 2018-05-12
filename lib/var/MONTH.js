/// Current month numeric value as a string of length two.
const MONTH = (new Date()).toJSON().substr(5, 2);

module.exports = MONTH;
