import { heroes } from "../Data/heroes"

/**
 * 
 * @param {HTLMDivElement} element 
 */
export const asyncAwaitComponent = async (element) => {

    const id1 = '5d86371f2343e37870b91ef1';
    const id2 = '5d86371f1efebc31def272e2';

    //Hasta que el la funcion con el await no termine de ejecutarse no se ejecuta la otra
    //Esto es ultil cuando una funcion depende del valor devuelto de otra funcion y necesitamos esperar 
    //el resultado.
    
    try {                                                    //TryCatch para capturar y manejar errores
        const hero1 = await findHero(id1);
        const hero2 = await findHero(id2);

        element.innerHTML = `${hero1} / ${hero2}`;

    } catch (error) {
        element.innerHTML = error;
    }
}


const findHero = async(id) => {

    const hero = heroes.find(hero => hero.id === id);

    if(!hero)
        throw `Hero not found`;

    return hero.name;
}