//Las promeasas son asincronas en javascript
import { heroes } from "../Data/heroes";

/**
 * 
 * @param {HTLMDivElement} element 
 */
export const promiseComponent = (element) => {

    const renderHero = (hero) => {
        element.innerHTML = hero.name;
    }

    const renderTwoHeros = (hero1, hero2) => {
        element.innerHTML = `
            <h3>${hero1.name} / ${hero2.name}</h3>
        `;
    }

    const renderError = (error) =>{
        element.innerHTML = `
            <h3>${error}</h3>
        `;
    }

    const id1 = '5d86371fd55e2e2a30fe1ccb2';
    const id2 = '5d86371fd55e2e2a30fe1cc3';

    //Cuando estamos ejecuantando la promesa tenemos el then y el catch para cacturar el resultado
    //then espara si la promese funciona 
    //catch es por si la promesa no funciona
    //finally es una funcion que se va ejecutar despues del then o el catch
    
    // findHero(id1)   //invocando la promesa                       //!forma 1
    //     .then(hero1 =>{

    //         findHero(id2)  //invocando la promesa
    //             .then(hero2 =>{
    //                 renderTwoHeros(hero1,hero2);
    //             })
    //             .catch(error => renderError(error));
    //     })  //render hero
    //     .catch(error => renderError(error));

    // let hero1;                                                    //!forma 2
    // findHero(id1)
    //     .then(hero => {
    //         hero1 = hero;
    //         return findHero(id2); //Si retornas una promesa puedes llamar otro then
    //     }).then (hero =>{
    //         renderTwoHeros(hero1,hero);
    //     })
    //     .catch(error => renderError(error));
    
                                                                     //!forma 3
    Promise.all([
        findHero(id1),
        findHero(id2)
    ])
    .then((arregloDePromesa) => renderTwoHeros(arregloDePromesa[0],arregloDePromesa[1]))
    .catch(error => renderError(error));
}

/**
 * 
 * @param {String} id 
 * @returns {Promise}
 */
const findHero = (id) => {

    //Asi se crea la promesa
    //resolve: Es una funcion que va a tener el valor producto de mi empresa. En este caso hero.
    //reject: Este es para cuando no logramos cumplir la promesa con el resolve
    return new Promise((resolve, reject)=>{                     //Devolviendo la promesa

        const hero = heroes.find(hero => hero.id === id);

        if(hero) {
            resolve(hero);  //resolve, si se cumple
            return;
        }

        reject(`Hero with id ${id} not found`); //reject, si no se cumple

    }); 

    // return promise; //Devolviendo la promesa
}