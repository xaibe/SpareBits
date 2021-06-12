const express = require("express");
const router = express.Router();
const UserController = require('../controllers/users.controllers');
const checkAuth = require('../middleware/check-auth');
const upload = require('../config/upload');


router.post("/uploadimage", upload.single('file'), UserController.uploadAvatar);

router.get("/",UserController.getAll);
router.post("/login",UserController.loginUser);
router.post("/register",UserController.registerUser);
//router.get("/:_id",UserController.getSingleUser);


router.get("/retrieveAvatar/:avatar", UserController.retrieveAvatar);
router.get("/getsingleuser/:email", UserController.getSingleUser);
router.put("/updateuser/:email", UserController.updateUser);
router.delete("/:_id", UserController.deleteUser);
router.post("/sendmail", UserController.SendMail);
router.post("/verifyEmail", UserController.verifyEmail);
router.post("/updatePassword", UserController.updatePassword);


module.exports = router;