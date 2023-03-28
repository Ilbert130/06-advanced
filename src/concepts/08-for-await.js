import { heroes } from '../data/heroes';
/**
 * 
 * @param {HTMLDivElement} element 
 */
export const forAwaitComponent = async( element ) => {

    const id = '5d86371f97c29d020f1e1f6d';

    // for(const hero of await getHeroAsync()){

    // }
    
    //Puedes usar una funcion async dentro de un if usando await para esperar
    // if(await getHeroAsync(id)){
    //     element.innerHTML = 'Este heroe si existe';
    //     return;
    // }

    // element.innerHTML = 'No existe ese heroe'
    
    //Todos los heroes 
    const heroIds = heroes.map(hero => hero.id);

    const heroPromises = getHeroesAsync(heroIds);

    //Un ejemplo de una manera mas optima de hacer lo mismo
    // const Allheroes = await Promise.all(getHeroesAsync(heroIds));
    // for (const hero of Allheroes){
    //     element.innerHTML += `${hero.name} <br/>`
    // }

    //asi se recorre un arreglos de promesas, para esperar que todas se ejecutan
    for await(const hero of heroPromises){
        element.innerHTML += `${hero.name} <br/>`
    }



}

/**
 * 
 * @param {Array<String>} heroIds 
 * @returns {Array<Promise>}
 */
//regresa un arreglo de promesas de heroe y toma el id de los heroes para buscarlos
const getHeroesAsync = ( heroIds ) => {
    
    const heroPromises = [];

    heroIds.forEach( id => {
        heroPromises.push( getHeroAsync(id)  );
    });

    return heroPromises;
}

//Regrasa una promesa de un heroe
const getHeroAsync = async(id) => {

    await new Promise(( resolve ) => {
        setTimeout(() => resolve(), 1000)
    });

    return heroes.find( hero => hero.id === id );
}