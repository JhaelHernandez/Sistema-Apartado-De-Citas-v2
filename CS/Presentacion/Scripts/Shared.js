function Transition(id) {
    $(id).addClass("showItem");
}

//function GoToDiv(obj) {
//    var idDiv = $(obj).attr("div");
//    setTimeout(function() {
//        $(document).scrollTo(idDiv, 2000);
//    },2000);
    
//    $(obj).addClass("active");
//}

function GoToDiv(obj) {
    var idDiv = $(obj).attr("div");
    $('html,body').animate({
        scrollTop: $(idDiv).offset().top
    },
       'slow');
};
