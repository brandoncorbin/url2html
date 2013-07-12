url2html
========

Converts urls for images, videos (youtube, vimeo), mp3s into html... 

**Supports**
- Youtube
- Vimeo
- Mp3s (using strangecube.com's embed player)
- Defaults to a simple <a href...

**Why?** 
I fell in love with Basecamp's automatic conversion of image and video links, but couldn't find an exisiting library.  

Usage:

    var text = "Free Your Mind. http://www.youtube.com/watch?v=SKm6JIN0078 \n\n Meet Momo. https://en.wikipedia.org/wiki/Momo_the_Monster http://www.stateofhorror.com/momo2.jpg"; 
    var content = url2html.parse(text);
	document.write(content);
  
