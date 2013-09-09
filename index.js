// Constants from jQuery
var rclass = /[\t\r\n]/g;
var core_rnotwhite = /\S+/g;

var DataStore         = {},
    kDataStoreNextIx  = 1,
    kDataKey          = 'du-data-key';

var __window = typeof window === 'undefined'
                ? null
                : window;

var __document = typeof document === 'undefined'
                  ? null
                  : document;

function generateElementKey() {
  return kDataStoreNextIx++;
}

module.exports = {
  init: function(window, document) {
    __window = window;
    __document = document;
  },

  data: function(el, key, val) {
    var elementKey = el.getAttribute(kDataKey);
    if (!elementKey) {
      elementKey = generateElementKey();
      el.setAttribute(kDataKey, elementKey);
    }

    var elementData = DataStore[elementKey];
    
    if (arguments.length === 2) {
      if (typeof key === 'undefined') {
        delete DataStore[elementKey];
      } else {
        return elementData ? elementData[key] : undefined;
      }
    } else if (arguments.length === 3) {
      if (typeof val === 'undefined') {
        if (elementData) {
          delete elementData[key];
        }
      } else {
        if (!elementData) {
          elementData = {};
          DataStore[elementKey] = elementData;
        }
        elementData[key] = val;
      }
    } else {
      throw "data() - invalid arguments";
    }
  },

  // from jQuery
  hasClass: function(ele, className) {
    className = " " + className + " ";
    return (" " + ele.className + " ").replace(rclass, " ").indexOf(className) >= 0;
  },

  // from jQuery
  addClass: function(ele, value) {
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
  },

  // from jQuery
  removeClass: function(ele, value) {
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
  },

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
  }
};