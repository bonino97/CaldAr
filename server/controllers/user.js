const fs = require('fs');

exports.getAllUsers = async (req, res) => {
  try {
    let usersJSON = fs.readFileSync('data/users.json', 'utf8');
    let users = JSON.parse(usersJSON);
    if (!users) return res.status(400).json('Json inexistente.');
    return res.status(200).json(users);
  } catch (error) {
    console.error(error);
  }
};

exports.getUserById = async (req, res) => {
  try {
  } catch (error) {
    console.error(error);
  }
};



exports.getUserByDepartment = async (req, res) => {
  try {
  } catch (error) {
    console.error(error);
  }
};

exports.deleteUser = async (req, res) => {
  try {
  } catch (error) {
    console.error(error);
  }
};
