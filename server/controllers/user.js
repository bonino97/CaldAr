const User = require('../models/user');

// Agregar nuevo Usuario
exports.addNewUser = async (req, res) => {
  try {
    const body = req.body;
    const user = new User(body);

    if (!user) return res.status(400).json('Error al crear el usuario.');

    await user.save();
    return res.status(200).json(user);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};

// Actualizar Usuario
exports.updateUser = async (req, res) => {
  try {
    const body = req.body;

    if (!body.userId)
      return res.status(400).json('No existe usuario con ese Id.');

    const user = await User.findByIdAndUpdate(body.userId, body, {
      new: true,
    });

    if (!user) return res.status(400).json('Error al actualizar el usuario.');

    return res.status(200).json(user);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};

// Eliminar usuario
exports.deleteUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await User.findByIdAndDelete(userId);

    if (!user) return res.status(400).json('Error al eliminar el usuario.');

    return res.status(200).json('El usuario ha sido eliminado correctamente.');
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};

//
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
