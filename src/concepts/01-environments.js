
/**
 * 
 * @param {HTLMDivElement} element 
 */
export const environmentsComponent = (element) => {

    console.log(import.meta.env);


    //Accediendo a nuestras variables de entorno
    const html = `
        DEV: ${import.meta.env.DEV} <br/>
        PROD: ${import.meta.env.PROD} <br/>
        KEY: ${import.meta.env.VITE_API_KEY} <br/>
    `;
    
    element.innerHTML = html;
}