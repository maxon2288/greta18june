$(document).ready(function() {

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

    
    if ($(window).width() >= 768) {
        
        $(document).scroll(function() {
            var header = $(".header").innerHeight();
            var sidebarCont = $(".sticky-wrapper").innerHeight();
            var sidebar = $(".sidebar-container").innerHeight();
            var screenh = $(window).innerHeight();
            var scroll = $(document).scrollTop();
            console.log(sidebar);
            console.log(scroll);
            $(".sticky-wrapper").css("min-height", sidebar);
            if (scroll >= sidebar + header - screenh + 85) {
                $(".sidebar-container").addClass("fixed");
            } else {
                $(".sidebar-container").removeClass("fixed");
            }
            if (scroll >= header + sidebarCont - screenh) {
                $(".sidebar-container").addClass("fixed-bottom");
            } else {
                $(".sidebar-container").removeClass("fixed-bottom");
            }
        });
    }

    $(".new-bg-cont").each(function() {
		var it = $(this);
		var src = it.find("img").attr("src");
		it.css("background-image", "url(" + src + ")");
    });
    
    $(".content").each(function() {
        var it = $(this);
        it.closest(".b_center").find("aside--left").innerHeight();
        it.css("min-height", it.closest(".b_center").find("aside--left").innerHeight());
    });
});