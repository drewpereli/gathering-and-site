const imagesPath = '../images'; // Relative to ./src/styles/app.css

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'weed-1': `url('${imagesPath}/weed-1.jpg')`,
        'weed-2': `url('${imagesPath}/weed-2.jpg')`,
        'weed-3': `url('${imagesPath}/weed-3.jpg')`,
        'weed-4': `url('${imagesPath}/weed-4.jpg')`,
        'weed-5': `url('${imagesPath}/weed-5.jpg')`,
      },
      height: {
        '50vh': '50vh',
        '80vh': '80vh',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
