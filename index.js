const endDate = new Date("03 Sep, 2025 10:17:00").getTime();
const startDate = new Date().getTime();

let x = setInterval(function updateTimer(){
    const currDate = new Date().getTime();
    const distanceCovered = currDate - startDate;
    const distancePending = endDate - currDate;

    // calculate days, min, hrs, secs
    // 1 day = 24 * 60 * 60 * 1000 ms
    const oneDayinmIllisecs = 24 * 60 * 60 * 1000; 
    const oneHourinmIllisecs = 60 * 60 * 1000; 
    const oneSecondinmIllisecs = 60 * 1000; 
    const mIllisecs = 1000; 

    const days = Math.floor(distancePending / (oneDayinmIllisecs));
    const hrs = Math.floor((distancePending%(oneDayinmIllisecs)) / (oneHourinmIllisecs));
    const mins = Math.floor((distancePending%(oneHourinmIllisecs))/ (oneSecondinmIllisecs));
    const secs = Math.floor((distancePending%(oneSecondinmIllisecs))/(mIllisecs));

    // populate in UI
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hrs;
    document.getElementById("minutes").innerHTML = mins;
    document.getElementById("seconds").innerHTML = secs;

    // calculate width percentage for progress bar
    const totalDistance = endDate - startDate;
    const percentageDistance = (distanceCovered/totalDistance)*100;

    // Set width for progress bar
    document.getElementById("progress_bar").style.width = percentageDistance + "%";

    if(distancePending <= 0){
        clearInterval(x);
        document.getElementById("time").innerHTML = "EXPIRED";
        document.getElementById("progress_bar").style.width = "100%";
    }
}, 1000);

// setInterval(updateTimer, 1000);
