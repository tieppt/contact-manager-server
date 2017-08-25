const Contact = require('../models/ContactModel');

function getContactList(req, res) {
  Contact.findWhere({})
    .then(contacts => {
      res.json(contacts);
    })
    .catch(err => {
      res.status(404).json({errorCode: '404', errors: err});
    });
};

function createNewContact(req, res) {
  Contact.create(req.body).then((data) => {
    res.json({created: data});
  }).catch((err) => {
    const { errors } = err;
    if (errors) {
      err = errors;
    }
    res.status(500).json({errorCode: '1010', errors: err });
  });
}

function getContact(req, res) {
  Contact.findById(req.params.id)
    .then(contact => {
      res.json(contact);
    })
    .catch(err => {
      res.status(404).json({errorCode: '404', errors: err});
    });
}

function editContact(req, res) {
  let contact = Object.assign({}, req.body);
  Contact.findByIdAndUpdate(req.params.id, contact)
    .then((data) => {
      if (!data) {
        return res.status(404).json({
          errorCode: '404',
          errors: {
            message: 'Not found'
          }
        });
      }
      res.json({updated: true});
    })
    .catch((err) => {
        res.status(500).json({errorCode: '1020', errors: err });
    });
}

function deleteContact(req, res) {
  Contact.findByIdAndRemove(req.params.id)
    .then((data) => {
      if (!data) {
        return res.status(404).json({
          errorCode: '404',
          errors: {
            message: 'Not found'
          }
        });
      }
      res.json({deleted: true});
    })
    .catch((err) => {
      res.status(500).json({errorCode: '1110', errors: err });
    });
}

// export to the world
module.exports = {
  getContactList,
  createNewContact,
  getContact,
  editContact,
  deleteContact
};
