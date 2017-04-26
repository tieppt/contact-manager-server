const { Router } = require('express');
const cors = require('cors');
const ContactController = require(process.env.ROOT_DIR + '/controllers/ContactController');

const contactRoutes = Router();

contactRoutes.use(cors());

contactRoutes.route('/contacts')
  .get(ContactController.getContactList)
  .post(ContactController.createNewContact);

contactRoutes.route('/contacts/:id')
  .get(ContactController.getContact)
  .put(ContactController.editContact)
  .delete(ContactController.deleteContact);

module.exports = contactRoutes;
