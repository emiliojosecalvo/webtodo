// Do the "Checked" on the items of the list
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");     
});


// Delete the items on the list
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(400,function (event){
        $(this).remove();
    });
    event.stopPropagation();
});

// Add item to the list
$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        var newToDo = $(this).val();
        $("ul").append("<li><span><i class='far fa-trash-alt'></i></span> " + newToDo +"</li>");
        $(this).val("");
    } 
});

 //Hide and shows the input to add new items
$(".fa-plus").click(function(){
    $("input[type='text']").fadeToggle();
});