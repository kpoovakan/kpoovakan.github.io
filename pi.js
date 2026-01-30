const fileUrl = '/pumpkinpi/pi.txt';

// 2. Use the Fetch API
fetch(fileUrl)
  .then(response => {
    // Check if the file was found
    if (!response.ok) throw new Error('File not found');
    return response.text(); // Convert the data to plain text
  })
  .then(data => {
    // 3. Put the text into your HTML element
    document.getElementById('content-target').textContent = data + "...";
  })
  .catch(error => {
    console.error('Error:', error);
    document.getElementById('content-target').textContent = 'Failed to load file.';
  });
