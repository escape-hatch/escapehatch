const db = require('./server/db')
const User = require('./server/db/models/user')
const Err = require('./server/db/models/err')
const Link = require('./server/db/models/link')
const user_links = require('./server/db/models/user_links')

const data = {
  user: [
    {
      firstName: 'Jen',
      lastName: 'Smith',
      email: 'jen@jen.com',
      password: '1234',
    },
    {
      firstName: 'Bob',
      lastName: 'Jones',
      email: 'bob@bob.com',
      password: '1234',
    },
    {
      firstName: 'Dave',
      lastName: 'Jones',
      email: 'dave@dave.com',
      password: '1234',
    },
  ],
  err: [
    {
      type: 'TypeError',
      message: `Cannot read property 'be' of undefined`
    },
  ],
  link: [
    {
      link: 'http://cdn2-www.dogtime.com/assets/uploads/gallery/30-impossibly-cute-puppies/impossibly-cute-puppy-8.jpg',
      linkedPostCreated: '2014-03-03',
      linkedPostModified: '2014-03-03',
      vendor: 'github',
      vendor_id: 123
    },
    {
      link: 'http://98441.cdx.c.ooyala.com/oyZDhjczpnDMxVanYahPNBK7iTw7eZ-9/promo251675386',
      linkedPostCreated: '2014-03-03',
      linkedPostModified: '2014-03-03',
      vendor: 'github',
      vendor_id: 456
    },
    {
      link: 'https://s-media-cache-ak0.pinimg.com/736x/80/d3/64/80d364e09d31fcba8af274926d4332ff--teddy-bears-teddy-bear-dogs.jpg',
      linkedPostCreated: '2014-03-03',
      linkedPostModified: '2014-03-03',
      vendor: 'stackapp',
      vendor_id: 789
    },
  ],
  user_links: [
    {
      vote: 'upvote',
      userId: 1,
      linkId: 2,
    },
    {
      vote: 'downvote',
      userId: 1,
      linkId: 1,
    },
    {
      vote: 'upvote',
      userId: 2,
      linkId: 1,
    }
  ]
}

async function main() {
  try {
    const synched = await db.sync()
    const forceSynched = await db.sync({force: true})

    const creatingUsers = User.bulkCreate(data.user, {
      returning: true
    })
    const creatingErrs = Err.bulkCreate(data.err, {
      returning: true
    })
    const creatingLinks = Link.bulkCreate(data.link, {
      returning: true
    })

    const [users, errs, links] = await Promise.all([creatingUsers, creatingErrs, creatingLinks])

    const associatedUser = await users[0].addErr(errs[1])
    const associatedErrA = await errs[0].addLink(links[0])
    const associatedErrB = await errs[0].addLink(links[1])
    const associatedErrC = await errs[0].addLink(links[2])

    const creatingUserLinks = await user_links.bulkCreate(data.user_links, {
      returning: true
    })

    console.log("Finished inserting data")
  }

  catch(err) {
    console.error('There was totally a problem', err, err.stack)
  }
}

main()
.then(function () {
  db.close()
  console.log('connection closed');
  return null;
});
