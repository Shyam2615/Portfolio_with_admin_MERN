const User = require("../models/user-model");
const Contact = require("../models/contact-model");

const getAllUsers = async (req, res)=>{
    try {
        const users = await User.find({},{
            password:0
        });
        if(!users || users.length === 0){
            return res.status(404).json({
                message : "No users found"
            })
        }
        return res.status(200).json(users);
    } catch (error) {
        next(error);
    }
}

const getAllContacts = async (req, res)=>{

    try {
        const contacts = await Contact.find();
    
        if(!contacts || contacts.length === 0){
            return res.status(404).json({
                message : "No contacts found"
            })
        }
    
        return res.status(200).json(contacts);
    } catch (error) {
        next(error);
    }
}

const deleteUser = async (req, res)=>{
    try {
        const id = req.params.id;
        await User.deleteOne({_id: id},);
        res.status(200).json({
            message: "user deleted Succesfully"
        });
    } catch (error) {
        next(error);
    }
}

const getUsersById = async (req, res)=>{
    try {
        const id = req.params.id;
        const data = await User.findOne({_id : id},{
            password:0
        });
        return res.status(200).json(data);
    } catch (error) {
        res.status(400).json({
            error : error
        });
    }
}

const updateUserById = async (req, res) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const updatedData = await User.updateOne({_id : id}, {
            $set : data,
        });
        console.log(updatedData);
        res.status(200).json(data);
    } catch (error) {
        console.log(error);
    }
}

const deleteContact = async (req, res) => {
    try {
        const id = req.params.id;
        await Contact.deleteOne({_id : id});
        res.status(200).json({
            message : "Message deleted"
        })
    } catch (error) {
        console.log(error);
    }
}

module.exports = {getAllUsers, getAllContacts, deleteUser, getUsersById, updateUserById, deleteContact};