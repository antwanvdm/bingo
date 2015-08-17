/**
 * @class WaitRound
 * @classdesc A view that shows a user to wait for a new round of Bingo
 */
var WaitRound = React.createClass({
    /**
     * Render this component
     * @public
     *
     * @returns {XML} The HTML being converted by JSX
     */
    render: function ()
    {
        return (
            <div className="wait-round">
                Please wait until the next round
            </div>
        );
    }
});
