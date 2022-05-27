jQuery(document).ready(function($){
    $("a[href='#home']").click(function(){
        $('.active-content').fadeOut(function(){
            $(".deco_box").fadeIn()
        });
        $('.active-content').removeClass("active-content");
        $('.active').removeClass("active");
        $("#home").addClass("active-content");
        $("a[href='#home']").addClass("active");
    });

    $("a[href='#cv']").click(function(){
        var T = document.getElementById("cv");
        $(".active-content").fadeOut(function(){
            T.style.display = "block";
            $("#cv").fadeIn();
        });
        $('.active-content').removeClass("active-content");
        $('.active').removeClass("active");
        $("#cv").addClass("active-content");
        $("a[href='#cv']").addClass("active");
    });

    $("a[href='#about-me']").click(function(){
        var T = document.getElementById("about-me");
        $(".active-content").fadeOut(function(){
            T.style.display = "block";
            $("#about-me").fadeIn();
        });
        $('.active-content').removeClass("active-content");
        $('.active').removeClass("active");
        $("#about-me").addClass("active-content");
        $("a[href='#about-me']").addClass("active");
    });

    $("a[href='#research']").click(function(){
        var T = document.getElementById("research");
        $(".active-content").fadeOut(function(){
            T.style.display = "block";
            $("#research").fadeIn();
        });
        $('.active-content').removeClass("active-content");
        $('.active').removeClass("active");
        $("#research").addClass("active-content");
        $("a[href='#research']").addClass("active");
    });

    $("a[href='#projects']").click(function(){
        var T = document.getElementById("projects");
        $(".active-content").fadeOut(function(){
            T.style.display = "block";
            $("#projects").fadeIn();
        });
        $('.active-content').removeClass("active-content");
        $('.active').removeClass("active");
        $("#projects").addClass("active-content");
        $("a[href='#projects']").addClass("active");
    });

    $("a[href='#personal']").click(function(){
        var T = document.getElementById("personal");
        $(".active-content").fadeOut(function(){
            T.style.display = "block";
            $("#personal").fadeIn();
        });
        $('.active-content').removeClass("active-content");
        $('.active').removeClass("active");
        $("#personal").addClass("active-content");
        $("a[href='#personal']").addClass("active");
    });

    $("a[href='#contact']").click(function(){
        var T = document.getElementById("contact");
        $(".active-content").fadeOut(function(){
            T.style.display = "block";
            $("#contact").fadeIn();
        });
        $('.active-content').removeClass("active-content");
        $('.active').removeClass("active");
        $("#contact").addClass("active-content");
        $("a[href='#contact']").addClass("active");
    });

});