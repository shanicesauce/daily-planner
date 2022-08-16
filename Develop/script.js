var hours = $(".hour");
var description = $(".description")
var currentDay = $("#currentDay")
var currentTime = parseInt(moment().format("h"))

currentDay.text(moment().format("llll"));

hours.each(function() {
    var plannerTime = parseInt($(this).attr("id"));
    if (plannerTime < currentTime) {
        console.log("past");
        // description.addClass("past");
        //addclass past
    }
    else if (plannerTime > currentTime) {
        console.log("future");
        // description.addClass("future");
        //addclass future
    }
    else {
        console.log("present");
        // description.addClass("present");
        //addclass present
    }
})