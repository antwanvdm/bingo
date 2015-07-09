var CommentBox = React.createClass({
    render: function ()
    {
        return (
            <div className="test">
                Hello, world! I am a test.
            </div>
        );
    }
});
React.render(
    <CommentBox />,
    document.getElementById('content')
);
