import React, { useState } from 'react';

function App() {
  const [price, setPrice] = useState('');

  const getPrice = () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, { action: 'getPrice' }, (response) => {
        if (response && response.price) {
          setPrice(response.price);
        }
      });
    });
  };

  return (
    <div className="App">
      <h1>Price Scraper</h1>
      <button onClick={getPrice}>Get Price</button>
      <p>Price: {price}</p>
    </div>
  );
}

export default App;
