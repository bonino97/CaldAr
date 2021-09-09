const fs = require('fs');

exports.getAllBuildings = async (req, res) => {
  try {
    let buildingJSON = fs.readFileSync('data/buildings.json', 'utf8');
    let buildings = JSON.parse(buildingJSON);
    if (!buildings) return res.status(400).json('Json inexistente.');
    return res.status(200).json(buildings);
  } catch (error) {
    console.error(error);
    return res.status(500).json('Internal server error.');
  }
};

exports.getBuildingById = async (req, res) => {
  try {
    const buildingId = req.params.buildingId;
    let buildingJSON = fs.readFileSync('data/buildings.json', 'utf8');
    let buildings = JSON.parse(buildingJSON);

    let building = buildings.filter(
      (building) => Number(building.id) === Number(buildingId)
    );

    if (building.length === 0)
      return res.status(400).json('No se encontro un edificio con ese Id.');

    return res.status(200).json(building);
  } catch (error) {
    console.error(error);
    return res.status(500).json('Internal server error.');
  }
};

exports.getBuildingByCategory = async (req, res) => {
  try {
    const category = req.params.category;
    let buildingJSON = fs.readFileSync('data/buildings.json', 'utf8');
    let buildings = JSON.parse(buildingJSON);
    let buildingsCategory = buildings.filter(
      (building) => Boolean(building.category) === Boolean(category)
    );
    if (buildingsCategory.length === 0)
      return res.status(400).json('No se encontro un edificio con ese Id.');

    return res.status(200).json(buildingsCategory);
  } catch (error) {
    console.error(error);
    return res.status(500).json('Internal server error.');
  }
};

exports.deleteBuilding = async (req, res) => {
  try {
  } catch (error) {
    console.error(error);
    return res.status(500).json('Internal server error.');
  }
};
