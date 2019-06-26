$(document).ready(function() {

    console.log("ghbdt jigfdk");
    $(document).on("click",".top-button", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 700);
    });
    $(document).scroll(function() {
        if ($(document).scrollTop() >= 1000) {
            $(".top-button").addClass("active");
            
        } else {
            $(".top-button").removeClass("active");
        }
    })

    $(".new-bg-cont").each(function() {
		var it = $(this);
		var src = it.find("img").attr("src");
		it.css("background-image", "url(" + src + ")");
    });
    
    $(".sidebar-container").stick_in_parent();

    $(".content").each(function() {
        var it = $(this);
        it.closest(".b_center").find("aside--left").innerHeight();
        it.css("min-height", it.closest(".b_center").find("aside--left").innerHeight());
    });
});