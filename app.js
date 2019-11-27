$(document).ready(function(){
    if($(window).height()<582){
        $(".modal-content").css({overflowY:"auto"});
    }
    else{
        $("#"+appendToId).css({width:"40%"});
    }
});