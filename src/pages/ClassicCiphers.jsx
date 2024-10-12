import { useState } from "react";
import CipherCard from "../components/CipherCard";
import "../styles/ClassicCiphers.css";
import caesar from "../ciphers/CaesarCipher.js";
import affine from "../ciphers/AffineCipher.js";
import vigenere from "../ciphers/VigenereCipher.js";

const ClassicCiphers = () => {
  // State for Caesar cipher
  const [shift, setShift] = useState(0);
  const [caesarEncrypt, setCaesarEncrypt] = useState(true);

  // State for Affine cipher
  const [k1, setK1] = useState(1);
  const [k2, setK2] = useState(0);
  const [affineEncrypt, setAffineEncrypt] = useState(true);

  // State for Vigenere cipher
  const [vigenereKey, setVigenereKey] = useState("");
  const [vigenereEncrypt, setVigenereEncrypt] = useState(true);

  // Caesar Cipher functions
  const caesarCipher = caesar(shift);
  const encryptCaesar = (text) => caesarCipher.encrypt(text);
  const decryptCaesar = (text) => caesarCipher.decrypt(text);

  // Affine Cipher functions
  const affineCipher = affine(k1, k2);
  const encryptAffine = (text) => affineCipher.encrypt(text);
  const decryptAffine = (text) => affineCipher.decrypt(text);

  // Vigenere Cipher functions
  const vigenereCipher = vigenere(vigenereKey);
  const encryptVigenere = (text) => vigenereCipher.encrypt(text);
  const decryptVigenere = (text) => vigenereCipher.decrypt(text);

  return (
    <div className="container">
      <h1>Classic Ciphers</h1>

      {/* Caesar Cipher */}
      <div className="cipher-section">
        <h2>Caesar Cipher</h2>
        <label>
          Choose Shift Value:
          <input
            type="number"
            value={shift}
            onChange={(e) => setShift(Number(e.target.value))}
            min="0"
            max="25"
            style={{ margin: "0 10px" }}
          />
        </label>

        <div className="radio-buttons">
          <label className="radio-label">
            <input
              type="radio"
              name="caesarAction"
              checked={caesarEncrypt}
              onChange={() => setCaesarEncrypt(true)}
              className="radio-input"
            />
            Encrypt
          </label>
          <label className="radio-label">
            <input
              type="radio"
              name="caesarAction"
              checked={!caesarEncrypt}
              onChange={() => setCaesarEncrypt(false)}
              className="radio-input"
            />
            Decrypt
          </label>
        </div>

        <CipherCard
          name="Caesar Cipher"
          description="The Caesar cipher is a type of substitution cipher in which each letter in the plaintext is 'shifted' a certain number of places down the alphabet."
          cipherFunction={caesarEncrypt ? encryptCaesar : decryptCaesar}
        />
      </div>

      {/* Affine Cipher */}
      <div className="cipher-section">
        <h2>Affine Cipher</h2>
        <div style={{ textAlign: "center" }}>
          <label>
            Choose k1:
            <input
              type="number"
              value={k1}
              onChange={(e) => setK1(Number(e.target.value))}
              min="1"
              max="25"
              style={{ margin: "0 10px" }}
            />
          </label>

          <label>
            Choose k2:
            <input
              type="number"
              value={k2}
              onChange={(e) => setK2(Number(e.target.value))}
              min="0"
              max="25"
              style={{ margin: "0 10px" }}
            />
          </label>
        </div>

        <div className="radio-buttons">
          <label className="radio-label">
            <input
              type="radio"
              name="affineAction"
              checked={affineEncrypt}
              onChange={() => setAffineEncrypt(true)}
              className="radio-input"
            />
            Encrypt
          </label>
          <label className="radio-label">
            <input
              type="radio"
              name="affineAction"
              checked={!affineEncrypt}
              onChange={() => setAffineEncrypt(false)}
              className="radio-input"
            />
            Decrypt
          </label>
        </div>

        <CipherCard
          name="Affine Cipher"
          description="The Affine cipher is a type of monoalphabetic substitution cipher, where each letter in an alphabet is mapped to its numeric equivalent, encrypted using a simple mathematical function, and converted back to a letter."
          cipherFunction={affineEncrypt ? encryptAffine : decryptAffine}
        />
      </div>

      {/* Vigenère Cipher */}
      <div className="cipher-section">
        <h2>Vigenère Cipher</h2>
        <label>
          Enter Key:
          <input
            type="text"
            value={vigenereKey}
            onChange={(e) => setVigenereKey(e.target.value)}
            style={{ margin: "0 10px" }}
          />
        </label>

        <div className="radio-buttons">
          <label className="radio-label">
            <input
              type="radio"
              name="vigenereAction"
              checked={vigenereEncrypt}
              onChange={() => setVigenereEncrypt(true)}
              className="radio-input"
            />
            Encrypt
          </label>
          <label className="radio-label">
            <input
              type="radio"
              name="vigenereAction"
              checked={!vigenereEncrypt}
              onChange={() => setVigenereEncrypt(false)}
              className="radio-input"
            />
            Decrypt
          </label>
        </div>

        <CipherCard
          name="Vigenère Cipher"
          description="The Vigenère cipher is a method of encrypting alphabetic text by using a simple form of polyalphabetic substitution."
          cipherFunction={vigenereEncrypt ? encryptVigenere : decryptVigenere}
        />
      </div>
    </div>
  );
};

export default ClassicCiphers;
