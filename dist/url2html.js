/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// @flow
var URL2HTML = function URL2HTML(url) {
  url = url || null;

  var link = function link(_passedURL) {
    return `<a href="${_passedURL}" target="_blank" class="url2html url2html-link">${_passedURL}</a>`;
  };

  var youtube = function youtube(_passedURL) {
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    var match = _passedURL.match(regExp);

    if (match && match[7].length === 11) {
      return `<iframe class="url2html url2html-youtube"width="560" height="315" src="//www.youtube.com/embed/${match[7]}" frameborder="0" allowfullscreen></iframe>`;
    }

    return link(_passedURL);
  };
  var vimeo = function vimeo(_passedURL) {
    var regExp = /(http|https):\/\/(www\.)?vimeo.com\/(\d+)($|\/)/;
    var match = _passedURL.match(regExp);

    if (match) {
      return `<iframe class="url2html url2html-vimeo" src="http://player.vimeo.com/video/${match[2]}?color=f2bc27" width="500" height="281" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>`;
    }

    return link(_passedURL);
  };
  var image = function image(_passedURL) {
    return `<img class="url2html url2html-image" src="${_passedURL}" align="absmiddle" /></span>`;
  };

  var audio = function audio(_passedURL) {
    return `<span class="url2html url2html-audio"><object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=10,0,0,0" width="30" height="30"><PARAM NAME=movie VALUE="http://www.strangecube.com/audioplay/online/audioplay.swf?file=${_passedURL}&auto=no&sendstop=yes&repeat=0&buttondir=http://www.strangecube.com/audioplay/online/alpha_buttons/negative&bgcolor=0xffffff&mode=playpause"><PARAM NAME=quality VALUE=high><PARAM NAME=wmode VALUE=transparent><embed src="http://www.strangecube.com/audioplay/online/audioplay.swf?file=${_passedURL}&auto=no&sendstop=yes&repeat=0&buttondir=http://www.strangecube.com/audioplay/online/alpha_buttons/negative&bgcolor=0xffffff&mode=playpause" quality=high wmode=transparent width="30" height="30" align="" TYPE="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer"></embed></object></span>`;
  };
  var generate = function generate(_passedURL) {
    var urlToParse = url;

    if (_passedURL) {
      urlToParse = _passedURL;
    }
    var html = void 0;

    // Find the type of processor to use based on various parts of a URL

    if (urlToParse.match('youtube') || urlToParse.match('youtu.be')) {
      html = youtube(urlToParse);
    } else if (urlToParse.match('vimeo')) {
      html = vimeo(urlToParse);
    } else if (urlToParse.match('.jpg') || urlToParse.match('.png') || urlToParse.match('.gif') || urlToParse.match('.jpeg')) {
      html = image(urlToParse);
    } else if (urlToParse.match('.ogg') || urlToParse.match('.mp3') || urlToParse.match('.wav')) {
      html = audio(urlToParse);
    } else {
      // When all else fails, at least my it an a href.
      html = link(urlToParse);
    }

    return html;
  }; // end generate

  return {
    get: function get(_url) {
      return generate(_url);
    },
    parse(code) {
      // This will loop over the code, break it into a single words
      // Find all Links and do some magic.

      // Link Regex
      var exp = /((https?|ftp|file):\/\/[-A-Z0-9+&@#/%?=~_|!:,.;]*[-A-Z0-9+&@#/%=~_|])/gi;

      // code = code.replace(exp);
      var words = code.split(' ');

      // Prepare New Words
      var newWords = [];

      // Loop over each word

      words.forEach(function (word) {
        // Match with expression
        var match = word.match(exp);

        if (match) {
          // Set the new Word
          newWords.push(generate(match[0]));
        } else {
          // No match just push it on .
          newWords.push(word);
        }
      });

      return newWords.join(' ');
    }
  };
}; // end function

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = URL2HTML;
} else {
  window.url2html = URL2HTML;
}

/***/ })
/******/ ]);
//# sourceMappingURL=url2html.js.map