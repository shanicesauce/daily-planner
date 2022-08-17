var hours = $(".hour");
var description = $(".description")
var currentDay = $("#currentDay")
var currentTime = parseInt(moment().format("H"))


currentDay.text(moment().format("llll"));

hours.each(function() {
    var plannerTime = parseInt($(this).siblings("textarea").attr("id"));
    var siblings = $(this).siblings("textarea");
   
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
    var textArea = $(this).siblings("textarea").val();
    var timeChosen = $(this).siblings("textarea").attr("id");
    console.log(textArea);
    console.log(timeChosen);
    localStorage.setItem(timeChosen, textArea);
    // savePlans();
});

var loadPlans = function() {
//  localStorage.getItem();
for (var i = 0 ; i< localStorage.length; i++){
    var key = localStorage.key(i);
    // console.log(key);
    // console.log(localStorage.getItem(key));
    $(` #${key}`).val(localStorage.getItem(key));
    
}
}

loadPlans();
console.log( $(`#9 .description`));

// var savePlans = function() {
//     // var plannedText = $(".description").val();
//     // var timeChosen =  parseInt($(hours).attr("id"));
//    $(".description").each(function(){
//     console.log($(this).val());
//    })

    // localStorage.setItem(timeChosen, plannedText);

    
    // console.log (plannedText)





// console.log(loadPlans)
