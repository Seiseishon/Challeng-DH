// DataBase
const { Applicants } = require("../../database/models");

module.exports = {
    list: async (req, res) => {
        try {
            const data = await Applicants.findAll({
                include: [{ association: 'Professions' }]
            });

            const applicantData = {
                meta: {
                    status: 200,
                    URL: `${req.protocol}://${req.get("host")}${req.url}`,
                    count: data.length
                },
                data: data.map((applicant) => {
                    let imgUrl = `${req.protocol}://${req.get("host")}/images/users/${applicant.image}`;
                    return {
                        id: applicant.id,
                        firstName: applicant.firstName,
                        lastName: applicant.lastName,
                        email: applicant.email,
                        urlProfile: applicant.urlProfile,
                        gender: applicant.gender,
                        image: applicant.image = imgUrl,
                        professions: {
                            count: applicant.Professions.length,
                            data: applicant.Professions.map((profession) => {
                                return {
                                    id: profession.id,
                                    profession: profession.profession
                                }
                            })
                        }
                    };
                })
            };
            res.status(200).json(applicantData);

        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Server error' });
        }
    },
    detail: async (req, res) => {
        try {
            const data = await Applicants.findByPk(req.params.id, {
                include: [{ association: 'Professions' }]
            })

            if (!data) {
                throw new Error('El usuario no existe');
            }
            let imgUrl = `${req.protocol}://${req.get("host")}/images/users/${data.image}`;

            const applicant = {
                id: data.id,
                dni: data.dni,
                firstName: data.firstName,
                lastName: data.lastName,
                email: data.email,
                phone: data.phone,
                urlProfile: data.urlProfile,
                birthDate: data.birthDate,
                gender: data.gender,
                image: data.image = imgUrl,
                professions: {
                    count: data.Professions.length,
                    data: data.Professions.map((profession) => {
                        return {
                            id: profession.id,
                            profession: profession.profession
                        }
                    })
                }
            };

            res.json(applicant);

        } catch (error) {
            console.error(error);
            res.status(404).json({ error: 'wrong request' });
        }
    }
}
