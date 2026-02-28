require('dotenv').config();
const express = require('express');
const userRoutes = require('./routes/user');

const app = express();
app.use(express.json());
app.use('/users', userRoutes);

app.listen(3000, () => {
  console.log("App running on port 3000");
});

// Debug: list registered routes
console.log('Registered routes:');
app._router.stack.forEach(m => {
  if (m.route && m.route.path) {
    console.log(Object.keys(m.route.methods).join(',').toUpperCase(), m.route.path);
  } else if (m.name === 'router' && m.handle && m.handle.stack) {
    m.handle.stack.forEach(r => { if (r.route) console.log(Object.keys(r.route.methods).join(',').toUpperCase(), r.route.path); });
  }
});
