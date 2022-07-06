const { Router } = require('express');
const router = Router();
const axios = require("axios");
const { Country, Activities } = require("../db");
const { Op } = require("sequelize");

// // Importar todos los routers;
// // Ejemplo: const authRouter = require('./auth.js')

// // Configurar los routers
// // Ejemplo: router.use('/auth', authRouter);


/* ----------- función controladora --------------*/

const infoCountriesDB = async () => {
  let getDB = await Country.findAll({
    include: Activities,
  });
  return getDB;
}

/* ----------- rutas --------------*/

router.get('/countries', async (req, res, next) => {

  const { name } = req.query;
  const infoDB = await infoCountriesDB()
  try {
    // validar si existen datos en la bd.
    if (!infoDB.length) {
      /* Obtener los datos de la API y asignarlos a un nuevo objeto. */
      const allCountriesAPI = await axios.get('https://restcountries.com/v3/all');

      const inf = allCountriesAPI.data.map(c => {
        return {
          id: c.cca3,
          name: c.name.common,
          imgFlag: c.flags ? c.flags[0] : 'dato no encontrado',
          continent: c.region,
          capital: c.capital ? c.capital[0] : 'dato no encontrado',
          subregion: c.subregion ? c.subregion : 'dato no encontrado',
          area: c.area,
          population: c.population, 
          maps: c.maps.openStreetMaps,         
          Activities: c.Activities,          
        }
      })

      let loadBD = await Country.bulkCreate(inf)
      res.status(200).send(loadBD);

    } else {
      if (name) {
        let search = await Country.findAll({
          where: {
            name: {
              [Op.iLike]: `%${name}%`, // se filtran los paises que contengan el string que llega por query
            }
          },
          include: Activities,
        })
        if (!search.length) {
          res.status(404).json('No se encontro el pais que estas buscando')
        } else {
          res.status(200).json(search)
        }
      } else {
        res.status(200).send(infoDB);
      }
    }
  }
  catch (error) {
    // si no existe se muestra error
    //res.status(404).json({ error: "Upss, el valor ingresado no existe, por favor validar." });
    next(error)
  }
});

router.get('/countries/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    let idCountry = await Country.findOne({
      where: { id: id, },
      include: Activities,
    });
    // if (!idCountry.length !== 3){
    //   res.status(404).send('Id no existente.')
    // }
    res.status(200).json(idCountry)
  } catch (error) {
    //res.status(404).send('Hubo un error, valida la información.')
    next(error)
  }
});

router.post('/activities', async (req, res, next) => {
  try {
    const { name, difficulty, duration, season, countries } = req.body;
    /* Creación de una nueva actividad en la base de datos. */
    const newActivities = await Activities.create({
      name,
      difficulty,
      duration,
      season,
    });
    /* Encontrar todos los países que están en la matriz de países que se pasan en el cuerpo de la
    solicitud. */
    const allCountriesSolict = await Country.findAll({
      where: {
        name: countries,
      },
    });
    /* Agregar la matriz de países en el objeto newActivity. */
    await newActivities.addCountry(allCountriesSolict);
    res.status(200).json(newActivities);
  } catch (error) {
    // res.status(404).send('Actividad exitente, no se puede volver a crear.')
    next(error)
  };

  router.get('/activities', async (req,res, next)=>{
    try {
      let activityCreate = await Activities.findAll({})
      res.status(200).json(activityCreate)      
    } catch (error) {
      next(error)
    };
    })
});


module.exports = router;
