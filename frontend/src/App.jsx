import React, { useState } from 'react'
import Canvas from './Canvas/Canvas'

function App() {  
  const [prediction, setPrediction] = useState(null)
  const [error, setError] = useState(null)

  const handlePredict = async (blob) => {
    try {
      setError(null);
      const formData = new FormData();
      formData.append('file', blob, 'digit.png');

      const response = await fetch("http://127.0.0.1:8000/predict-image/", {
        method: 'POST',
        body: formData
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.detail || 'Failed to get prediction');
      }
      
      setPrediction(data);
    } catch (error) {
      console.error('Error:', error);
      setError(error.message);
      setPrediction(null);
    }
  };

  return (
    <>
      <div className='min-h-screen w-full flex flex-col items-center justify-center'>
        <h1 className='text-2xl font-bold'>Hello World</h1>
        <Canvas onPredict={handlePredict} />
        {error && <p className="mt-4 text-xl text-red-500">Error: {error}</p>}
        {prediction && <p className="mt-4 text-xl">Prediction: {prediction.prediction}</p>}
      </div>
    </>
  )
}

export default App
