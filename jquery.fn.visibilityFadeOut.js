/**
 * A version of jQuery.fadeOut() that uses 'visibility' CSS styling
 *
 * @author   Eric Christenson
 * @date     February 22, 2015
 * @version  2.0
 * @license  MIT License (http://opensource.org/licenses/MIT)
 *
 * @param duration mixed (optional. Accepts time in milliseconds, 'slow', or 'fast')
 * @param complete function (optional. A callback function)
 */
(function ($) {
    $.fn.visibilityFadeOut = function (duration, complete) {
        var speed = duration || 400;
        switch (speed) {
            case 'fast':
                speed = 200;
                break;
            case 'slow':
                speed = 600;
                break;
            default:
                speed = parseInt(duration);
        }

        $(this).each(function (index) {
            $(this).delay(index * 100).fadeTo(speed, 0, function () {
                $(this).css({ visibility: 'hidden', opacity: 1 });
            });
        });
        
        $(this).promise().done(function () {
            complete();
        });
    }
})(jQuery);
