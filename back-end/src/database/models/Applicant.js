const { sequelize } = require(".");

module.exports = (sequelize, dataTypes) => {
    let alias = "Applicants"
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        dni: {
            type: dataTypes.BIGINT.UNSIGNED
        },
        firstName: {
            type: dataTypes.STRING(45),
            notNull: true
        },
        lastName: {
            type: dataTypes.STRING(30),
            notNull: true
        },
        email: {
            type: dataTypes.STRING(200),
            unique: true,
            notNull: true
        },
        phone: {
            type: dataTypes.INTEGER.UNSIGNED,
            notNull: true
        },
        urlProfile: {
            type: dataTypes.STRING(255)
        },
        birthDate: {
            type: dataTypes.DATE,
            notNull: true
        },
        gender: {
            type: dataTypes.CHAR(1),
            notNull: true
        },
        image: {
            type: dataTypes.STRING(255)
        },
        //TIMESTAMPS
        createdAt: Sequelize.DATE,
        updatedAt: Sequelize.DATE,
    };
    let config = {
        tableName: "applicants"
    }


    const Applicant = sequelize.define(alias, cols, config)

    return Applicant
}