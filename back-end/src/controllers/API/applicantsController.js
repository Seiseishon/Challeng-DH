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
                data: data.map((Element) => {
                    return {
                        id: Element.id,
                        FisrtName: Element.firstName,
                        LastName: Element.lastName,
                        Email: Element.email,
                        UrlProfile: Element.urlProfile
                        ? Element.urlProfile
                        : 'sin perfil en linkedin',
                        Gender: Element.gender,
                        Image: Element.image
                        ? Element.image
                        : 'defecto.jpg',
                        Profession: Element.profession
                        ? Element.profession.map((Element, i) =>{
                            return {id: i, Element}
                        })
                        : 'without profession'
                    }
                })
            }

            res.status(200).json(applicantData);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Server error' });
        }
    }
}
