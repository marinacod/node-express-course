const express = require('express');
const router = express.Router();

const {
  getPeople,
  addPerson,
  deletePerson,
  updatePerson,
  findPerson,
} = require('../controllers/people');

router.get('/', getPeople);

router.post('/', addPerson);

router.delete('/:id', deletePerson);

router.put('/:id', updatePerson);

router.get('/:id', findPerson);

module.exports = router;
