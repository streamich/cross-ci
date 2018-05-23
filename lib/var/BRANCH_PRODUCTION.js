const BRANCH_PRODUCTION = () => process.env.BRANCH_PRODUCTION || 'production';

module.exports = BRANCH_PRODUCTION;
