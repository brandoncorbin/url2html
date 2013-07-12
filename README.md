url2html
========

Converts a url in to html. Simple. 

**Supports**

- Youtube
- Vimeo
- Mp3s (using strangecube.com's embed player)
- Defaults to a simple <a href...

**Why?** 
I fell in love with Basecamp's automatic conversion of image and video links but couldn't find an existing library.  
	
##url2html.parse(text)
Returns a a string of html with links converted to html versions.

	<script src="https://raw.github.com/brandoncorbin/url2html/master/url2html.min.js" type="text/javascript"></script>
	<script>
        text = "Free Your Mind. http://www.youtube.com/watch?v=SKm6JIN0078 \n\n ";
        text=text+"Meet Momo. https://en.wikipedia.org/wiki/Momo_the_Monster http://www.stateofhorror.com/momo2.jpg"; 
        
        content = url2html.parse(text);
	    document.write(content);
  	</script>

##url2html.get(link)
Returns html version

    <script src="https://raw.github.com/brandoncorbin/url2html/master/url2html.min.js" type="text/javascript"></script>
    <script>
        document.write(url2html.get('http://www.youtube.com/watch?v=SKm6JIN0078'));
    </script>

###Sample
    
    Free Your Mind. http://www.youtube.com/watch?v=SKm6JIN0078 \n\n Meet Momo. https://en.wikipedia.org/wiki/Momo_the_Monster http://www.stateofhorror.com/momo2.jpg

![url2html screen](http://i.imgur.com/Jiya6LE.png)