import { heroes } from "../Data/heroes";


/**
 * 
 * @param {HTLMDivElement} element 
 */
export const asyncComponent = (element) => {

    const id1 ='5d86371f25a058e5b1c8a65e';
    console.log('Inicio de componente');

    const renderHero = (name) =>{
        element.innerHTML = `
            <h1>${name}</h1>
        `;
    }
    
    //Ejecutando nuestra funcion como una promesa
    findHero(id1)
        .then(name => renderHero(name))
        .catch(error => renderHero(error));

    console.log('Fin del componente');
}

/**
 * 
 * @param {String} id 
 * @returns {Promise<String>}
 */
//Creando nuestra funcion con async que la vuelve una promesa
const findHero = async (id) => {
    
    const hero = heroes.find(hero => hero.id === id);
    if(!hero)                                      //Este error se captura en el catch
        throw `Hero with id ${id} not found`;

    return hero.name;
}