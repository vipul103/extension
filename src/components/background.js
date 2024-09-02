// src/background.js
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'savePrices') {
      // Save data to local storage
      chrome.storage.local.set({ prices: message.data }, () => {
        console.log('Prices saved:', message.data);
      });
    }
  });
  