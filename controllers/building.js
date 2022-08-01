const Building = require('../models/building');

exports.addNewBuilding = async (req, res) => {
  try {
    const body = req.body;
    const building = new Building(body);

    if (!building) return res.status(400).json('Error creando el edificio.');

    await building.save();
    return res.status(200).json(building);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};

exports.updateBuilding = async (req, res) => {
  try {
    const buildingId = req.params.buildingId;
    const body = req.body;

    if (!buildingId)
      return res.status(400).json('No existe el Id del Edificio.');

    const building = await Building.findByIdAndUpdate(buildingId, body, {
      new: true,
    });

    if (!building)
      return res.status(400).json('Error actualizando el edificio.');

    return res.status(200).json(building);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};

exports.deleteBuilding = async (req, res) => {
  try {
    const { buildingId } = req.params;

    const building = await Building.findByIdAndDelete(buildingId);

    if (!building) return res.status(400).json('Error eliminando el edificio.');

    return res.status(200).json('Edificio eliminado correctamente.');
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};

exports.getAllBuildings = async (req, res) => {
  try {
    const buildings = await Building.find();
    if (buildings.length === 0)
      return res.status(400).json('No existen edificios.');
    return res.status(200).json(buildings);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};

exports.getBuildingById = async (req, res) => {
  try {
    const { buildingId } = req.params;

    const building = await Building.findById(buildingId);

    if (!building)
      return res.status(400).json('No existe edificio con ese Id.');

    return res.status(200).json(building);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};

exports.getBuildingsByCategory = async (req, res) => {
  try {
    const { category } = req.params;

    const buildings = await Building.find({ category });

    if (buildings.length === 0)
      return res.status(400).json('No existen edificios con esa categoria.');

    return res.status(200).json(buildings);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};
