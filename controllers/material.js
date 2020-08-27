const models = require("../models");
const {getAllMaterials, getMaterialById, createMaterial, updateMaterial} = require('../service/materialService')

const create = async  (req, res) => {
  createMaterial(req.body).then((data) => {
    res.header('POST-METHOD', 'CREATED')
    return res.status(200).json(data); 
  }).
  catch((Error) => {
    return res.status(400).json({ Error: Error.message });
  });
};

const getAll = async (req, res) => {
  getAllMaterials().then((data) => {
    return res.status(200).json(data); 
  }).catch((err) => {
    return res.status(500).json({ err: err.message });
  });
};

const getById = async (req, res) => {
  getMaterialById(req.params.materialId).then((data) => {
    return res.status(200).json(data); 
  }).catch((err) => {
    return res.status(500).json({ err: err.message });
  });
};

const update = async (req, res) => {
  updateMaterial(req.body,req.params.materialId)
  .then((data) => {
    res.header('PUT-METHOD', 'UPDATED')
    return res.status(200).json(data); 
  }).catch((err) => {
    return res.status(500).json({ err: err.message }).send();
  });
};

const deleteMaterial = async (req, res) => {
  try {
    const { materialId } = req.params;
    const deleted = await models.Material.destroy({
      where: { id: materialId }
    });
    if (deleted) {
      return res.status(204).send();
    }
    throw new Error("Material not found");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
    create,
    getAll,
    getById,
    update,
    deleteMaterial
};
