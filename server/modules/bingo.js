var utils = require('./utils.js');

module.exports = {
    //Load data from JSON
    allItems: require('../data/items.json'),
    playerItems: {},
    checkedItems: [],
    maxStartItemsCheckedOf: 16,

    /**
     * Get an array of randomly selected items
     *
     * @returns {Array}
     */
    getItems: function (sessionId)
    {
        if (typeof this.playerItems[sessionId] !== "undefined") {
            return this.playerItems[sessionId];
        }

        //Prevent people from getting items when game is too far ahead
        if (this.checkedItems.length > this.maxStartItemsCheckedOf) {
            throw false; //Well this is new...
        }

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

        this.playerItems[sessionId] = bingoItems;
        return bingoItems;
    },

    /**
     * Find an item by referencing it's unique ID
     *
     * @param id
     * @returns {object}
     */
    getItemById: function (id)
    {
        return this.allItems[id];
    },

    /**
     * Remove the item from the itemChecklist & return the check item
     *
     * @param id
     * @returns {boolean}
     */
    checkItemOfList: function (id)
    {
        //If the item was already checked, return false
        if (this.isItemChecked(id)) {
            return false;
        }

        //If the item hasn't been checked before, add it to the checked list
        this.checkedItems.push(id);
        return true;
    },

    /**
     * Function to check whether an item is already checked or not
     *
     * @param id
     * @returns {boolean}
     */
    isItemChecked: function (id)
    {
        return (this.checkedItems.indexOf(id) !== -1);
    }
};
