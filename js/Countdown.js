function getCountdown(date, id) {
    // The data/time we want to countdown to
    var countDownDate = new Date(date).getTime();

    // Run myfunc every second
    var myfunc = setInterval(function() {

        var now = new Date().getTime();
        var timeleft = countDownDate - now;

        // Calculating the days, hours, minutes and seconds left
        var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
        var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var mins = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
        var secs = Math.floor((timeleft % (1000 * 60)) / 1000);

        // Result is output to the specific element
        document.getElementById(id).innerHTML = `${days}d ${hours}h ${mins}m ${secs}s`

        // Display the message when countdown is over
        if (timeleft < 0) {
            clearInterval(myfunc);
            document.getElementById(id).innerHTML = "TIMES UP!!"
        }
    }, 1000);
}