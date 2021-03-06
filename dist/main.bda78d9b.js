// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"epB2":[function(require,module,exports) {
var $a = $('.lastItem');
var $container = $('.container');
var color;

var random = function randomHexColor() {
  //随机生成十六进制颜色
  return '#' + ('00000' + (Math.random() * 0x1000000 << 0).toString(16)).substr(-6);
};

var x = localStorage.getItem('x');
var xObject = JSON.parse(x);
var hashMap = xObject || [{
  logo: "b",
  color: "#7dc726",
  url: "https://baidu.com"
}, {
  logo: "m",
  color: "#8873e4",
  url: "https://music.163.com/#"
}, {
  logo: "z",
  color: "#dafeea",
  url: "https://www.zhangxinxu.com/"
}, {
  logo: "j",
  color: "#5a6dad",
  url: "https://juejin.cn/"
}, {
  logo: "t",
  color: "#c1005b",
  url: "https://taobao.com"
}, {
  logo: "m",
  color: "#2eae92",
  url: "https://music.163.com/"
}, {
  logo: "q",
  color: "#6914c6",
  url: "https://qq.com"
}, {
  logo: "g",
  color: "#187894",
  url: "https://github.com/"
}];
console.log(hashMap);

var render = function render() {
  $a.siblings().remove();
  hashMap.forEach(function (node, index) {
    var $b = $("\n        <div class=\"item item-x\" style=\"background: ".concat(node.color, ";\">\n            \n            <div class=\"close\">\n                    <svg class=\"icon\" aria-hidden=\"true\">\n                    <use xlink:href=\"#icon-close\"></use>\n                    </svg>\n            </div>\n            <div class=\"logo-first\">").concat(node.logo, "</div>\n            \n        </div>\n        ")).insertBefore($a);
    $b.on('click', function () {
      window.open(node.url);
    });
    $b.on('click', '.close', function (e) {
      e.stopPropagation();

      if (window.confirm("是否删除该站点?")) {
        hashMap.splice(index, 1);
        render();
      } else {}
    });
  });
};

render();
$('.logo-Peng').on('click', function (e) {
  window.alert('你搁这点兵点将呢？');
});
$('.addButton').on('click', function () {
  var url = window.prompt("请问你输入的网址是啥？");

  if (url.indexOf('http') !== 0) {
    url = 'https://' + url;
  }

  var urlfirst = url.replace("https://", "").replace('http://', '').replace('www.', '').replace(/\/.*/, '');
  console.log(urlfirst);
  var uf = urlfirst[0];
  color = random();
  hashMap.push({
    logo: uf,
    color: color,
    url: url
  });
  render();
});

window.onbeforeunload = function () {
  console.log('页面要关闭了');
  var string = JSON.stringify(hashMap);
  localStorage.setItem('x', string);
};

$(document).on('keypress', function (e) {
  console.log(e);
  var key = e.key;

  for (var i = 0; i < hashMap.length; i++) {
    if (hashMap[i].logo.toLowerCase() === key) {
      window.open(hashMap[i].url);
    }
  }
});
$('.searchForm').on('keypress', function (e) {
  e.stopPropagation();
});
},{}]},{},["epB2"], null)
//# sourceMappingURL=main.bda78d9b.js.map