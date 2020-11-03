const { db, Product } = require('./database');

const seedProducts = [
  {
    title: 'Gouda',
    description: 'creamy, full-flavored, nutty, sweet',
    imageUrl:
      'https://www.liveeatlearn.com/wp-content/uploads/2016/01/gouda-3-680.jpg',
    price: 5.99,
    likes: 1,
  },
  {
    title: 'Brie',
    description: 'fruity, mild, nutty, tangy',
    imageUrl:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.aws.livestrongcdn.com%2Fls-article-image-640%2Fds-photo%2Fgetty%2Farticle%2F99%2F149%2F167172772.jpg&f=1&nofb=1',
    price: 7.99,
    likes: 5,
  },
  {
    title: 'Cheddar',
    description: 'creamy, sharp',
    imageUrl:
      'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fgoldenagecheese.com%2Fwp-content%2Fuploads%2F2014%2F01%2Fsharp_ched.jpg&f=1&nofb=1',
    price: 3.99,
    likes: 4,
  },
  {
    title: 'Camembert',
    description: 'buttery, creamy, milky, sweet',
    imageUrl:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F1.bp.blogspot.com%2F-rYfBV6l54ZQ%2FWabXgjS38HI%2FAAAAAAAALqs%2Ftozi_cLPxvERoKE44-9QMloFUw1FkCJ_wCLcBGAs%2Fs1600%2Fcamembert.jpg&f=1&nofb=1',
    price: 4.5,
    likes: 10,
  },
  {
    title: 'Provolone',
    description: 'buttery, mild, sharp, spicy, sweet, tangy',
    imageUrl: '/images/cheese.png',
    price: 5,
    likes: 12,
  },
  {
    title: 'Mozzarella',
    description: 'fresh, milky',
    imageUrl: '/images/cheese.png',
    price: 5,
    likes: 1,
  },
  {
    title: 'Roquefort',
    description: 'salty, sharp, tangy',
    imageUrl: '/images/cheese.png',
    price: 10,
    likes: 6,
  },
  {
    title: 'Chevre',
    description: 'earthy, tangy, tart',
    imageUrl: '/images/cheese.png',
    price: 10,
    likes: 12,
  },
  {
    title: 'Quark',
    description: 'mild, milky',
    imageUrl: '/images/cheese.png',
    price: 5,
    likes: 4,
  },
  {
    title: 'Butterkase',
    description: 'buttery, mild',
    imageUrl: '/images/cheese.png',
    price: 4,
    likes: 2,
  },
  {
    title: 'Butterkase',
    description: 'buttery, mild',
    imageUrl: '/images/cheese.png',
    price: 4,
    likes: 2,
  },
];

const seed = async () => {
  try {
    // db opens and clears tables
    await db.sync({ foce: true });
    // creates products based on Model created
    await Product.bulkCreate(seedProducts);
  } catch (err) {
    console.error('seed unsuccessful', err);
  }
};

module.exports = seed;

// this module was run directly from the command line as in node xxx.js
// ensures that everytime npm run seed is is executed it will reset the DB tables
if (require.main === module) {
  seed()
    .then(() => {
      console.log('Seeding success!');
      db.close();
    })
    .catch((err) => {
      console.error('Oh no! Something went wrong!');
      console.error(err);
      db.close();
    });
}
