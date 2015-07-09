var BingoItem = React.createClass({
    render: function ()
    {
        return (
            <div className="bingoItem">
                {this.props.string}
            </div>
        );
    }
});
