/*https://rickandmortyapi.com/api/character/?name=
- Name
  - Status
  - Species
  - gender
  - origin
  - image
*/
const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();

app.use(cors)

app.get(`/characters/:nombrePersonaje`, async(req, res)=>{
    const nombrePersonaje = req.params.nombrePersonaje;
    const url = `https://rickandmortyapi.com/api/character/?name=${nombrePersonaje}`;

    try {
        const response = await axios.get(url);
        const {  results:[{name, status, species, gender, origin}]} = response.data;

        res.json({name, status, species, gender, origin});


    } catch(ERROR) {
        res.status(404).json({error: 'personaje no encontrado'});
    }
})

app.listen(3000, () =>{
    console.log('express está escuchando en el puerto http://localhost:3000/characters/');
});