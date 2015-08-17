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
            var checked = (typeof item.checked !== "undefined");
            return <BingoItem string={item.text} difficulty={item.difficulty} id={item.id} checked={checked}/>;
        });
    },

    /**
     * Update an individual item updated from the outside
     * @public
     *
     * @param item
     */
    checkItem: function (item)
    {
        this.state.items.forEach(function (currentItem, index)
        {
            if (currentItem.id === item.id) {
                this.state.items[index].checked = true;
            }
        }.bind(this));

        this.setState({items: this.state.items});
    }
});
