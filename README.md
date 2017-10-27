url2html
========

Converts a url in to html. Simple.

**Supports**

- Youtube
- Vimeo
- Mp3s (using strangecube.com's embed player)
- Defaults to a simple <a href...

**Why?**
Sometimes you just want to convert a URL to whatever it is - without doing a bunch of processing.

## Installation with NPM

```
npm install url2html --save
```

```
const url2html = require('url2html');
let embedCode = url2html('http://www.youtube.com/watch?v=SKm6JIN0078').get();
```

## Installation with Bower (es5)

```
bower install url2html
```

```
<script src="~/bower_path/url2html/dist/url2html.js"></script>
```

```
let embedCode = url2html('http://www.youtube.com/watch?v=SKm6JIN0078').get();
```

## url2html().parse(text)

Returns a a string of html with links converted to html versions.

    text = "Free Your Mind. http://www.youtube.com/watch?v=SKm6JIN0078 \n\n ";
    text=text+"Meet Momo. https://en.wikipedia.org/wiki/Momo_the_Monster http://www.stateofhorror.com/momo2.jpg";

    content = url2html().parse(text);
    document.write(content);

##url2html.get(link)

Returns html version

    document.write(url2html('http://www.youtube.com/watch?v=SKm6JIN0078').get());

###Sample

    Free Your Mind. http://www.youtube.com/watch?v=SKm6JIN0078 \n\n Meet Momo. https://en.wikipedia.org/wiki/Momo_the_Monster http://www.stateofhorror.com/momo2.jpg

![url2html screen](http://i.imgur.com/Jiya6LE.png)
