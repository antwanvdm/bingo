/**
 * @class BingoCard
 * @classdesc A BingoCard filled with multiple BingoItems
 */
var BingoCard = React.createClass({

    /**
     * Render this component
     * @public
     *
     * @returns {XML} The HTML being converted by JSX
     */
    render: function ()
    {
        return (
            <div className="bingoCard">
                {this.getBingoItems()}
            </div>
        );
    },

    /**
     * Get an array filled with bingo items
     * @private
     *
     * @returns {Array} Array filled with random strings from the bingo items list
     */
    getBingoItems: function ()
    {
        //Define variables
        var itemStack = items;
        var bingoItems = [];

        //Loop for each needed bingo item
        for (var i = 0; i < 16; i++) {

            //Generate a random number and splice it from the total bingo items that are still left
            var randomNumber = this.randomNumber(0, itemStack.length - 1);
            var randomItem = itemStack.splice(randomNumber, 1)[0];

            //Add the BingoItem object to the array
            bingoItems.push(<BingoItem string={randomItem.text} id={randomItem.id} />);

        }

        //Return all Bingo Items
        return bingoItems;
    },

    /**
     * Render this component
     * @private
     *
     * @returns {Number} Random number between the two given from and to variables
     */
    randomNumber: function (from, to)
    {
        return Math.floor(Math.random() * (to - from + 1) + from);
    }
});

React.render(
    <BingoCard />,
    document.getElementById('content')
);
