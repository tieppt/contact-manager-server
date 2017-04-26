const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 5
  },
  job: String,
  email: String,
  birthdate: Date
}, {
    collection: 'contacts'
});

const Contact = mongoose.model('Contact', contactSchema);

Contact.findWhere = (options = {}) => {
  return Contact.find(options);
};

Contact.create = (contact = {}) => {
  const c = new Contact(Object.assign({}, contact));
  return c.save();
}

module.exports = Contact;
