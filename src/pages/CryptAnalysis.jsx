import { useState } from 'react';
import { Bar } from 'react-chartjs-2'; // Import Bar chart
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import FrequencyAnalysis from '../cryptanalysis/FrequencyAnalysis';
import '../styles/CryptAnalysis.css'

// Register necessary Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const CryptAnalysis = () => {
  const [text, setText] = useState('');
  const [freqData, setFreqData] = useState({});

  // Handle text input change
  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  // Perform frequency analysis when button is clicked
  const analyzeFrequency = () => {
    const freq = FrequencyAnalysis(text);
    setFreqData(freq);
  };

  // Prepare data for the Bar chart
  const chartData = {
    labels: Object.keys(freqData), // Letters as labels
    datasets: [
      {
        label: 'Character Frequency',
        data: Object.values(freqData), // Frequencies as data points
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="cryptAnalysis">
      <h2>Frequency Analysis Attack</h2>
      <p>
        Frequency analysis is a technique used to decipher a message encrypted with a substitution cipher. It relies on the fact that certain letters appear more frequently than others in a given language.
      </p>
      
      <div>
        <label htmlFor="inputText">Enter text:</label>
        <textarea
          id="inputText"
          value={text}
          onChange={handleInputChange}
          placeholder="Type or paste your text here"
          rows="6"
        />
      </div>
      
      <button onClick={analyzeFrequency} style={{ marginTop: '10px' }}>
        Analyze Frequency
      </button>

      {/* Render the chart if there's any frequency data */}
      {Object.keys(freqData).length > 0 && (
        <div style={{ marginTop: '20px', width: '80%', margin: 'auto' }}>
          <h3>Character Frequency Distribution</h3>
          <Bar data={chartData} options={{ responsive: true }} />
        </div>
      )}
    </div>
  );
};

export default CryptAnalysis;
