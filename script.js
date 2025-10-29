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
fetch('https://mon-jardin-backend.onrender.com/api/orders', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    user_id: 1,
    product_id: 1,
    quantity: 2,
    price: 20,
    delivery_location: 'Kahawa Sukari'
  })
})
.then(res => res.json())
.then(data => console.log('Order created:', data));
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


