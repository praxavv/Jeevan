function testVisitorCounter() {
  console.log('Running visitor counter test...');

  // Clear any existing count
  localStorage.removeItem('visitorCount');
  console.log('Cleared existing visitor count.');

  // Simulate first visit
  window.dispatchEvent(new Event('load'));
  let count = localStorage.getItem('visitorCount');
  let displayCount = document.getElementById('visitor-count').innerText;
  console.log(`After first visit: count = ${count}, displayed = ${displayCount}`);
  if (count !== '1' || displayCount !== '1') {
    console.error('Test failed: First visit count is incorrect.');
    return;
  }

  // Simulate second visit
  window.dispatchEvent(new Event('load'));
  count = localStorage.getItem('visitorCount');
  displayCount = document.getElementById('visitor-count').innerText;
  console.log(`After second visit: count = ${count}, displayed = ${displayCount}`);
  if (count !== '2' || displayCount !== '2') {
    console.error('Test failed: Second visit count is incorrect.');
    return;
  }

  console.log('Visitor counter test passed!');
}

console.log('To run the test, open index.html in your browser, open the developer console, and run testVisitorCounter()');
