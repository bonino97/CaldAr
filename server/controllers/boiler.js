const fs = require('fs');
const Boiler = require('../models/boiler');

// Create A New Boiler
exports.addNewBoiler = async (req, res) => {
  try {

    const body = req.body;
    const boiler = new Boiler(body);

    if (!boiler) return res.status(400).json('Error creando el registro de caldera.');

    await boiler.save();
    return res.status(200).json(boiler);

  } catch (error) {

    console.error(error);  //error
    return res.status(500).json({ message: error.message });

  }
};


// UPDATE Or MODIFY A Boiler By ID
exports.updateBoiler = async (req, res) => {
  try {
    
    const body = req.body;

    if (!body.boilerId)
      return res.status(400).json('No existe el Id especificado de la caldera.');

    const boiler = await Boiler.findByIdAndUpdate(body.boilerId, body, {
      new: true,
    });

    if (!boiler)
      return res.status(400).json('Error actualizando datos de la caldera.');

    return res.status(200).json(boiler);

  } catch (error) {

    console.error(error);
    return res.status(500).json({ message: error.message });

  }
};


// DELETE A Boiler By ID
exports.deleteBoiler = async (req, res) => {
  try {
    
    const { boilerId } = req.params;

    const boiler = await Boiler.findByIdAndDelete(boilerId);

    if (!boiler) return res.status(400).json('Error eliminando el registro de caldera.');

    return res.status(200).json('Registro de caldera eliminado correctamente.');

  } catch (error) {

    console.error(error);
    return res.status(500).json({ message: error.message });

  }
};


// GET All Boilers
exports.getAllBoilers = async (req, res) => {
  try {

    const boilers = await Boiler.find();
    if (boilers.length === 0)
      return res.status(400).json('No hay registros de calderas.');
    return res.status(200).json(boilers);

  } catch (error) {

    console.error(error);
    return res.status(500).json({ message: error.message });

  }
};


// GET A Boiler By ID
exports.getBoilerById = async (req, res) => {
  try {
    const boilerId = req.params.boilerId;
    let boilerJSON = fs.readFileSync('data/boilers.json', 'utf8');
    let boilers = JSON.parse(boilerJSON);

    let boiler = boilers.filter(
      (boiler) => Number(boiler.id) === Number(boilerId)
    );

    if (boiler.length === 0)
      return res.status(400).json('No se encontro una caldera con ese Id.');

    return res.status(200).json(boiler);
  } catch (error) {
    console.error(error);
  }
};


// GET A Boiler By Type (A, B, C, or D)
exports.getBoilersByType = async (req, res) => {
  try {
    const boilerType = req.params.boilerType;
    let boilerJSON = fs.readFileSync('data/boilers.json', 'utf8');
    let boilers = JSON.parse(boilerJSON);

    let boiler = boilers.filter(
      (boiler) => boiler.type === boilerType
    );

    if (boiler.length === 0)
      return res.status(400).json(`No se encontraron calderas del tipo ${boilerType}`);

    return res.status(200).json(boiler);

  } catch (error) {
    console.error(error);
    return res.status(500).json('Internal server error.');
  }
};
