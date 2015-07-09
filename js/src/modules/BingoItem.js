var BingoItem = React.createClass({
    render: function ()
    {
        return (
            <div className="bingoItem" onClick={this.clickCard}>
                {this.props.string}
            </div>
        );
    },

    /**
     * @param e
     */
    clickCard: function (e)
    {
        e.target.classList.add('strike-through');

        //@TODO Notifications
    }
});
