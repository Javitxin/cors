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

const url2 ='http://rickandmortyapi.com/api/character'
app.use(cors())

app.get('/characters', async (req, res) =>{
    try{
        const response = await axios.get(url2);
        const character= response.data.results;
        req.json(characters)
    }catch(err){
        res.status(500).json({mensaje: 'El servidor se ha estropeado'})
    }

    
})

app.get(`/characters/:nombrePersonaje`, async(req, res)=>{
    const nombrePersonaje = req.params.nombrePersonaje;
    const url = `https://rickandmortyapi.com/api/character/?name=${nombrePersonaje}`;

    try {
        const response = await axios.get(url);
        //const character = response.data.results;
        const { name, status, species, gender, origin:{name: originName}, image} = response.data.results[0];

        //res.json(character);
       res.json({ name, status, species, gender, origin:{name: originName}, image});


    } catch(ERROR) {
        res.status(404).json({error: 'personaje no encontrado'});
    }
})

app.listen(3000, () =>{
    console.log('express está escuchando en el puerto http://localhost:3000/characters/');
});