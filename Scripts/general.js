function animateToSection(destination) {

    var stopPos = 0;
    if (destination !== null) {
        stopPos = $(destination).offset().top - 70;
    }
    
    var delay = 1000;
    $('body,html').animate({ scrollTop: stopPos + 'px' }, delay);
    return true;
}

$(function () {
    $("#map").goMap({
        navigationControl: true, 
        navigationControlOptions: { 
            position: 'RIGHT', 
            style: 'ANDROID' 
        }, 
        address: 'Model farm, Gorelands Lane, Chalfont St Giles, Bucks',
        zoom: 13,
        maptype: 'ROADMAP',
        markers: [{
            latitude: 51.63219,
            longitude: -0.53964
        }],
        hideByClick: false
    });
});

$(document).ready(function () {
    $('.box').bind({
        mouseenter: function (e) {
            // Hover event handler
            //change background color
            $(this).css("background-color", "rgb(0, 162, 213)");
            $(this).css("opacity", "1.0");
            $(this).find('span.dot').hide();
            $(this).find('span.full').slideDown(800);
            //enlarge the box
            $(this).animate({ width: "40%" }, 200);
            //reduce the size of the other boxes
            $(this).parent().children().not($(this)).animate({ width: "25%" }, 200);


        },
        mouseleave: function (e) {
            // Hover event handler
            $(this).css("background-color", "#008fd5");
            $(this).css("opacity", "0.8");
            $(this).find('span.dot').show();
            $(this).find('span.full').fadeOut('fast');
            $(this).parent().children().not($(this)).removeClass('smaller');
            $(this).parent().children().animate({ width: "30%" }, 200);


        }
    });
});


//            switch (e.currentTarget.classList[1]) {
//                case "welcome":
//                    var specializeimg = document.createElement("img");
//                    var collectionimg = document.createElement("img");
//                    specializeimg.src = "Images/car_icon.png";
//                    collectionimg.src = "Images/wrench.png";
//                    $(specializeimg).appendTo('#icons');
//                    $(collectionimg).appendTo('#icons');
//                    break;
//                case "specialize":

//                    break;
//                case "collection":
//                    break;