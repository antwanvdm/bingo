var utils = require('./utils.js');

module.exports = {

    //Load data from JSON
    allItems: require('../data/items.json'),
    checkedItems: [],

    /**
     * @returns {Array}
     */
    getRandomItems: function()
    {
        //Define variables
        var originalItems = this.allItems.slice();
        var bingoItems = [];

        //Loop for each needed bingo item
        for (var i = 0; i < 16; i++) {
            //Generate a random number and splice it from the total bingo items that are still left
            var randomNumber = utils.getRandomNumber(0, originalItems.length - 1);
            var randomItem = originalItems.splice(randomNumber, 1)[0];

            //Add the BingoItem object to the array
            bingoItems.push(randomItem);
        }

        return bingoItems;
    },

    /**
     * Remove the item from the itemChecklist & return the check item
     *
     * @param id
     * @returns {number|boolean}
     */
    checkItemOfList: function(id)
    {
        if(!this.isItemChecked(id)){
            this.checkedItems.push(id);
            return true;
        }

        return false;
    },

    isItemChecked: function(id)
    {
        var index = this.checkedItems.indexOf(id);

        return index !== -1;
    }

};
