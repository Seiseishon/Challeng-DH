
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
    };
    let config = {
        tableName: "professions",
        timestamps: false
    };

    const Profession = sequelize.define(alias, cols, config)

    Profession.associate = (models) => {
        Profession.belongsToMany(models.Applicants, {
            as: 'Applicants',
            through: 'ProfessionApplicant',
            foreignKey: 'professionId',
            otherKey: 'applicantId',
            timestamps: false
        })
    }


    return Profession
}