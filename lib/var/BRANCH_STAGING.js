const BRANCH_STAGING = () => process.env.BRANCH_STAGING || 'master';

module.exports = BRANCH_STAGING;
