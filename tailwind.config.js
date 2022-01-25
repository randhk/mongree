module.exports = {
  content: ['./src/index.html'],
  theme: {
    extend: {
      fontFamily: {
        'font-kr':  ['Roboto','Noto Sans KR', 'sans-serif']
      },
    },
    colors: {
      'basicpink': '#FDF3F1',
      'basicgreen': '#79C8A4',
      'basicblack': '#233741',
    },  
    margin: {
      'm0a': '0 auto',
    },
    maxWidth: {
      '1140': '1140px',
    },           
    translate: {
      'minus50p': '-50%',
    },
  },
  purge: {
    enabled: true,
    content: ['./src/index.html'],
  },
  plugins: [
    require('tailwindcss'),
    require('tailwindcss-interaction-variants'),
  ],
  variants: {
    textColor: ['group', 'group-hover', 'focus', 'group-disabled'],
  },
}
