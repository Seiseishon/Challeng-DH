module.exports = (sequelize, DataTypes) => {
    let alias = "ProfessionApplicant";
    
    let colms = {
        applicantId: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        professionID: {
            type: DataTypes.INTEGER,
            primaryKey: true
        }
    };
    
    let config = {
        tableName: "professionApplicant",
        timestamps: false
    };
    
    const ProfessionApplicant = sequelize.define(alias, colms, config);

    return ProfessionApplicant;
}