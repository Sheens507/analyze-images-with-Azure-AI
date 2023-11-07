

function DisplayResults(result) {
    // Define a function body here
    let resultado;
    try {
      // muestra la imagen analizada en el html
      // resultado = result.captionResult;
        resultado = result;
      // resultado = result.captionResult.text;
      // console.log(resultado);
    } catch (error) {
        resultado = "No se pudo analizar la imagen";
    }
    return resultado;
}

export default DisplayResults;