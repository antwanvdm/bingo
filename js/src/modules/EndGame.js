/**
 * @class EndGame
 * @classdesc A view that shows a user the end screen with winners & countdown to new round
 */
var EndGame = React.createClass({
    /**
     * @returns {Object}
     */
    getInitialState: function ()
    {
        return {seconds: this.props.seconds};
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
            <div className="end-game">
                <div class="winners">The winners are: {this.props.winners}</div>
                <div class="countdown">Seconds before start of a new round: {this.state.seconds}</div>
            </div>
        );
    }
});
