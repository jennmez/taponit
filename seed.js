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
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.d0lax-30T4Q-fBrGFL4LAAHaGL%26pid%3DApi&f=1',
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
    imageUrl:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.7SrH98PijIkuLjjJEmxumgHaGL%26pid%3DApi&f=1',
    price: 5,
    likes: 12,
  },
  {
    title: 'Mozzarella',
    description: 'fresh, milky',
    imageUrl:
      'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Foffbeathome.com%2Fwp-content%2Fblogs.dir%2F4%2Ffiles%2F2012%2F07%2F2012-07-19-Mozzarella1v2_rect540.jpg&f=1&nofb=1',
    price: 5,
    likes: 1,
  },
  {
    title: 'Roquefort',
    description: 'salty, sharp, tangy',
    imageUrl:
      'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F2836%2F2982%2Fproducts%2Froquefort-cheese-making-reciep_grande.jpg%3Fv%3D1551370290&f=1&nofb=1',
    price: 10,
    likes: 6,
  },
  {
    title: 'Chevre',
    description: 'earthy, tangy, tart',
    imageUrl:
      'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.curdsandwhey.co.nz%2Fwp-content%2Fuploads%2Fgoat-chevre-cheese-starter-kit.jpg&f=1&nofb=1',
    price: 10,
    likes: 12,
  },
  {
    title: 'Quark',
    description: 'mild, milky',
    imageUrl:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.cooksinfo.com%2Fwp-content%2Fuploads%2Fquark.jpg&f=1&nofb=1',
    price: 5,
    likes: 4,
  },
  {
    title: 'Butterkase',
    description: 'buttery, mild',
    imageUrl:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fboarshead.com%2Fimg%2F_content%2Fproduct%2F961-pre-cut-butterkase-cheese%2Fmed.1405096736.jpg&f=1&nofb=1',
    price: 4,
    likes: 2,
  },
];

const seed = async () => {
  try {
    // db opens and clears tables
    await db.sync({ force: true });
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
