function toggleSection(id) {
  const list = document.getElementById(`${id}-list`);
  list.classList.toggle('hidden');
}

const endpoints = [
  { id: 'orders', url: 'http://localhost:5000/api/orders' },
  { id: 'inventory', url: 'http://localhost:5000/api/inventory' },
  { id: 'distribution', url: 'http://localhost:5000/api/distribution' },
  { id: 'payments', url: 'http://localhost:5000/api/payments' },
  { id: 'feedback', url: 'http://localhost:5000/api/feedback' }
];

endpoints.forEach(({ id, url }) => {
  fetch(url)
    .then(res => res.json())
    .then(data => {
      const list = document.getElementById(`${id}-list`);
      list.innerHTML = ''; // Clear old content
      data.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = Object.entries(item)
          .map(([key, value]) => `<strong>${key}:</strong> ${value}`)
          .join('<br>');
        list.appendChild(li);
      });
    })
    .catch(err => {
      console.error(`Error fetching ${id}:`, err);
    });
});
