//Las promeasas son asincronas en javascript
//Promise-race, se encarga de tomar el valor de la promesa que se ejecute mas rapido entre un grupo
/**
 * 
 * @param {HTLMDivElement} element 
 */
export const promiseRaceComponent = (element) => {

    element.innerHTML = 'Loading...'

    const renderValue = (value) =>{
        element.innerHTML = value;
    }

    Promise.race([      //El metodo race toma un arreglo de promesas y devuelve el resultado del que se ejecute mas rapido
        slowPromise(),
        mediumPromise(),
        fastPromise()
    ])
    .then(value => renderValue(value));
}

const slowPromise = () => new Promise(resolve =>{

    setTimeout(() => {
        resolve('Slow Promise');
    }, 2000);

});

const mediumPromise = () => new Promise(resolve =>{

    setTimeout(() => {
        resolve('Medium Promise');
    }, 3500);

});

const fastPromise = () => new Promise(resolve =>{

    setTimeout(() => {
        resolve('Fast Promise');
    }, 4000);

});