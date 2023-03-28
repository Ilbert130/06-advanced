import { heroes } from "../Data/heroes";

/**
 * 
 * @param {HTLMDivElement} element 
 */
export const generatorsAsyncComponent = async (element) => {

    const heroGenerator = getHeroGenerator();
    let isFinished = false;

    //Ejecutando la funcion generadora
    do{
        const {value, done} = await heroGenerator.next(); //Destructurando el value y done
        isFinished = done;
        if(isFinished) break;
        element.innerHTML = value;

    }while(!isFinished);
}

//Aqui creamos la funcion generadora async
async function* getHeroGenerator(){
    for(const hero of heroes){
        await sleep();
        yield hero.name;
    }

    return 'no hay mas';
}

//Para realentizar el proceso
const sleep = () => {
    return new Promise((resolve) => {
        setTimeout(() =>{
            resolve();
        }, 1000)
    })
}