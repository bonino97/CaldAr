const fs = require('fs');

exports.getAllUsers = async (req, res) => {
  try {
    let usersJSON = fs.readFileSync('data/users.json', 'utf8');
    let users = JSON.parse(usersJSON);
    if (!users) return res.status(400).json('Archivo Json inexistente.');
    return res.status(200).json(users);
  } catch (error) {
    console.error(error);
    return res.status(500).json('Error Interno del Servidor.');
  }
};

exports.getUserById = async (req, res) => {
  try {
    const userId = req.params.userId;
    console.log('Valor', userId);
    let userJSON = fs.readFileSync('data/users.json', 'utf8');
    let users = JSON.parse(userJSON);

    let user = users.filter((user) => Number(user.id) === Number(userId));

    if (user.length === 0)
      return res.status(400).json('No se encontro el ID de usuario.');

    return res.status(200).json(user);
  } catch (error) {
    console.error(error);
    return res.status(500).json('Error Interno del Servidor.');
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
    const userId = req.params.userId;
    console.log(userId);
    let usersJSON = fs.readFileSync('data/users.json', 'utf8');
    let users = JSON.parse(usersJSON);

    let userIndex = users.findIndex(
      (user) => Number(user.id) === Number(userId)
    );

    if (userIndex === -1) {
      return res.status(400).send({ error: `No existe el Id: ${userId}.` });
    }
    users.splice(userIndex, 1);
    fs.writeFileSync('data/users.json', JSON.stringify(users), {
      encoding: 'utf8',
      flag: 'w',
    });

    return res.status(200).json(users);
  } catch (error) {
    console.error(error);
    return res.status(500).json('Error Interno del Servidor.');
  }
};
