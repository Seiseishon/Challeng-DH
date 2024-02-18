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
                data: data.map((element) => {
                    return {
                        id: element.id,
                        firstName: element.firstName,
                        lastName: element.lastName,
                        email: element.email,
                        urlProfile: element.urlProfile,
                        gender: element.gender,
                        image: element.image,
                        professions: {
                            count: element.Professions.length,
                            data: element.Professions.map((profession) => {
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
    }
}
