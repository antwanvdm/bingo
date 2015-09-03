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
                    <div className="title">{this.props.title}</div>
                    <div className="description">{this.props.description}</div>
                </div>
                <div className="panel bottom">
                    <div className="icon"></div>
                    <div className="float-right">
                        <span className="difficulty">{this.props.difficulty}</span>
                        <span>points</span>
                    </div>
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
        e.currentTarget.classList.add('strike-through');
        socket.emit('click', e.currentTarget.dataset['id']);
    }
});
