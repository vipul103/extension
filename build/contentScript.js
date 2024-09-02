function scrapePrice() {
  
  const keywords = ['.price', '.mrp', '.pricing', '.plans', '.amount', '.cost', '.RS'];
  let priceElement = null;

  for (let i = 0; i < keywords.length; i++) {
    priceElement = document.querySelector(keywords[i]);
    if (priceElement) break;
  }

  
  if (!priceElement) {
    priceElement = document.querySelector('*:contains("$"), *:contains("₹")');
  }

  
  return priceElement ? priceElement.innerText : 'Price not found';
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'getPrice') {
    const price = scrapePrice();
    sendResponse({ price });
  }
});