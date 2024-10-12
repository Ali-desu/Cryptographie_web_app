import { useState, useEffect } from 'react';
import "../styles/CipherCard.css";
import PropTypes from 'prop-types';

const CipherCard = ({ name, description, cipherFunction }) => {
  // State for the input and output text
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');

  // Handler for updating the output text based on the input
  const handleCipher = () => {
    // Call the cipher function with the input text and set the output
    const result = cipherFunction(inputText);
    setOutputText(result);
  };

  // Effect to call handleCipher whenever inputText changes
  useEffect(() => {
    handleCipher();
  }, [inputText]);

  return (
    <div className="cipher-card">
      <h3 className="name">{name}</h3>
      <p className="description">{description}</p>
      <textarea
        placeholder="Enter text here"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />

      <h4>Output</h4>
      <textarea
        placeholder="Output will appear here"
        value={outputText}
        disabled
      />
    </div>
  );
};

CipherCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  cipherFunction: PropTypes.func.isRequired,
};

export default CipherCard;
