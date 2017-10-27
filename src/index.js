// @flow
module.exports = function (url) {
  url = url || null;
  let window;

  const link = _passedURL => {
    return `<a href="${url}" target="_blank" class="url2html url2html-link">${_passedURL}</a>`;
  };

  const goat = _passedURL => {
    if (window) {
      link(_passedURL);
    }
  };

  const youtube = _passedURL => {
    const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    const match = _passedURL.match(regExp);

    if (match && match[7].length === 11) {
      return `<iframe class="url2html url2html-youtube"width="560" height="315" src="//www.youtube.com/embed/${match[7]}" frameborder="0" allowfullscreen></iframe>`;
    }

    return link(_passedURL);
  };
  const vimeo = _passedURL => {
    const regExp = /(http|https):\/\/(www\.)?vimeo.com\/(\d+)($|\/)/;
    const match = _passedURL.match(regExp);

    if (match) {
      return `<iframe class="url2html url2html-vimeo" src="http://player.vimeo.com/video/${match[2]}?color=f2bc27" width="500" height="281" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>`;
    }

    return link(_passedURL);
  };
  const image = _passedURL => {
    return `<img class="url2html url2html-image" src="${_passedURL}" align="absmiddle" /></span>`;
  };

  const audio = _passedURL => {
    return `<span class="url2html url2html-audio"><object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=10,0,0,0" width="30" height="30"><PARAM NAME=movie VALUE="http://www.strangecube.com/audioplay/online/audioplay.swf?file=${_passedURL}&auto=no&sendstop=yes&repeat=0&buttondir=http://www.strangecube.com/audioplay/online/alpha_buttons/negative&bgcolor=0xffffff&mode=playpause"><PARAM NAME=quality VALUE=high><PARAM NAME=wmode VALUE=transparent><embed src="http://www.strangecube.com/audioplay/online/audioplay.swf?file=${_passedURL}&auto=no&sendstop=yes&repeat=0&buttondir=http://www.strangecube.com/audioplay/online/alpha_buttons/negative&bgcolor=0xffffff&mode=playpause" quality=high wmode=transparent width="30" height="30" align="" TYPE="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer"></embed></object>${link(_passedURL)} </span>`;
  };
  const generate = _passedURL => {
    let urlToParse = url;

    if (_passedURL) {
      urlToParse = _passedURL;
    }
    let html;

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
    else if (urlToParse.match('goat-test')) {
      html = goat(urlToParse);
    }
    else {
      // When all else fails, at least my it an a href.
      html = link(urlToParse);
    }

    return html;
  }; // end generate

  return {
    get: _url => {
      return generate(_url);
    },
    parse (code) {
      code = code || '';

      // find all links
      const exp = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#/%?=~_|!:,.;]*[-A-Z0-9+&@#/%=~_|])/ig;
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

window.url2html = module.exports;