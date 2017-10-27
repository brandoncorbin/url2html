const url2html = require('../src/index');

console.log('****');
console.log(url2html('https://www.youtube.com/watch?v=aY4pZlP6YtE').get());

console.log('****');
console.log(url2html('https://pbs.twimg.com/card_img/921791216525725697/j4GIjeD9?format=jpg&name=600x314').get());

console.log('****');
console.log(url2html('https://soundcloud.com/wavey-hefner/lil-pump-gucci-gang-prod-bighead-gnealz').get());

const code = 'This is a bunch of content with a url in it https://www.youtube.com/watch?v=Frud5RFtTi0';

console.log('****');
console.log(url2html().parse(code));

console.log('**** empty parse');
console.log(url2html().parse());

const embed = url2html('https://vimeo.com/239738052').get();

console.log('****');
console.log('**** VIMEO', embed);
