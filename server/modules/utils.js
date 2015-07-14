module.exports = {

    /**
     * @returns {Number} Random number between the two given from and to variables
     */
    getRandomNumber: function(from, to)
    {
        return Math.floor(Math.random() * (to - from + 1) + from);
    }

};
