const Dev = require("../Models/Dev");
const parseStringAsArray = require("../utils/parseStringAsArrray");

module.exports = {
  async index(request, response) {
    //Buscar todos os devs num raios de 10km
    //Filtrar por tecnologias
    const { latitude, longitude, techs } = request.query;

    const techsArray = parseStringAsArray(techs);

    //Filtrando a busca
    const devs = await Dev.find({
      techs: {
        $in: techsArray
      },
      location: {
        $near: {
          $geometry: {
            type: "Point",
            coordinates: [longitude, latitude]
          },
          $maxDistance: 10000
        }
      }
    });

    return response.json({ devs });
  }
};
