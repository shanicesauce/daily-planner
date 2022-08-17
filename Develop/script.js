var hours = $(".hour");
var description = $(".description")
var currentDay = $("#currentDay")
var currentTime = parseInt(moment().format("h"))

currentDay.text(moment().format("llll"));

hours.each(function() {
    var plannerTime = parseInt($(this).attr("id"));
    var siblings = $(this).siblings();
   
    if (plannerTime < currentTime) {
        siblings.addClass("past");
        console.log("past");
        //addclass past
    }
    else if (plannerTime > currentTime) {
        siblings.addClass("future");
        console.log("future");
        //addclass future
    }
    else {
        siblings.addClass("present");
        console.log("present");
        //addclass present
    }
    console.log(plannerTime)
});


$(".saveBtn").click(function() {
    // save
    savePlans();
});



var savePlans = function() {
    var time =  $(hours).attr("id");
    var timeChosen = parseInt(time)
    var plannedText = $(".description").val();

    localStorage.setItem(timeChosen, plannedText);

    console.log(timeChosen);

}

// var loadPlans = function() {
//  localStorage.getItem();
// }

// console.log(loadPlans)
