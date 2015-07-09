var BingoCard = React.createClass({
    render: function ()
    {
        return (
            <div className="bingoCard">
                {this.getBingoItems()}
            </div>
        );
    },
    getBingoItems: function()
    {
        var itemStack = items;
        var bingoItems = [];

        for(var i = 0; i < 16; i++){

            var randomNumber = this.randomNumber(0, itemStack.length - 1);
            var randomItem = itemStack.splice(randomNumber, 1);

            bingoItems.push(<BingoItem string={randomItem} />);

        }

        return bingoItems;
    },
    randomNumber: function(from, to) {

        return Math.floor(Math.random() * (to - from + 1) + from);

    }
});

React.render(
    <BingoCard />,
    document.getElementById('content')
);
