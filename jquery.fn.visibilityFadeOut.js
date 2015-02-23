/**
 * A version of jQuery.fadeOut() that uses 'visibility' CSS styling
 *
 * @author   Eric Christenson
 * @date     February 22, 2015
 * @version  1.0
 * @license  MIT License (http://opensource.org/licenses/MIT)
 *
 * @param  fadeSpeed  int (time in milliseconds. Optional, defaults to 1 second)
 */
(function ($) {
    $.fn.visibilityFadeOut = function (fadeSpeed) {
        fadeSpeed = fadeSpeed || 1000;

        $(this).each(function (index) {
            $(this).delay(index * 100).fadeTo(parseInt(fadeSpeed), 0, function () {
                $(this).css({ visibility: 'hidden', opacity: 1 });
            });
        });
    }
})(jQuery);