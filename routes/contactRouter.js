const express = require('express')
const router = express.Router()
const {getAllContacts, getContact, deleteContact, updateContact, createContact} = require('../controllers/contactController')
const validateToken = require('../middleware/validateTokenHandler')

router.use(validateToken)
router.route("/").get(getAllContacts)
router.route("/").post(createContact)
router.route("/:id").delete(deleteContact)
router.route("/:id").put(updateContact)
router.route("/:id").get(getContact)


module.exports = router