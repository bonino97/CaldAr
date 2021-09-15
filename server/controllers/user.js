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
    const department = req.params.department;
    console.log('Valor', department);
    let userJSON = fs.readFileSync('data/users.json', 'utf8');
    let users = JSON.parse(userJSON);

    let usersDepartment = users.filter(
      (user) => String(user.department) === String(department)
    );

    if (usersDepartment.length === 0)
      return res.status(400).json('No se encontro el Departamento.');

    return res.status(200).json(usersDepartment);
  } catch (error) {
    console.error(error);
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const userId = req.params.userId;
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

//
exports.addNewUser = async (req, res) => {
  try {
    const { first_name, last_name, email, department } = req.body;
    console.log(req.body);
    let usersJSON = fs.readFileSync('data/users.json', 'utf8');
    let users = JSON.parse(usersJSON);

    if (!first_name) {
      return res.status(400).send({ error: 'No existe el nombre.' });
    }

    if (!last_name) {
      return res.status(400).send({ error: 'No existe el apellido.' });
    }
    if (!email) {
      return res.status(400).send({ error: 'No existe el email.' });
    }

    if (!department) {
      return res.status(400).send({ error: 'No existe el departamento.' });
    }

    const userId = Number(users[users.length - 1].id) + 1;
    const newUser = { id: userId, first_name, last_name, email, department };
    users.push(newUser);

    fs.writeFileSync('data/users.json', JSON.stringify(users), {
      encoding: 'utf8',
      flag: 'w',
    });

    return res.status(200).json(users);
  } catch (error) {
    console.error(error);
    return res.status(500).json('Internal server error.');
  }
};

//
exports.updateUser = async (req, res) => {
  try {
    const { userId, first_name, last_name, email, department } = req.body;
    console.log(userId);
    let usersJSON = fs.readFileSync('data/users.json', 'utf8');
    let users = JSON.parse(usersJSON);
    let userIndex = users.findIndex(
      (user) => Number(user.id) === Number(userId)
    );

    if (userIndex === -1) {
      return res.status(400).send({ error: `No existe el Id: ${userId}.` });
    }

    if (!first_name) {
      return res.status(400).send({ error: 'No existe el nombre.' });
    }

    if (!last_name) {
      return res.status(400).send({ error: 'No existe el apellido.' });
    }
    if (!email) {
      return res.status(400).send({ error: 'No existe el email.' });
    }

    if (!department) {
      return res.status(400).send({ error: 'No existe el departamento.' });
    }

    const updateUser = {
      id: Number(userId),
      first_name,
      last_name,
      email,
      department,
    };

    users[userIndex] = updateUser;

    fs.writeFileSync('data/users.json', JSON.stringify(users), {
      encoding: 'utf8',
      flag: 'w',
    });

    return res.status(200).json(users);
  } catch (error) {
    console.error(error);
    return res.status(500).json('Internal server error.');
  }
};
