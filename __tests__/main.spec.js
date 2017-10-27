describe('module', () => {
  const url2html = require('../src');

  describe('generate', () => {
    it('should parse a youtube url', () => {
      const embed = url2html('https://www.youtube.com/watch?v=Frud5RFtTi0').get();

      expect(embed).toContain('url2html-youtube');
    });

    it('should parse a fail on a bad youtube url', () => {
      const embed = url2html('https://youtube.com').get();

      expect(embed).toContain('url2html-link');
    });

    it('should parse a  url', () => {
      const embed = url2html('https://pbs.twimg.com/card_img/921791216525725697/j4GIjeD9?format=jpg&name=600x314').get();

      expect(embed).toContain('url2html-image');
    });

    it('should parse a generic url', () => {
      const embed = url2html('https://icorbin.com').get();

      expect(embed).toContain('url2html-link');
    });

    it('should parse aan audio file  url', () => {
      const embed = url2html('http://joebev.com/joebev-audio/bearmanorradio/BM-02/11-bearmanorradio-Jazz-O-Rama-02.mp3').get();

      expect(embed).toContain('url2html-audio');
    });

    it('should parse aan audio file  url', () => {
      const embed = url2html('http://joebev.com/joebev-audio/bearmanorradio/BM-02/11-bearmanorradio-Jazz-O-Rama-02.mp3').get();

      expect(embed).toContain('url2html-audio');
    });

    it('should parse a viemo url', () => {
      const embed = url2html('https://vimeo.com/239738052').get();

      expect(embed).toContain('url2html-vimeo');
    });

    it('should parse a fail on a bad vimeo url', () => {
      const embed = url2html('https://vimeo.com').get();

      expect(embed).toContain('url2html-link');
    });
  });


  describe('code', () => {
    it('should parse a paragraph of text with links in it', () => {
      const code = 'This is a bunch of content with a url in it https://www.youtube.com/watch?v=Frud5RFtTi0';

      expect(url2html().parse(code)).toContain('url2html-youtube');
    });

    it('should parse pass an empty string ok', () => {
      const code = '';

      expect(url2html().parse(code)).toBe('');
    });
  });
});
