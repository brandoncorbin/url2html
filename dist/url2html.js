/** ****/ (function (modules) { // webpackBootstrap
/** ****/ 	// The module cache
/** ****/ 	const installedModules = {};
  /** ****/
  /** ****/ 	// The require function

  /** ****/ 	function __webpack_require__ (moduleId) {
    /** ****/
    /** ****/ 		// Check if module is in cache
    /** ****/ 		if (installedModules[moduleId]) {
      /** ****/ 			return installedModules[moduleId].exports;
      /** ****/ 		}
    /** ****/ 		// Create a new module (and put it into the cache)
    /** ****/ 		const module = installedModules[moduleId] = {
      /** ****/ 			i: moduleId,
      /** ****/ 			l: false,
      /** ****/ 			exports: {}
      /** ****/ 		};
    /** ****/
    /** ****/ 		// Execute the module function

    /** ****/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    /** ****/
    /** ****/ 		// Flag the module as loaded
    /** ****/ 		module.l = true;
    /** ****/
    /** ****/ 		// Return the exports of the module
    /** ****/ 		return module.exports;
    /** ****/ 	}
  /** ****/
  /** ****/
  /** ****/ 	// expose the modules object (__webpack_modules__)
  /** ****/ 	__webpack_require__.m = modules;
  /** ****/
  /** ****/ 	// expose the module cache
  /** ****/ 	__webpack_require__.c = installedModules;
  /** ****/
  /** ****/ 	// define getter function for harmony exports
  /** ****/ 	__webpack_require__.d = function (exports, name, getter) {
    /** ****/ 		if (!__webpack_require__.o(exports, name)) {
      /** ****/ 			Object.defineProperty(exports, name, {
        /** ****/ 				configurable: false,
        /** ****/ 				enumerable: true,
        /** ****/ 				get: getter
        /** ****/ 			});
      /** ****/ 		}
    /** ****/ 	};
  /** ****/
  /** ****/ 	// getDefaultExport function for compatibility with non-harmony modules
  /** ****/ 	__webpack_require__.n = function (module) {
    /** ****/ 		const getter = module && module.__esModule ?
      /** ****/ 			function getDefault () {
    return module.default;
  } :
      /** ****/ 			function getModuleExports () {
        return module;
      };

    /** ****/ 		__webpack_require__.d(getter, 'a', getter);
    /** ****/ 		return getter;
    /** ****/ 	};
  /** ****/
  /** ****/ 	// Object.prototype.hasOwnProperty.call
  /** ****/ 	__webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  };

  /** ****/
  /** ****/ 	// __webpack_public_path__
  /** ****/ 	__webpack_require__.p = '';
  /** ****/
  /** ****/ 	// Load entry module and return exports
  /** ****/ 	return __webpack_require__(__webpack_require__.s = 0);
/** ****/ }([
/* 0 */
/** */ (function (module, exports, __webpack_require__) {
    // @flow
    module.exports = function (url) {
      url = url || null;

      const youtube = function youtube (_passedURL) {
        const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
        const match = _passedURL.match(regExp);

        if (match && match[7].length === 11) {
          return `<iframe class="url2html url2html-youtube"width="560" height="315" src="//www.youtube.com/embed/${match[7]}" frameborder="0" allowfullscreen></iframe>`;
        }

        return link(_passedURL);
      };
      const vimeo = function vimeo (_passedURL) {
        const regExp = /(http|https):\/\/(www\.)?vimeo.com\/(\d+)($|\/)/;
        const match = _passedURL.match(regExp);

        if (match) {
          return `<iframe class="url2html url2html-vimeo" src="http://player.vimeo.com/video/${match[2]}?color=f2bc27" width="500" height="281" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>`;
        }

        return link(_passedURL);
      };
      const image = function image (_passedURL) {
        return `<img class="url2html url2html-image" src="${_passedURL}" align="absmiddle" /></span>`;
      };
      var link = function link (_passedURL) {
        return `<a href="${url}" target="_blank" class="url2html url2html-link">${_passedURL}</a>`;
      };
      const audio = function audio (_passedURL) {
        return `<span class="url2html url2html-audio"><object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=10,0,0,0" width="30" height="30"><PARAM NAME=movie VALUE="http://www.strangecube.com/audioplay/online/audioplay.swf?file=${_passedURL}&auto=no&sendstop=yes&repeat=0&buttondir=http://www.strangecube.com/audioplay/online/alpha_buttons/negative&bgcolor=0xffffff&mode=playpause"><PARAM NAME=quality VALUE=high><PARAM NAME=wmode VALUE=transparent><embed src="http://www.strangecube.com/audioplay/online/audioplay.swf?file=${_passedURL}&auto=no&sendstop=yes&repeat=0&buttondir=http://www.strangecube.com/audioplay/online/alpha_buttons/negative&bgcolor=0xffffff&mode=playpause" quality=high wmode=transparent width="30" height="30" align="" TYPE="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer"></embed></object>${link(_passedURL)} </span>`;
      };
      const generate = function generate (_passedURL) {
        let urlToParse = url;

        if (_passedURL) {
          urlToParse = _passedURL;
        }
        let html = void 0;

        // Find the type of processor to use based on various parts of a URL

        if (urlToParse.match('youtube') || urlToParse.match('youtu.be')) {
          html = youtube(urlToParse);
        }
        else if (urlToParse.match('vimeo')) {
          html = vimeo(urlToParse);
        }
        else if (urlToParse.match('.jpg') || urlToParse.match('.png') || urlToParse.match('.gif') || urlToParse.match('.jpeg')) {
          html = image(urlToParse);
        }
        else if (urlToParse.match('.ogg') || urlToParse.match('.mp3') || urlToParse.match('.wav')) {
          html = audio(urlToParse);
        }
        else {
          // When all else fails, at least my it an a href.
          html = link(urlToParse);
        }

        return html;
      }; // end generate

      return {
        get: function get (_url) {
          return generate(_url);
        },
        parse: function parse (code) {
          code = code || '';

          // find all links
          const exp = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
          const items = code.match(exp);

          if (items) {
            items.forEach(item => {
              code = code.replace(item, generate(item));
            });
          }

          return code;
        }
      };
    }; // end function

    // Append for es5 and bower
    if (typeof window !== 'undefined') {
      window.url2html = module.exports;
    }
    /** */ })
/** ****/ ]));
// # sourceMappingURL=url2html.js.map