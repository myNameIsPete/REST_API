const mongoose = require('mongoose');
const { MONGODB } = process.env;
// const Member = require('./../models/member');
mongoose
  .connect(MONGODB)
  .catch(err => console.log('Could not connect to the database'));

// const gretzky = new Member({
//   name: 'Gerald Palmer',
//   year: 2000,
//   bio: '<p>Here is some content for the bio section.</p>',
//   date_inducted: 123,
//   member_type: 'honouree',
//   video: '',
//   show_with_inductees: false,
//   sport: 'football',
//   memorabilia: [
//     {
//       title: 'Winning Trophy',
//       image: 'trophy.jpg',
//       description: '<p>Some content for the memorabilia section.</p>'
//     }
//   ]
// });

// gretzky
//   .save()
//   .then(response => console.log('Record was added'))
//   .catch();
