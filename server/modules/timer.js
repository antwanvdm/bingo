module.exports = {
    totalSeconds: 10,
    currentSeconds: 10,
    interval: null,
    events: null,

    /**
     * @todo Can this be made easier?
     */
    initialize: function (events)
    {
        this.events = events;
    },

    /**
     * Start interval to countdown
     */
    start: function ()
    {
        this.interval = setInterval(this.countDown.bind(this), 1000);
        return this.totalSeconds;
    },

    /**
     * Countdown a seconds
     */
    countDown: function ()
    {
        this.currentSeconds--;

        this.events.emit("timer:seconds", this.currentSeconds);
        if (this.currentSeconds == 0) {
            this.reset();
        }
    },

    /**
     * Stop the timer & reset seconds
     */
    reset: function ()
    {
        clearInterval(this.interval);
        this.currentSeconds = this.totalSeconds;
        this.events.emit("timer:finished");
    }
};
