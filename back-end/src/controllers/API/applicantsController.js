// DataBase
const { application } = require("express");
const { Applicants } = require("../../database/models");

module.exports = {
  list: async (req, res) => {
    try {
      const data = await Applicants.findAll({
        include: [{ association: "Professions" }],
      });

      const applicantData = {
        meta: {
          status: 200,
          URL: `${req.protocol}://${req.get("host")}${req.url}`,
          count: data.length,
        },
        data: data.map((applicant) => {
          let imgUrl = `${req.protocol}://${req.get("host")}/img/applicants/${
            applicant.image
          }`;
          return {
            id: applicant.id,
            firstName: applicant.firstName,
            lastName: applicant.lastName,
            email: applicant.email,
            urlProfile: applicant.urlProfile,
            gender: applicant.gender,
            image: (applicant.image = imgUrl),
            professions: {
              count: applicant.Professions.length,
              data: applicant.Professions.map((profession) => {
                return {
                  id: profession.id,
                  profession: profession.profession,
                };
              }),
            },
          };
        }),
      };
      res.status(200).json(applicantData);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Server error" });
    }
  },

  detail: async (req, res) => {
    try {
      const data = await Applicants.findByPk(req.params.id, {
        include: [{ association: "Professions" }],
      });

      if (!data) {
        throw new Error("El usuario no existe");
      }
      let imgUrl = `${req.protocol}://${req.get("host")}/img/applicants/${
        data.image
      }`;

      const applicant = {
        meta: {
          status: 200,
        },
        data: {
          id: data.id,
          dni: data.dni,
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          phone: data.phone,
          urlProfile: data.urlProfile,
          birthDate: data.birthDate,
          gender: data.gender,
          image: (data.image = imgUrl),
          professions: {
            count: data.Professions.length,
            data: data.Professions.map((profession) => {
              return {
                id: profession.id,
                profession: profession.profession,
              };
            }),
          },
        },
      };

      res.json(applicant);
    } catch (error) {
      console.error(error);
      res.status(404).json({ error: "wrong request" });
    }
  },

  create: async (req, res) => {
    const data = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      dni: req.body.dni,
      email: req.body.email,
      phone: req.body.phone,
      urlProfile: req.body.urlProfile,
      birthDate: req.body.birthDate,
      gender: req.body.gender,
      image: req.body.image,
    };

    try {
      const newApplicant = await Applicants.create(data);

      const applicantData = {
        meta: {
          status: 200,
          URL: `${req.protocol}://${req.get("host")}${req.url}`,
          count: newApplicant.length,
        },
        data: newApplicant,
      };

      res.json(applicantData);
    } catch (error) {
      console.error(error);
      res.status(404).json({ error: "wrong request" });
    }
  },

  edit: async (req, res) => {
    const idToEdit = req.params.id;

    try {
      const applicantEdit = await Applicants.update(
        {
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          dni: req.body.dni,
          email: req.body.email,
          phone: req.body.phone,
          urlProfile: req.body.urlProfile,
          birthDate: req.body.birthDate,
          gender: req.body.gender,
          image: req.body.image,
          profession: Professions.findByPk(req.body.profession),
        },
        {
          where: { id: idToEdit },
        }
      );
    } catch (error) {
      console.error(error);
      res.status(404).json({ error: "wrong request" });
    }
  },

  delete: async (req, res) => {
    try {
      const idToDelete = await req.params.id;

      Applicants.destroy({
        where: { id: idToDelete },
      });
    } catch (error) {
      console.error(error);
      res.status(404).json({ error: "wrong request" });
    }
  },
};
