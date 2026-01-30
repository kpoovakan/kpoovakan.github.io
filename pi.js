const fileUrl = '/pumpkinpi/pi.txt';

// 2. Use the Fetch API
fetch(fileUrl)
  .then(response => {
    // Check if the file was found
    if (!response.ok) throw new Error('File not found');
    return response.text(); // Convert the data to plain text
  })
  .then(data => {
    // Trim trailing newlines (handles \n and \r\n) so the "..." is appended on the same final line
    const trimmed = data.replace(/[\r\n]+$/, '');
    document.getElementById('content-target').textContent = trimmed + '...';
  })
  .catch(error => {
    console.error('Error:', error);
    document.getElementById('content-target').textContent = 'Failed to load file.';
  });
