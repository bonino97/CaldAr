const fs = require('fs');

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

exports.getBoilerById = async (req, res) => {
  try {
      
  } catch (error) {
    console.error(error);
  }
};

exports.getBoilerByCategory = async (req, res) => {
  try {
  } catch (error) {
    console.error(error);
  }
};

exports.deleteBoiler = async (req, res) => {
  try {
  } catch (error) {
    console.error(error);
  }
};
