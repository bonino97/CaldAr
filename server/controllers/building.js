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
    const category = req.params.category === 'true' ? true : false;
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
    const buildingId = req.params.buildingId;

    let buildingJSON = fs.readFileSync('data/buildings.json', 'utf8');

    let buildings = JSON.parse(buildingJSON);
    if (!buildings) return res.status(400).json('Json Inexistente.');

    let buildingIndex = buildings.findIndex(
      (building) => Number(building.id) === Number(buildingId)
    );

    if (buildingIndex === -1) {
      return res
        .status(400)
        .send({ error: `No existe el edificio con id: ${buildingId} .` });
    }

    buildings.splice(buildingIndex, 1);

    fs.writeFileSync('data/buildings.json', JSON.stringify(buildings), {
      encoding: 'utf8',
      flag: 'w',
    });

    return res.status(200).json(buildings);
  } catch (error) {
    console.error(error);
    return res.status(500).json('Internal server error.');
  }
};

exports.addNewBuilding = async (req, res) => {
  try {
    const { address, category } = req.body;

    let buildingJSON = fs.readFileSync('data/buildings.json', 'utf8');
    let buildings = JSON.parse(buildingJSON);
    if (!buildings) return res.status(400).json('Json Inexistente.');

    if (!address) {
      return res.status(400).send({ error: 'No existe la direccion.' });
    }

    if (!category) {
      return res.status(400).send({ error: 'No existe la categoria.' });
    }

    const buildingId = Number(buildings[buildings.length - 1].id) + 1;
    const newBuilding = { id: buildingId, address, category };
    buildings.push(newBuilding);

    fs.writeFileSync('data/buildings.json', JSON.stringify(buildings), {
      encoding: 'utf8',
      flag: 'w',
    });

    return res.status(200).json(buildings);
  } catch (error) {
    console.error(error);
    return res.status(500).json('Internal server error.');
  }
};

exports.updateBuilding = async (req, res) => {
  try {
    const { buildingId, address, category } = req.body;

    let buildingJSON = fs.readFileSync('data/buildings.json', 'utf8');

    let buildings = JSON.parse(buildingJSON);
    if (!buildings) return res.status(400).json('Json Inexistente.');

    let buildingIndex = buildings.findIndex(
      (building) => Number(building.id) === Number(buildingId)
    );

    if (buildingIndex === -1) {
      return res
        .status(400)
        .send({ error: `No existe el edificio con id: ${buildingId} .` });
    }

    if (!address) {
      return res.status(400).send({ error: 'No existe la direccion.' });
    }

    if (!category) {
      return res.status(400).send({ error: 'No existe la categoria.' });
    }

    const updatedBuilding = {
      id: Number(buildingId),
      address,
      category: category === 'true' ? true : false,
    };

    buildings[buildingIndex] = updatedBuilding;

    fs.writeFileSync('data/buildings.json', JSON.stringify(buildings), {
      encoding: 'utf8',
      flag: 'w',
    });

    return res.status(200).json(buildings);
  } catch (error) {
    console.error(error);
    return res.status(500).json('Internal server error.');
  }
};
