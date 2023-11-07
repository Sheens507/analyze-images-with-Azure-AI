import DisplayResults from './Display-result-analysis'; // Importa la función desde el archivo separado

function analyzeImage(imageUrl) {
    return new Promise((resolve, reject) => {
    const urlAzure = "https://test-challenge-1.cognitiveservices.azure.com/computervision/imageanalysis:analyze?api-version=2023-02-01-preview&features=tags,read,caption,denseCaptions,smartCrops,objects,people";
    const subscriptionKey = "ccc8b6a16e4d4a82a113dccea3f66ddc"; // Reemplaza con tu clave de suscripción de Azure
    fetch(urlAzure, {
    method: 'POST',
    headers: {
        'Ocp-Apim-Subscription-Key': subscriptionKey,
        'Content-Type': 'application/json',
        },
    body: JSON.stringify({ url: imageUrl }),
    })
    .then(response => response.json())
    .then(data => {
        const mensaje = DisplayResults(data);
        resolve(mensaje);
    })
    .catch(error => {
        
    });
});
}

export default analyzeImage;