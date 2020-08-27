const addLinks = require('../util/links')
const models = require("../models");
  
const getAllMaterials = async () => {
    return await models.Material.findAll({raw: true})
    .then((data) => {
        return data.map(el => {
            return addLinks(el)
        })
    }).catch((err) => {
        console.log(err);
    });
  };
  
const getMaterialById = async (materialId) => {
      return await models.Material.findOne({
        where: { id: materialId },  
        raw: true})
      .then((data) => {
        return addLinks(data); 
      }).catch((err) => {
          console.log(err);
      });
    };

const createMaterial = async (material) => {
        return await models.Material.create(material)
        .then((data) => {
          return data.get({plain:true})
        }).catch((err) => {
          throw new Error(err.message);
        });
      };
      
const updateMaterial = async (material, materialId) => {
        const updated= await models.Material.update(material, {
            where: { id: materialId }});
            if (updated) {
                return await models.Material.findOne({ where: { id: materialId } })
                .then ((data) => {
                    return addLinks(data.get({plain: true})); 
                }).catch((err) => {
                    console.log(err);
                });
            }
        };

  module.exports = {
    getAllMaterials,
    getMaterialById,
    createMaterial,
    updateMaterial
};
