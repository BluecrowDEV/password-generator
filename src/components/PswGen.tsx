import React, { FormEvent, useState } from 'react';

import Container from './layout/Container';

import PasswordGenerator from '../services/password-generator';
import LocalStorageManagement from '../services/local-storage-management';
import { copyToClipboard } from '../utils/copy-to-clipboard';
import { createAndDownloadFile } from '../utils/create-download-file';
import { safetyMeter } from '../services/safety-meter';

import { Configurations } from '../interfaces/configurations';
import { Data } from '../interfaces/data';

const PswGen = ({
  len = 8,
  lowChars = true,
  upChars = false,
  numbers = false,
  symbols = false,
}: Data) => {
  const [password, setPassword] = useState('');
  const [safety, setSafety] = useState(0);

  const [length, setLength] = useState(len);
  const [allowLowChars, setAllowLowChars] = useState(lowChars);
  const [allowUpChars, setAllowUpChars] = useState(upChars);
  const [allowNumbers, setAllowNumbers] = useState(numbers);
  const [allowSymbols, setAllowSymbols] = useState(symbols);

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();

    if (
      !length &&
      !allowLowChars &&
      !allowUpChars &&
      !allowNumbers &&
      !allowSymbols
    ) {
      alert('Anything selected');
      return;
    }
    if (length === 0 || length > 64) {
      alert('Length inavailable');
      return;
    }

    const generatedPassword = PasswordGenerator.generatePassword(
      length,
      allowLowChars,
      allowUpChars,
      allowNumbers,
      allowSymbols
    );

    setPassword(generatedPassword);
    setSafety(safetyMeter(generatedPassword));
  };

  const autoGenStrongPsw = (): void => {
    const generatedPassword = PasswordGenerator.autoGenerateStrongPassword();

    setPassword(generatedPassword);
    setSafety(safetyMeter(generatedPassword));
  };

  const handleSavePresetInLocalStorage = (): void => {
    const preset: Configurations = {
      length: length,
      allowLowChars: allowLowChars,
      allowUpChars: allowUpChars,
      allowNumbers: allowNumbers,
      allowSymbols: allowSymbols,
    };

    LocalStorageManagement.saveDataInLocalStorage<Configurations>(
      'preset',
      preset
    );
  };

  const handleGetSavedPresetInLocalStorage = (): void => {
    const preset =
      LocalStorageManagement.getSavedDataInLocalStorage<Configurations>(
        'preset'
      );

    if (!preset) {
      return;
    }

    setLength(preset.length);
    setAllowLowChars(preset.allowLowChars);
    setAllowUpChars(preset.allowUpChars);
    setAllowNumbers(preset.allowNumbers);
    setAllowSymbols(preset.allowSymbols);
  };

  return (
    <main className="main">
      <Container cssProperty="generator-title">
        Generate your <span className="generator-title-mark">password</span>
      </Container>

      <Container cssProperty="container-box">
        <span className="form-title">Password configurations</span>
        <hr />
        <div className="grid">
          <form className="form" action="">
            <label htmlFor="number1" className="form-label">
              Password length
              <br />
              <div className="range-container">
                <span className="length-indicator">{length}</span>
                <input
                  type="range"
                  id="number1"
                  className="range"
                  min={1}
                  max={64}
                  value={length}
                  onChange={(e) => setLength(Number(e.target.value))}
                />
              </div>
            </label>

            <label className="container-checkbox form-label">
              Lowercase characters
              <input
                id="checkbox1"
                type="checkbox"
                checked={allowLowChars}
                onChange={(e) => setAllowLowChars(e.target.checked)}
              />
              <span className="checkmark"></span>
            </label>

            <label className="container-checkbox form-label">
              Uppercase characters
              <input
                id="checkbox2"
                type="checkbox"
                checked={allowUpChars}
                onChange={(e) => setAllowUpChars(e.target.checked)}
              />
              <span className="checkmark"></span>
            </label>

            <label className="container-checkbox form-label">
              Numbers
              <input
                id="checkbox3"
                type="checkbox"
                checked={allowNumbers}
                onChange={(e) => setAllowNumbers(e.target.checked)}
              />
              <span className="checkmark"></span>
            </label>

            <label className="container-checkbox form-label">
              Symbols
              <input
                id="checkbox4"
                type="checkbox"
                checked={allowSymbols}
                onChange={(e) => setAllowSymbols(e.target.checked)}
              />
              <span className="checkmark"></span>
            </label>
          </form>
          <div className="actions">
            <button onClick={(e) => handleSubmit(e)}>Generate password</button>

            <button onClick={autoGenStrongPsw}>
              Auto generate strong password
            </button>

            <button onClick={handleSavePresetInLocalStorage}>
              Save password configurations
            </button>

            <button onClick={handleGetSavedPresetInLocalStorage}>
              Use saved password configurations
            </button>
          </div>
        </div>
      </Container>

      {password ? (
        <Container cssProperty="container-box">
          <div className="password-container">
            {password}
            <span className="password-actions">
              <a
                className="password-icon"
                onClick={(e) =>
                  createAndDownloadFile(
                    e.target as HTMLElement,
                    password,
                    password
                  )
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-download"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="#fff"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
                  <polyline points="7 11 12 16 17 11" />
                  <line x1="12" y1="4" x2="12" y2="16" />
                </svg>
              </a>
              <span
                className="password-icon icon-copy"
                onClick={(e) => copyToClipboard(password)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-copy"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="#0d74e7"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <rect x="8" y="8" width="12" height="12" rx="2" />
                  <path d="M16 8v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2" />
                </svg>
              </span>
            </span>
          </div>
        </Container>
      ) : (
        ''
      )}
    </main>
  );
};

export default PswGen;
