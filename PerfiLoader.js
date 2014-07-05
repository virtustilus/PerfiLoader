(function(window, undefined) {

    var defaultOptions = {
        enabled: true,
        size: 32,
        fillParent: false,
        className: 'perfi-loader-preloader'
    };

    var preLoader = function (elementSelector, options) {
        elementSelector = elementSelector === undefined ? 'body' : elementSelector;

        var $el = $(elementSelector);
        var wasEnabled = $el.prev().hasClass(options.className);
        var imgClassName = options.className + '-image';
        if ($el.length > 0 && !wasEnabled && options.enabled) {

            var pos = $el.offset();
            var width = $el.fullWidth();
            var height = $el.fullHeight();

            var loader = $('<div/>');
            loader.addClass(options.className);
            loader.addClass('preloader' + options.size);
            var img = $('<i/>');
            img.addClass(imgClassName);

            loader.append(img);
            $el.before(loader);

            if (options.fillParent) {
                loader.css({
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                    top: '0',
                    left: '0'
                });
                img.css({
                    'top': '50%',
                    'margin-top': '-' + (options.size / 2) + 'px',
                    'margin-left': 'auto',
                    'position': 'relative'
                });
            }else{
                loader.width(width).height(height).offset(pos);

                var iL = pos.left + (width / 2 - options.size / 2);
                var iT = pos.top + (height / 2 - options.size / 2);
                loader.find('.' + imgClassName).offset({left: iL, top: iT});
            }


        }else if (wasEnabled && !options.enabled) {

            $el.prev().remove();
        }
    };

    $.fn.fullWidth = function () {
        var w = 0;
        $(this).each(function(){
            var theDiv = $(this);
            var totalWidth = theDiv.width();
            totalWidth += parseInt(theDiv.css("padding-left"), 10) + parseInt(theDiv.css("padding-right"), 10); //Total Padding Width
            totalWidth += parseInt(theDiv.css("borderLeftWidth"), 10) + parseInt(theDiv.css("borderRightWidth"), 10); //Total Border Width
            w += totalWidth;
        });
        return w;
    };

    $.fn.fullHeight = function () {
        var h = 0;
        $(this).each(function(){
            var theDiv = $(this);
            var totalHeight = theDiv.height();
            totalHeight += parseInt(theDiv.css("padding-top"), 10) + parseInt(theDiv.css("padding-bottom"), 10); //Total Padding Width
            totalHeight += parseInt(theDiv.css("borderTopWidth"), 10) + parseInt(theDiv.css("borderBottomWidth"), 10); //Total Border Width
            h += totalHeight;
        });
        return h;
    };

    $.fn.preloader = function(enabled, size, fillParent){
        var options = {};

        if (enabled !== undefined) {
            if (typeof enabled === 'object') {
                options = enabled;
            } else {
                options['enabled'] = enabled;
                if (size !== undefined) options['size'] = size;
                if (fillParent !== undefined) options['fillParent'] = fillParent;
            }
        }

        options = $.extend($.extend({}, defaultOptions), options);

        $(this).each(function(idx, el){
            preLoader(el, options);
        });
    };

})(window);



