window.onload = doufu

async function doufu() {
    const pie = await fetch(window.location.href.toLowerCase(), { method: "HEAD" }); {
      if (pie.status !== 404) {
      window.location.replace(window.location.href.toLowerCase());
      }
  }
}

function pi() {
  const fileUrl = '/pumpkinpi/pi.txt';
   fetch(fileUrl)
    .then(response => {
       if (!response.ok) throw new Error('File not found');
       return response.text(); // Convert the data to plain text
     })
    .then(data => {
       const trimmed = data.replace(/[\r\n]+$/, '');
       document.getElementById('content-target').textContent = trimmed + '...';
     })
     .catch(error => {
       console.error('Error:', error);document.getElementById('content-target').textContent = 'Failed to load file.';
         });
}
