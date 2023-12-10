const apiKey = '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';
const apiUrl = 'https://api.openai.com/v1/chat/completions';

function consultarSintomas() {
   const enfermedad = document.getElementById('enfermedad').value;

   // Realizar la solicitud a la API de ChatGPT
   fetch(apiUrl, {
      method: 'POST',
      headers: {
         'Content-Type': 'application/json',
         'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
         model: 'gpt-3.5-turbo',
         messages: [
            { role: 'system', content: 'You are a helpful assistant.' },
            { role: 'user', content: `¿Cuáles son los síntomas de ${enfermedad}?` },
         ],
      }),
   })
   .then(response => response.json())
   .then(data => {
      
      const resultadosDiv = document.getElementById('resultados');
      resultadosDiv.innerHTML = `<p>Síntomas de ${enfermedad}:</p><p>${data.choices[0].message.content}</p>`;
   })
   .catch(error => console.error('Error:', error));
}

// ...

function consultarEnfermedad() {
    const sintomas = document.getElementById('sintomas').value;
 
    // Realizar la solicitud a la API de ChatGPT
    fetch(apiUrl, {
       method: 'POST',
       headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
       },
       body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: [
             { role: 'system', content: 'You are a helpful assistant.' },
             { role: 'user', content: `Mis síntomas son: ${sintomas}. ¿Cuál podría ser mi enfermedad?` },
          ],
       }),
    })
    .then(response => response.json())
    .then(data => {
       // Mostrar los resultados en la interfaz de usuario
       const resultadosDiv = document.getElementById('resultadosSintomas');
       resultadosDiv.innerHTML = `<p>Posible enfermedad:</p><p>${data.choices[0].message.content}</p>`;
    })
    .catch(error => console.error('Error:', error));
 }
 

//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