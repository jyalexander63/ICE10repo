// import student model
const User = require('../models/User');

function loadStudentData(req, res) {
    User.Student.find({}).then(function(userList) {
        console.log(userList);
        res.render('./pages/users', {
            pageTitle: 'INFT 2202 - List of Users',
            users: userList
        })
    })
}

/**
 * renders student view
 * @param {*} req 
 * @param {*} res 
 */
function getAllUsers(req, res) {
    loadStudentData(req, res);
}

// Exports
module.exports = {
    getAllUsers
};