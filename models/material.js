const addLinks = require('../util/links')
const models = require("../models");

'use strict';
module.exports = (sequelize, DataTypes) => {
  const Material = sequelize.define('Material', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    keyName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    presentation: {
      type: DataTypes.STRING,
      allowNull: false
    },
    measurementType: {
      type: DataTypes.STRING,
      allowNull: false
    },
    dimensions: {
      type: DataTypes.STRING,
      allowNull: false
    },
    quantityPresentation: {
      type: DataTypes.INTEGER, 
      isInt: true,
      allowNull: false
    },
    amountToRequest: {
      type: DataTypes.INTEGER, 
      isInt: true,
      allowNull: false
    },
    price: {
      type: DataTypes.INTEGER, 
      isInt: true,
      allowNull: false
    },
    supplier: {
      type: DataTypes.STRING, 
      isInt: true,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true
    },
  },
  {
    hooks: {
      beforeValidate : () => {console.log('BEFORE VALIDATE .. ');},
      afterValidate : () => {console.log('AFTER VALIDATE .. ');},
      beforeCreate : () => {console.log('BEFORE CREATE .. ');},
      validationFailed: function(material, options, err, fn){
        throw new Error(err);
      },
      afterCreate : function(material, options){
        console.log(addLinks(material.get({plain: true})))
        return (addLinks(material.get({plain: true})));
      },
      afterUpdate : function(material, options){
        console.log(addLinks(material.get({plain: true})))
        return (addLinks(material.get({plain: true})));
      },
      afterFind: function(material, options){
        return material.map(el => {
          return addLinks(el)
      })},
      afterFind: function(material, options){
        return (addLinks(material));
      },
      beforeDestroy: function(material, options){
        return material.json({message: "deleted"}).send();
      }
    }
  });
  return Material;
};