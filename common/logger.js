/**
 * Created by ttnd on 18/12/16.
 */
/**
 * Utility function which provides logging facility.
 * */

const log = () => {
    return global.config.LOGS.enable ? console.log : () => {};
};

module.exports = log;
