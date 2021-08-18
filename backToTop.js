var topButton = document.getElementById("topButton");//HTML id değerini topButton olarak belirttim ve topButton değişkenine eşitledim .

function scrollTop() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 1000) {
            $(topButton).css({
                "display": "block",
            });
        } else {
            $(topButton).css({
                "display": "none",
            });
        }
    });
}

window.onscroll = function() {
    if($(this).scrollTop() > 900){ // Eğer scrollTop fonksiyonundaki scrollTop > 1000 ile aynı değeri verirsen , button bug'a girer.
        $(topButton).show("slow");
        scrollTop();
    }else{
        $(topButton).hide("slow");
    }
}

$(topButton).click(function() {
    $("html,body").animate({
        scrollTop: 0,
    }, 1000);
    return false;
});
