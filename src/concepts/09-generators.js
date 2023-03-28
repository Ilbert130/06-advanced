
/**
 * 
 * @param {HTLMDivElement} element 
 */
export const generatorFuncionsComponent = (element) => {

    // const myGenerator = myFirstGeneratorFunction(); //La funcion devulve un generador con todo los resultados

    //por cada next que hacemos de volvemos y valor 
    // console.log(myGenerator.next());  //Primer valor
    // console.log(myGenerator.next());  //Segundo valor
    // console.log(myGenerator.next());  //Tercer valor
    // console.log(myGenerator.next());  //Cuarto valor
    // console.log(myGenerator.next());  //Ya no hay valores

    const genId = idGenerator();
    // console.log(genId.next());
    // console.log(genId.next());
    // console.log(genId.next());
    // console.log(genId.next());

    const button = document.createElement('button');
    button.innerText = 'Click me';
    element.append(button);

    const renderButton = () =>{
        const {value} = genId.next();
        button.innerText = `Click ${value}`;
    }

    button.addEventListener('click',(event)=>renderButton());
}

//Funcion generadora de id
function* idGenerator(){
    let currentId = 0;

    while(true){
        yield ++ currentId;
    }
}

//Aqui se crea la funcion generadora
function* myFirstGeneratorFunction(){

    yield 'Primer valor';    //Cada yield es un retorno distinto
    yield 'Segundo valor';
    yield 'Tercer valor';
    yield 'Cuarto valor';

    return 'Ya no hay valores';
    yield 'Ya no se puede hacer nada';  //Esto no se ejecuta
}
