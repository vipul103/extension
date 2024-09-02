// src/content/contentScript.js
function scrapePrices() {
    // Example: Find elements with price information
    const prices = Array.from(document.querySelectorAll('.price')).map(el => el.textContent);
  
    // Send scraped prices to background script
    chrome.runtime.sendMessage({ action: 'savePrices', data: prices });
  }
  
  // Run the function when the content script is loaded
  scrapePrices();
  