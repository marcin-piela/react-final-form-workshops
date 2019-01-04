const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const portfolioRoute = {
  method: 'get',
  path: '/portfolio',
  handler: async () => {
    await sleep(1000);

    return [
      {
        id: 1,
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        description:
          'Aenean tristique iaculis mollis. Maecenas dictum interdum ullamcorper. Pellentesque maximus dignissim quam, ut aliquet libero condimentum nec.',
        image: 'https://s3.amazonaws.com/assets.cloversites.com/www/websites/voyage_home_cropped_desktop.jpg',
        url: 'http://tsh.io',
      },
      {
        id: 2,
        title: 'Phasellus dictum blandit ex, nec ultricies ligula aliquam in.',
        description:
          'Quisque blandit tellus eu pulvinar porttitor. Sed eu ultrices ligula. Morbi lobortis arcu non interdum convallis. Proin facilisis facilisis tellus eget imperdiet.',
        image: 'https://s3.amazonaws.com/assets.cloversites.com/www/websites/aurora_home_cropped_desktop.jpg',
        url: 'http://tsh.io',
      },
      {
        id: 3,
        title: 'Phasellus suscipit eget tellus sed semper.',
        description:
          'Pellentesque pulvinar dapibus elit, quis porttitor metus tempor nec. Nullam eu elit quis erat rhoncus vehicula vel quis quam. Quisque ultricies sed nibh quis malesuada.',
        image: 'https://s3.amazonaws.com/assets.cloversites.com/www/websites/zion_home_cropped_desktop.jpg',
        url: 'http://tsh.io',
      },
      {
        id: 4,
        title: 'Nunc leo nisi, blandit non tempus in, semper et orci. ',
        description:
          'Nullam imperdiet euismod tincidunt. Nulla non varius elit. Proin leo elit, sagittis sit amet convallis sed, mollis vel ipsum. ',
        image: 'https://s3.amazonaws.com/assets.cloversites.com/www/websites/boulevard_home_cropped_desktop.jpg',
        url: 'http://tsh.io',
      },
    ];
  },
};

module.exports = portfolioRoute;
