/**
 * @class BingoItem
 * @classdesc A BingoItem featured on the BingoCard
 */
var BingoItem = React.createClass({
    /**
     * Render this component
     * @public
     *
     * @returns {XML} The HTML being converted by JSX
     */
    render: function ()
    {
        var className = 'bingo-item' + (this.props.checked ? ' strike-through' : '');
        return (
            <div className={className} data-id={this.props.id} onClick={this.clickCard}>
                <div className="panel top">
                    <div className="difficulty">{this.props.difficulty}</div>
                    <div className="description">{this.props.string}</div>
                </div>
            </div>
        );
    },

    /**
     * Click handler for a Bingo BingoItem
     * @private
     *
     * @param {Object} e - Event object from the click event
     */
    clickCard: function (e)
    {
        e.target.classList.add('strike-through');
        socket.emit('click', e.target.dataset['id']);
    }
});
