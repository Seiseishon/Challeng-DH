//DataBase
const { Professions } = require("../../database/models");

module.exports = {
    list: async (req, res) => {
        try {
            const response = await Professions.findAll()
            const data = await response

            const dataProfession = {
                meta: {
                    status: 200,
                    URL: `${req.protocol}://${req.get("host")}${req.url}`,
                    count: data.length
                },
                data: data
            }
            res.status(200).json(dataProfession)

        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Server error' });
        }

    }
}
