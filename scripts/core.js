$(document).ready(function(){
    $('#snap').click(function(){
        $('#overlay').fadeIn("slow");
        $('#maintainer').animate({opacity: "0.2"}, "slow");
    });

    // $('body').on("click", function(e){
    //     var target = $(e.target);
    //     if (target.parents("#maintainer").length){
            
    //     }
    // });

    $('#close').click(function(){
        $('#overlay').fadeOut("slow");
        $('#maintainer').animate({opacity: "1"}, "slow");
    });

    let maintainer = document.getElementById("maintainer");
    maintainer.classList.add("animated", "fadeInDown");
    maintainer.addEventListener('animationend', function() {
        maintainer.classList.remove("animated", "fadeInDown");
    });
});