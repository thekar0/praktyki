fetch('navbar.html')
  .then(response => {
    if (!response.ok) throw new Error('Could not load footer');
    return response.text();
  })
  .then(html => {
    document.getElementById('navbar_container').innerHTML = html;
  })
  .catch(err => {
    console.error('Error loading footer:', err);
  });
