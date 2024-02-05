function getPersonajes(){
    const nombrePersonajeInput = document.getElementById('nombrePersonaje');
    const personajeInfo = document.getElementById('personajeInfo').value;

    const nombrePersonaje = nombrePersonajeInput.value.toLocaleLowerCase();

    fetch (`http://localhost:3000/characters/${nombrePersonaje}`)
        .then(response => response.json())
        .then(data => {
            if(data){
                containerRule.innerHTML=""
                const { name, status, species, gender, origin:{name: originName}, image} = data;
                personajeInfo.innerHTML =`
                    <h2>${name}</h2>
                    <p>${status}</p>
                    <p>${species}</p>
                    <p>${gender}</p>
                    <p>${originName}</p>
                    <img src="${image} aly="${name}">
                `
            }else {
                container.innerHTML='personaje no encontrado'

            }
        })
    .catch(error => personajeInfo.innerHTML = `<p>Imposible acceder al personaje</p>`)

}