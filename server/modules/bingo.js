var utils = require('./utils.js');
var settings = require('./settings.js');

module.exports = {
    //Load data from JSON
    allItems: require('../data/items.json'),
    playerItems: {},
    checkedItems: [],
    cardsPerPlayer: settings.cardsPerPlayer,
    maxStartItemsCheckedOf: settings.maxStartItemsCheckedOf,

    /**
     * Get an array of randomly selected items
     *
     * @returns {Array}
     */
    getItems: function (sessionId)
    {
        if (typeof this.playerItems[sessionId] !== "undefined") {
            return this.checkItems(this.playerItems[sessionId]);
        }

        //Prevent people from getting items when game is too far ahead
        if (this.checkedItems.length > this.maxStartItemsCheckedOf) {
            throw false; //Well this is new...
        }

        //Define variables
        var originalItems = JSON.parse(JSON.stringify(this.allItems)); //The only valid way to clone -_-
        var bingoItems = [];

        //Loop for each needed bingo item
        for (var i = 0; i < this.cardsPerPlayer; i++) {
            //Generate a random number and splice it from the total bingo items that are still left
            var randomNumber = utils.getRandomNumber(0, originalItems.length - 1);
            var randomItem = originalItems.splice(randomNumber, 1)[0];

            //Add the BingoItem object to the array
            bingoItems.push(randomItem);
        }

        this.playerItems[sessionId] = bingoItems;
        return this.checkItems(bingoItems);
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

        //If the item hasn't been checked before, add it to the checked list & check it of everyones list
        this.checkedItems.push(parseInt(id));
        this.checkItemsForAllPlayers();
        return true;
    },

    /**
     * Check if a player has won & return an array of our lucky winners
     *
     * @returns {Array}
     */
    getWinners: function ()
    {
        var winners = [];

        //Loop throug all the players
        for (var userSessionId in this.playerItems) {
            var items = this.playerItems[userSessionId];
            var totalItems = items.length;
            var checkedItems = 0;

            //Check for every item if it's checked
            items.forEach(function (item)
            {
                if (typeof item.checked !== "undefined") {
                    checkedItems++;
                }
            });

            //Push current users in the winners array
            if (totalItems == checkedItems) {
                winners.push(userSessionId);
            }
        }

        return winners;
    },

    /**
     * Check all the items of the lists of players
     */
    checkItemsForAllPlayers: function ()
    {
        for (var userSessionId in this.playerItems) {
            this.checkItems(this.playerItems[userSessionId]);
        }
    },

    /**
     * Mark items as checked on a current list
     *
     * @param list
     * @returns {*}
     */
    checkItems: function (list)
    {
        list.forEach(function (item, index)
        {
            if (this.isItemChecked(item.id)) {
                list[index].checked = true;
            }
        }.bind(this));

        return list;
    },

    /**
     * Function to check whether an item is already checked or not
     *
     * @param id
     * @returns {boolean}
     */
    isItemChecked: function (id)
    {
        return (this.checkedItems.indexOf(parseInt(id)) !== -1);
    },

    /**
     * Reset variables to default state
     */
    startNewRound: function ()
    {
        this.playerItems = {};
        this.checkedItems = [];
    }
};
