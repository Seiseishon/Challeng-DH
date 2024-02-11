const { sequelize } = require(".");

module.exports = (sequelize, dataTypes) => {

    let alias = "Professions"
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        profession:{
            type: dataTypes.STRING(200)
        },

        //TIMESTAMPS
        createdAt: Sequelize.DATE,
        updatedAt: Sequelize.DATE,

    };
    let config = {
        tableName: "professions",
    };





    const Profession = sequelize.define(alias, cols, config)

    return Profession
}


