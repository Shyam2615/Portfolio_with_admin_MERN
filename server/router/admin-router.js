const express = require("express");
const router = express.Router();
const {getAllUsers} = require("../controllers/admin-controller");
const {getAllContacts} = require("../controllers/admin-controller");
const {deleteUser} = require("../controllers/admin-controller");
const {getUsersById} = require("../controllers/admin-controller");
const {updateUserById} = require("../controllers/admin-controller");
const {deleteContact} = require("../controllers/admin-controller");
const authMiddleware = require("../middlewares/auth-middleware");
const adminMiddleware = require("../middlewares/admin-middleware")

router.route("/users").get(authMiddleware, adminMiddleware, getAllUsers);
router.route("/contacts").get(authMiddleware,adminMiddleware, getAllContacts);
router.route("/users/:id").get(authMiddleware, adminMiddleware, getUsersById);
router.route("/users/delete/:id").delete(authMiddleware, adminMiddleware, deleteUser);
router.route("/users/update/:id").patch(authMiddleware, adminMiddleware, updateUserById);
router.route("/contacts/delete/:id").delete(authMiddleware, adminMiddleware, deleteContact)

module.exports = router;