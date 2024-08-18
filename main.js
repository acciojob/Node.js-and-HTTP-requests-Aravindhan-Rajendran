const https = require('https');

// URL to fetch data from
const url = 'https://jsonplaceholder.typicode.com/todos/1';

// Perform the GET request
https.get(url, (res) => {
  let data = '';

  // Listen for data chunks
  res.on('data', (chunk) => {
    data += chunk;
  });

  // When the response is complete
  res.on('end', () => {
    try {
      // Parse the JSON response
      const todo = JSON.parse(data);

      // Output the title of the first todo item
      console.log(todo.title);
    } catch (error) {
      console.error('Error parsing JSON:', error.message);
    }
  });
}).on('error', (err) => {
  console.error('Request failed:', err.message);
});
