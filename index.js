var __window = typeof window === 'undefined'
                                ? null
                                : window;

var __document = typeof document === 'undefined'
                                    ? null
                                    : document;

if (typeof DOMTokenList !== 'undefined') {

    function hasClass(el, className) {
        return el.classList.contains(className);
    }

    function addClass(el, classes) {
        if (classes.indexOf(' ') >= 0) {
            classes.split(/\s+/).forEach(function(c) {
                el.classList.add(c);
            });
        } else {
            el.classList.add(classes);
        }
    }

    function removeClass(el, classes) {
        if (classes.indexOf(' ') >= 0) {
            classes.split(/\s+/).forEach(function(c) {
                el.classList.remove(c);
            });
        } else {
            el.classList.remove(classes);
        }
    }

    function toggleClass(el, classes) {
        if (classes.indexOf(' ') >= 0) {
            classes.split(/\s+/).forEach(function(c) {
                el.classList.toggle(c);
            });
        } else {
            el.classList.toggle(classes);
        }
    }

} else {

    // Constants from jQuery
    var rclass = /[\t\r\n]/g;
    var core_rnotwhite = /\S+/g;

    // from jQuery
    function hasClass(ele, className) {
        className = " " + className + " ";
        return (" " + ele.className + " ").replace(rclass, " ").indexOf(className) >= 0;
    }

    function addClass(ele, value) {
        var classes = (value || "").match(core_rnotwhite) || [],
                cur = ele.className ? (" " + ele.className + " ").replace(rclass, " ") : " ";

        if (cur) {
            var j = 0, clazz;
            while ((clazz = classes[j++])) {
                if (cur.indexOf(" " + clazz + " ") < 0) {
                    cur += clazz + " ";
                }
            }
            ele.className = cur.trim();
        }
    }

    function removeClass(ele, value) {
        var classes = (value || "").match(core_rnotwhite) || [],
                cur = ele.className ? (" " + ele.className + " ").replace(rclass, " ") : " ";

        if (cur) {
            var j = 0, clazz;
            while ((clazz = classes[j++])) {
                while (cur.indexOf(" " + clazz + " ") >= 0) {
                    cur = cur.replace(" " + clazz + " ", " ");
                }
                ele.className = value ? cur.trim() : "";
            }
        }
    }

    function toggleClass(ele, value) {
        var classes = (value || "").match(core_rnotwhite) || [],
                cur = ele.className ? (" " + ele.className + " ").replace(rclass, " ") : " ";

        if (cur) {
            var j = 0, clazz;
            while ((clazz = classes[j++])) {
                var removeCount = 0;
                while (cur.indexOf(" " + clazz + " ") >= 0) {
                    cur = cur.replace(" " + clazz + " ", " ");
                    removeCount++;
                }
                if (removeCount === 0) {
                    cur += clazz + " ";
                }
                ele.className = cur.trim();
            }
        }
    }

}

function generateElementKey() {
    return kDataStoreNextIx++;
}

module.exports = {
    init: function(window, document) {
        __window = window;
        __document = document;
    },

    hasClass: hasClass,
    addClass: addClass,
    removeClass: removeClass,
    toggleClass: toggleClass,

    viewportSize: function() {
        return {
            width: __document.documentElement.clientWidth,
            height: __document.documentElement.clientHeight
        };
    },

    stop: function(evt) {
        evt.preventDefault();
        evt.stopPropagation();
    },

    setPosition: function(el, x, y) {
        el.style.left = x + 'px';
        el.style.top = y + 'px';
    },

    setSize: function(width, height) {
        el.style.width = width + 'px';
        el.style.height = height + 'px';
    },

    isElement: function(el) {
        return el && el.nodeType === 1;
    }
};