import React, { useState } from 'react'; // Importa React e o hook useState do pacote 'react'
import weatherData from './weatherData.json'; // Importa o arquivo JSON contendo dados das cidades e previsão do tempo
import WeatherCard from './components/WeatherCard'; // Importa o componente WeatherCard que exibe as informações do tempo

function App() {
  // Cria um estado para armazenar o nome da cidade digitada pelo usuário
  const [city, setCity] = useState('');

  // Cria um estado para armazenar as informações da previsão do tempo
  const [weatherInfo, setWeatherInfo] = useState(null);

  // Cria um estado para armazenar mensagens de erro
  const [error, setError] = useState('');

  // Função para lidar com a busca de previsão do tempo quando o formulário é enviado
  const handleSearch = (e) => {
    e.preventDefault(); // Impede o comportamento padrão de envio do formulário (recarregamento da página)

    // Procura a cidade no arquivo JSON com base no nome digitado pelo usuário
    const cityData = weatherData.cities.find(c => c.city_name.toLowerCase() === city.toLowerCase());

    // Se a cidade for encontrada, atualiza as informações do tempo e limpa a mensagem de erro
    if (cityData) {
      setWeatherInfo({
        temperature: cityData.current_weather.temperature,
        icon: cityData.current_weather.icon,
        cityName: cityData.city_name
      });
      setError(''); // Limpa a mensagem de erro se a cidade for encontrada
    } else {
      // Se a cidade não for encontrada, define uma mensagem de erro e limpa as informações do tempo
      setError('Cidade não encontrada');
      setWeatherInfo(null);
    }
  };

  return (
    <div className="app"> {/* Contêiner principal do componente */}
      <h1>Previsão do Tempo</h1> {/* Título do aplicativo */}
      <form onSubmit={handleSearch}> {/* Formulário para busca de cidade */}
        <input
          type="text"
          value={city} // Valor do campo de entrada vinculado ao estado `city`
          onChange={(e) => setCity(e.target.value)} // Atualiza o estado `city` quando o usuário digita
          placeholder="Digite o nome da cidade" // Texto de sugestão para o campo de entrada
        />
        <button type="submit">Buscar</button> {/* Botão para enviar o formulário */}
      </form>
      {error && <p className="error">{error}</p>} {/* Exibe a mensagem de erro se houver */}
      {weatherInfo && <WeatherCard {...weatherInfo} />} {/* Exibe o WeatherCard se `weatherInfo` não for nulo */}
    </div>
  );
}

export default App; // Exporta o componente App para ser utilizado em outros arquivos
