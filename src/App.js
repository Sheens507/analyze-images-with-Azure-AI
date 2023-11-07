import React, { useState } from 'react';
import analyzeImage from './azure-image-analysis'; // Importa la función desde el archivo separado



function App() {
  const [imageUrl, setImageUrl] = useState('');
  const [Analisis, setAnalisis] = useState(''); // Definición de la variable de estado Analisis
  const handleAnalyzeButtonClick = async () => {
    try {
      const resultado = await analyzeImage(imageUrl);
      setAnalisis(resultado); // Actualiza el estado de Analisis
      console.log(imageUrl);
      console.log(resultado);
    } catch (error) {
      console.error("Error al analizar la imagen:", error);
    }
  };

  return (
    <div className="App">
      <div className="Titulo">
        <h1>AImagenes</h1>
      </div>
      <div className="body">
        <p>Insert URL or prompt:</p>
        <input
          type="text"
          id="imageUrlInput"
          placeholder="Ingrese el URL de la imagen o la descripción de la imagen que desea generar"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          style={{ width: '500px' }}
        />
      </div>
      <br />
      <div className="footer">
        <button id="analyzeButton" onClick={handleAnalyzeButtonClick}>
          Analizar
        </button>
        {/* <button id="analyzeButton" onClick={handleGeneratButtonClick}>
          Generate
        </button> */}
        <br /><br />
        <img 
          id="img_user" 
          src={imageUrl} 
          alt=""
          style={
            {
              // que maximo tenga 200px de ancho y el alto se ajuste
              maxWidth: '400px',
              height: 'auto'
            }
          }
        />
        {/* <p id="caption">{Analisis.text}</p> */}
        <pre>
          {JSON.stringify(Analisis, null, 2)}
        </pre>
      </div>
    </div>
  );
}


export default App;
