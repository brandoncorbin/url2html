//  url2html.js 0.0.1
//  
//  (c) 2013 Brandon Corbin
//  url2html my be freely distributed under the MIT license.
//  
var url2html = {
	
	// url2html.parse(text)
	// Main function for parsing a textfile with multiple links
	parse: function(code) {
		var code = code;
		// find all links
		var exp = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
		var items = code.match(exp);
		for (i in items) {
			code = code.replace(items[i], url2html.get(items[i]));
		}
		return code;

	},
	// url2html.get(link)
	// Get the html version for a single link
	get: function(linkURL) {
		var html;
		// Find the type of processor to use based on various parts of a URL
		if (linkURL.search('youtube') != -1 || linkURL.search('youtu.be') != -1) {
			html = url2html.youtube(linkURL);
		} else if (linkURL.search('vimeo') != -1) {
			html = url2html.vimeo(linkURL);
		} else if (linkURL.search('.jpg') != -1 || linkURL.search('.png') != -1 || linkURL.search('.gif') != -1 || linkURL.search('.jpeg') != -1) {
			html = url2html.image(linkURL);
		} else if (linkURL.search('.ogg') != -1 || linkURL.search('.mp3') != -1 || linkURL.search('.wav') != -1) {
			html = url2html.audio(linkURL);
		} else {
			// When all else fails, at least my it an a href.
			html = url2html.link(linkURL);
		}
		return html;

	},
	youtube: function(linkURL) {
		var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
		var match = linkURL.match(regExp);
		if (match && match[7].length == 11) {
			return '<span class="url2html youtube"><iframe width="560" height="315" src="//www.youtube.com/embed/' + match[7] + '" frameborder="0" allowfullscreen></iframe></span>';
		} else {
			return url2html.link(linkURL);
		}
	},
	vimeo: function(linkURL) {
		var regExp = /http:\/\/(www\.)?vimeo.com\/(\d+)($|\/)/;
		var match = linkURL.match(regExp);
		if (match) {
			return '<span class="url2html vimeo"><iframe src="http://player.vimeo.com/video/' + match[2] + '?color=f2bc27" width="500" height="281" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe></span>';
		} else {
			return url2html.link(linkURL);
		}
	},
	image: function(linkURL) {
		return '<span class="url2html image"><img src="' + linkURL + '" align="absmiddle" /></span>';
	},
	link: function(linkURL) {
		return '<a href="' + linkURL + '" target="_blank" class="url2html link">' + linkURL + '</a>';
	},
	audio: function(linkURL) {
		return '<span class="url2html audio"><object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=10,0,0,0" width="30" height="30"><PARAM NAME=movie VALUE="http://www.strangecube.com/audioplay/online/audioplay.swf?file=' + linkURL + '&auto=no&sendstop=yes&repeat=0&buttondir=http://www.strangecube.com/audioplay/online/alpha_buttons/negative&bgcolor=0xffffff&mode=playpause"><PARAM NAME=quality VALUE=high><PARAM NAME=wmode VALUE=transparent><embed src="http://www.strangecube.com/audioplay/online/audioplay.swf?file=' + linkURL + '&auto=no&sendstop=yes&repeat=0&buttondir=http://www.strangecube.com/audioplay/online/alpha_buttons/negative&bgcolor=0xffffff&mode=playpause" quality=high wmode=transparent width="30" height="30" align="" TYPE="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer"></embed></object>' + url2html.link(linkURL) + ' </span>';
	}

}