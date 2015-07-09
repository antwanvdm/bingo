/**
 * @class BingoCard
 * @classdesc A BingoCard filled with multiple BingoItems
 */
var BingoCard = React.createClass({

    /**
     * @returns {Object}
     */
    getInitialState: function ()
    {
        return {items: []};
    },

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
        var itemStack = this.state.items;
        var bingoItems = [];

        //Loop for each needed bingo item
        for (var i = 0; i < itemStack.length; i++) {
            //Add the BingoItem object to the array
            bingoItems.push(<BingoItem string={itemStack[i].text} id={itemStack[i].id} />);
        }

        //Return all Bingo Items
        return bingoItems;
    }
});

var bingoCardInstance = React.render(<BingoCard />, document.getElementById('content'));

