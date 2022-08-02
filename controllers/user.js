const User = require("../models/user");
// Prueba
// Agregar nuevo Usuario
exports.addNewUser = async (req, res) => {
  try {
    const body = req.body;
    const user = new User(body);

    if (!user) return res.status(400).json("Error al crear el usuario.");

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
      return res.status(400).json("No existe usuario con ese Id.");

    const user = await User.findByIdAndUpdate(body.userId, body, {
      new: true,
    });

    if (!user) return res.status(400).json("Error al actualizar el usuario.");

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

    if (!user) return res.status(400).json("Error al eliminar el usuario.");

    return res.status(200).json("El usuario ha sido eliminado correctamente.");
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};

// Listar todos los Usuarios
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();

    if (users.length === 0)
      return res.status(400).json("No se han encontrado usuarios.");

    return res.status(200).json(users);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};

// Obtener Usuario por Id.
exports.getUserById = async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await User.findById(userId);

    if (!user) return res.status(400).json("No existe usuario con ese Id.");

    return res.status(200).json(user);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};

// Obtener Usuarios por departamento.
exports.getUserByDepartment = async (req, res) => {
  try {
    const { department } = req.params;
    const users = await User.find({ department });

    if (users.length === 0)
      return res.status(400).json("No existen usuarios es ese Departamento.");

    return res.status(200).json(users);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};
