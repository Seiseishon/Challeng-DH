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
            type: dataTypes.STRING(255),
            notNull: true
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
            type: dataTypes.STRING(255),
            notNull: true
        },
    };
    let config = {
        tableName: "applicants",
        timestamps: false
    }

    const Applicant = sequelize.define(alias, cols, config);

    Applicant.associate = (models) => {
        Applicant.belongsToMany(models.Professions, {
            as: 'Professions',
            through: 'ProfessionApplicant',
            foreignKey: 'applicantId',
            otherKey: 'professionId',
            timestamps: false
        });
    }

    return Applicant
}
