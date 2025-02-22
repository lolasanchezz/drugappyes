import React, { useState } from 'react';

const DrugInteractionSearch = () => {
  const [drugName, setDrugName] = useState<string>('');
  const [results, setResults] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async () => {
    if (!drugName) {
      setError('Please enter a drug name.');
      return;
    }

    setError(null); // Clear previous errors
    setResults([]); // Clear previous results

    try {
      const response = await fetch(`https://api.fda.gov/drug/label.json?search=drug_interactions:${encodeURIComponent(drugName)}&limit=10`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setResults(data.results || []);
    } catch (err) {
      setError(err.message);
    }
  };
   return results;
/*
  return (
    <div>
      <h1>Drug Interaction Search</h1>
      <input
        type="text"
        value={drugName}
        onChange={(e) => setDrugName(e.target.value)}
        placeholder="Enter drug name"
      />
      <button onClick={handleSearch}>Search</button>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <ul>
        {results.map((result, index) => (
          <li key={index}>
            <h2>{result.openfda.brand_name?.join(', ')}</h2>
            <p>{result.drug_interactions?.join(', ')}</p>
          </li>
        ))}
      </ul>
    </div>
  );
  */
};

export default DrugInteractionSearch;
