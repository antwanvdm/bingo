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
        //Return all Bingo Items
        return this.state.items.map(function (item)
        {
            return <BingoItem string={item.text} id={item.id} />;
        });
    }
});


var bingoCardInstance = React.render(<BingoCard />, document.getElementById('content'));

