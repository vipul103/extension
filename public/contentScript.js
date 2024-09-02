function scrapePrice() {
  const priceElement = document.querySelector('.price'); // Adjust the selector
  return priceElement ? priceElement.innerText : 'Price not found';
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'getPrice') {
    const price = scrapePrice();
    sendResponse({ price });
  }
});
