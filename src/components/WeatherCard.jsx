import React from 'react'; // Importa o React necessário para criar o componente

// Define o componente funcional WeatherCard que recebe props como argumento
function WeatherCard({ cityName, temperature, icon }) {
  return (
    <div className="weather-card"> {/* Contêiner principal para o cartão do clima */}
      <h2>{cityName}</h2> {/* Exibe o nome da cidade passado como prop */}
      <p>Temperatura: {temperature}</p> {/* Exibe a temperatura atual passada como prop */}
      <div style={{ fontSize: '48px' }}>{icon}</div> {/* Exibe o ícone do clima passado como prop, com um tamanho de fonte grande */}
    </div>
  );
}

export default WeatherCard; // Exporta o componente WeatherCard para ser utilizado em outros arquivos
