var BingoCard = React.createClass({
    render: function ()
    {
        var bingoItems = [];
        for(var i = 0; i < 16; i++){
            bingoItems.push(<BingoItem string={items[i]} />);
        }
        return (
            <div className="bingoCard">
                {bingoItems}
            </div>
        );
    }
});

React.render(
    <BingoCard />,
    document.getElementById('content')
);
