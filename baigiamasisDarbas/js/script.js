// Accordion tab background-color and text color change when clicked on.
$("#headingOne").on("click", function () {
    $(this).css("background-color", "#1CCDCA");
});

$("#headingTextOne").on("click", function () {
    $(this).css("color", "white");
});

$("#headingTwo").on("click", function () {
    $(this).css("background-color", "#1CCDCA");
});

$("#headingTextTwo").on("click", function () {
    $(this).css("color", "white");
});

$("#headingThree").on("click", function () {
    $(this).css("background-color", "#1CCDCA");
});

$("#headingTextThree").on("click", function () {
    $(this).css("color", "white");
});

// Number count on row 6
$('.count').each(function () {
    $(this).prop('Counter', 0).animate({
        Counter: $(this).text()
    }, {
            duration: 4000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
});

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("scrollUpBtn").style.display = "block";
    } else {
        document.getElementById("scrollUpBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
$('#scrollUpBtn').click(function () {
    $('html, body').animate({
        scrollTop: 0
    }, 800);
    return false;
});

// Progress bar 
$(document).ready(function () {
    $('.progress .progress-bar').css("width",
        function () {
            return $(this).attr("aria-valuenow") + "%";
        }
    )
});

// dropdown
$(function () {
    $(".dropdown").hover(
        function () {
            $('.dropdown-menu', this).stop(true, true).fadeIn("fast");
            $(this).toggleClass('open');
            $('b', this).toggleClass("caret caret-up");
        },
        function () {
            $('.dropdown-menu', this).stop(true, true).fadeOut("fast");
            $(this).toggleClass('open');
            $('b', this).toggleClass("caret caret-up");
        });
});


// Image modal pop

$(document).ready(function () {

    loadGallery(true, 'a.thumbnail');

    //This function disables buttons when needed
    function disableButtons(counter_max, counter_current) {
        $('#show-previous-image, #show-next-image').show();
        if (counter_max == counter_current) {
            $('#show-next-image').hide();
        } else if (counter_current == 1) {
            $('#show-previous-image').hide();
        }
    }

    /**
     *
     * @param setIDs        Sets IDs when DOM is loaded. If using a PHP counter, set to false.
     * @param setClickAttr  Sets the attribute for the click handler.
     */

    function loadGallery(setIDs, setClickAttr) {
        var current_image,
            selector,
            counter = 0;

        $('#show-next-image, #show-previous-image').click(function () {
            if ($(this).attr('id') == 'show-previous-image') {
                current_image--;
            } else {
                current_image++;
            }

            selector = $('[data-image-id="' + current_image + '"]');
            updateGallery(selector);
        });

        function updateGallery(selector) {
            var $sel = selector;
            current_image = $sel.data('image-id');
            $('#image-gallery-caption').text($sel.data('caption'));
            $('#image-gallery-title').text($sel.data('title'));
            $('#image-gallery-image').attr('src', $sel.data('image'));
            disableButtons(counter, $sel.data('image-id'));
        }

        if (setIDs == true) {
            $('[data-image-id]').each(function () {
                counter++;
                $(this).attr('data-image-id', counter);
            });
        }
        $(setClickAttr).on('click', function () {
            updateGallery($(this));
        });
    }
});