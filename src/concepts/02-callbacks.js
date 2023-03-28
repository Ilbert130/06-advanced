import { heroes } from "../Data/heroes";


/**
 * 
 * @param {HTLMDivElement} element 
 */
export const callbacksComponent = (element) => {

    console.log('callbacksComponent');
    const id1 = '5d86371fd55e2e2a30fe1ccb1';
    const id2 = '5d86371fd55e2e2a30fe1ccb';

    //Aqui pasamos la funcion como parametro
    findHero(id1, (error, hero1) => {
        // element.innerHTML = hero?.name || 'No hay heroe';

        //Capturando el error
        if(error){
            element.innerHTML = error;
            return;
        }

        findHero(id2, (error,hero2) =>{
            
            if(error){
                element.innerHTML = error;
                return;
            }

            element.innerHTML = `${hero1.name} / ${hero2.name} `;
    
        });
    });
}

/**
 * 
 * @param {String} id 
 * @param {(error: String|Null, hero: Object)=>void} callback 
 */
//Aqui creamos el callback
const findHero = (id, callback) =>{

    const hero = heroes.find(hero => hero.id === id);
    //Mostrando el error
    if(!hero){
        callback(`Hero with id ${id} not found.`);
        return; //undifined
    }

    //Paso de valor para la funcion por paramtro
    callback(null, hero);

}