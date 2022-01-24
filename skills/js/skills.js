const skillsData = [
  {
    id: 0,
    name: 'TypeScript',
  },
  {
    id: 1,
    name: 'JavaScript',
  },
  {
    id: 2,
    name: 'Node.js',
  },
  {
    id: 3,
    name: 'Express.js',
  },
  {
    id: 4,
    name: 'React',
  },
  {
    id: 5,
    name: 'Next.js',
  },
  {
    id: 6,
    name: 'Gatsby',
  },
  {
    id: 7,
    name: 'Webpack',
  },
  {
    id: 8,
    name: 'HTML5',
  },
  {
    id: 9,
    name: 'jQuery',
  },
  {
    id: 10,
    name: 'CSS/sass',
  },
  {
    id: 11,
    name: 'REST',
  },
  {
    id: 12,
    name: 'Graphql',
  },
  {
    id: 13,
    name: 'MongoDB',
  },
  {
    id: 14,
    name: 'Firebase',
  },
  {
    id: 15,
    name: 'PostgreSQL',
  },
  {
    id: 16,
    name: 'MongoDB',
  },
  {
    id: 17,
    name: 'Java',
  },
  {
    id: 18,
    name: 'SpringBoot',
  },
];

const images = [
  '../assets/crypto.png',
  '../assets/next.png',
  '../assets/north.png',
  '../assets/crwn.png',
  '../assets/unsplash.png',
];
setInterval(() => {
  document.getElementById('next').click();
}, 1000);
const texts = [
  ['TYPESCRIPT'],
  ['NODE/EXPRESS'],
  ['JAVA'],
  ['GRAPHQL'],
  ['NEXTJS/GATSBY'],
];

rgbKineticSlider = new rgbKineticSlider({
  slideImages: images,
  itemsTitles: texts,

  backgroundDisplacementSprite:
    'http://hmongouachon.com/_demos/rgbKineticSlider/map-9.jpg',
  cursorDisplacementSprite:
    'http://hmongouachon.com/_demos/rgbKineticSlider/displace-circle.png',
  cursorScaleIntensity: 0.6,
  cursorMomentum: 0.14,

  swipe: true,
  swipeDistance: window.innerWidth * 0.4,
  swipeScaleIntensity: 2,

  slideTransitionDuration: 1.8,
  transitionScaleIntensity: 30,
  transitionScaleAmplitude: 160,

  nav: true,
  navElement: '.main-nav',

  imagesRgbEffect: false,
  imagesRgbIntensity: 4,
  navImagesRgbIntensity: 120,

  textsDisplay: true,
  textTitleSize: 144,
  textsTiltEffect: true,
  googleFonts: ['Playfair Display:400'],
  textsRgbEffect: true,
  textsRgbIntensity: 1,
});
