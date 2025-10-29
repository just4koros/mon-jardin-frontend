// 🌿 Utility: Show loading message
function showLoading(sectionId, message = 'Loading...') {
  document.getElementById(sectionId).innerHTML = `<p>${message}</p>`;
}

// 🌿 Utility: Show error message
function showError(sectionId, message = 'Failed to load data.') {
  document.getElementById(sectionId).innerHTML = `<p style="color:red;">${message}</p>`;
}

// 🌿 ORDERS
async function loadOrders() {
  const section = 'orders-section';
  showLoading(section, 'Loading orders...');
  try {
    const res = await fetch('https://mon-jardin-backend.onrender.com/api/orders');
    const data = await res.json();
    displayOrders(data);
  } catch (err) {
    console.error('Orders error:', err);
    showError(section);
  }
}

function displayOrders(orders) {
  const section = document.getElementById('orders-section');
  section.innerHTML = '<h4>Orders</h4>' + orders.map(order => `
    <div>
      <strong>Order #${order.order_id}</strong><br>
      Product: ${order.product_id} | Qty: ${order.quantity} | Price: ${order.price}<br>
      Location: ${order.delivery_location}
    </div><hr>
  `).join('');
}

// 🌿 INVENTORY
async function loadInventory() {
  const section = 'inventory-section';
  showLoading(section, 'Loading inventory...');
  try {
    const res = await fetch('https://mon-jardin-backend.onrender.com/api/inventory');
    const data = await res.json();
    displayInventory(data);
  } catch (err) {
    console.error('Inventory error:', err);
    showError(section);
  }
}

function displayInventory(items) {
  const section = document.getElementById('inventory-section');
  section.innerHTML = '<h4>Inventory</h4>' + items.map(item => `
    <div>
      ${item.name} — ${item.quantity} units
    </div><hr>
  `).join('');
}

// 🌿 DISTRIBUTION
async function loadDistribution() {
  const section = 'distribution-section';
  showLoading(section, 'Loading distribution...');
  try {
    const res = await fetch('https://mon-jardin-backend.onrender.com/api/distribution');
    const data = await res.json();
    displayDistribution(data);
  } catch (err) {
    console.error('Distribution error:', err);
    showError(section);
  }
}

function displayDistribution(data) {
  const section = document.getElementById('distribution-section');
  section.innerHTML = '<h4>Distribution</h4>' + data.map(entry => `
    <div>
      Route: ${entry.route} | Status: ${entry.status}
    </div><hr>
  `).join('');
}

// 🌿 PAYMENTS
async function loadPayments() {
  const section = 'payments-section';
  showLoading(section, 'Loading payments...');
  try {
    const res = await fetch('https://mon-jardin-backend.onrender.com/api/payments');
    const data = await res.json();
    displayPayments(data);
  } catch (err) {
    console.error('Payments error:', err);
    showError(section);
  }
}

function displayPayments(payments) {
  const section = document.getElementById('payments-section');
  section.innerHTML = '<h4>Payments</h4>' + payments.map(payment => `
    <div>
      Amount: ${payment.amount} | Method: ${payment.method} | Status: ${payment.status}
    </div><hr>
  `).join('');
}

// 🌿 FEEDBACK
async function loadFeedback() {
  const section = 'feedback-section';
  showLoading(section, 'Loading feedback...');
  try {
    const res = await fetch('https://mon-jardin-backend.onrender.com/api/feedback');
    const data = await res.json();
    displayFeedback(data);
  } catch (err) {
    console.error('Feedback error:', err);
    showError(section);
  }
}

function displayFeedback(feedback) {
  const section = document.getElementById('feedback-section');
  section.innerHTML = '<h4>Feedback</h4>' + feedback.map(entry => `
    <div>
      ${entry.comment} — <em>${entry.user}</em>
    </div><hr>
  `).join('');
}

// 🌿 INIT: Load all modules on page load
window.onload = () => {
  loadOrders();
  loadInventory();
  loadDistribution();
  loadPayments();
  loadFeedback();
};

