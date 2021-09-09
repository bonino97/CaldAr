const fs = require('fs');

// Create A New Boiler
exports.addNewBoiler = async (req, res) => {
  try {
    
    const { description, type } = req.body; //data from POSTMAN

    let boilerJSON = fs.readFileSync('data/boilers.json', 'utf8'); //data from JSON file
    let boilers = JSON.parse(boilerJSON);
    if (!boilers) return res.status(400).json('Json inexistente.');  //error no JSON file
    
    if (description && type) {
      const id = String(boilers.length + 1);
      const newBoiler = {id, ...req.body};
      console.log(newBoiler);
      boilers.push(newBoiler);               //push into boilers array
      
      let json = JSON.stringify(boilers);

      fs.writeFile('data/boilers.json', json, 'utf8', function(err) {
        if (err) throw err;
        console.log('complete');
        }
      );

      return res.status(200).json(boilers);  //show all boilers

    }else {
      res.status(500).send({error: 'there was an error fault'});
    }

  } catch (error) {

    console.error(error);  //error

  }
};


// GET All Boilers
exports.getAllBoilers = async (req, res) => {
  try {
    let boilerJSON = fs.readFileSync('data/boilers.json', 'utf8');
    let boilers = JSON.parse(boilerJSON);
    if (!boilers) return res.status(400).json('Json inexistente.');
    return res.status(200).json(boilers);
  } catch (error) {
    console.error(error);
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
exports.getBoilerByType = async (req, res) => {
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

/*
// UPDATE Or MODIFY A Boiler By ID
exports.modifyBoilerById = async (req, res) => {
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
    return res.status(500).json('Internal server error.');
  }
};

router.put('/:id', (req,res) => {
  const { id } = req.params;
  const { title, director, year, rating } = req.body;
  if (title && director && year && rating) {
      _.each(movies, (movie, i) => {
          if (movie.id == id) {
              movie.title = title;
              movie.director = director;
              movie.year = year;
              movie.rating = rating;
          }
      });
      res.json(movies);
  }else {
      res.status(500).send({error: 'there was an error'});
  }
});
*/

// DELETE A Boiler By ID
exports.deleteBoiler = async (req, res) => {
  try {
  } catch (error) {
    console.error(error);
  }
};
