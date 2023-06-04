const express = require('express');
const router = express.Router();
const verifyToken = require("../utils/verifyToken")

const { updateUser,
    deleteUser,
    getUser,
    getUsers } = require('../controllers/user');
//const { getUser, getUsers, createUser } = require('../controllers/user');
router.get("/checkauthentication", verifyToken ,(req,res,next)=>{

    res.send("you are Logged in")
})
//UPDATE
router.put("/:id", updateUser);
//DELETE
router.delete("/:id", deleteUser);
//GET
router.get("/:id", getUser);
//GET ALL
router.get("/", getUsers);
module.exports = router;
