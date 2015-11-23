function Transition(id) {
    $(id).addClass("showItem");
}

function GoToDiv(obj) {
    var idDiv = $(obj).attr("div");
    $(document).scrollTo(idDiv);
}

$('#Contact').click = function () {
    $(document).scrollTo('#contact');
}

$('#contactlink').click = function () {
    $(document).scrollTo('#contact');
}

$('#contactlink').click = function () {
    $(document).scrollTo('#contact');
}