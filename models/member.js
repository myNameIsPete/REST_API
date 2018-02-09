const mongoose = require('mongoose');

const memberSchema = mongoose.Schema({
  name: { required: true, type: String },
  year: { required: true, type: Number },
  bio: { required: true, type: String },
  date_inducted: { required: true, type: Date },
  member_type: { required: true, type: String },
  video: { type: String },
  show_with_inductees: { type: Boolean },
  sport: { type: String, required: true },
  memorabilia: [
    {
      title: { type: String },
      image: { type: String },
      description: { type: String }
    }
  ]
});

const Member = mongoose.model('member', memberSchema);

module.exports = Member;
