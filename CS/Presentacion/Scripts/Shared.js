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
    $('body').animate({
        scrollTop: $(idDiv).offset().top
    },
       'slow');
};



function GoToDiv(obj) {
    var idDiv = $(obj).attr("div");

    $('html, body').stop().animate({

        'scrollTop': idDiv.offset().top

    }, 500, 'swing', function () {

        window.location.hash = idDiv;

        $(document).on("scroll", onScroll);

    });
};


function onScroll(event){

    var scrollPosition = $(document).scrollTop();

    $('.nav li a').each(function () {

        var currentLink = $(this);

        var refElement = $(currentLink.attr("href"));

        if (refElement.position().top <= scrollPosition && refElement.position().top + refElement.height() > scrollPosition) {

            $('.nav li a').removeClass("active");

            currentLink.addClass("active");

        }

        else{

            currentLink.removeClass("active");

        }

    });
        





