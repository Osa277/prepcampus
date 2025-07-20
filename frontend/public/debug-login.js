// Debug test - delete this file after testing
console.log('🔍 Debug: Testing login flow...');

// Test API connection
fetch('http://localhost:5000/api/health')
  .then(response => response.json())
  .then(data => console.log('✅ Backend health check:', data))
  .catch(error => console.error('❌ Backend health check failed:', error));

// Test login API
fetch('http://localhost:5000/api/auth/login', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    email: 'demo@prepcampus.com',
    password: 'demo123'
  })
})
  .then(response => {
    console.log('📡 Login response status:', response.status);
    return response.json();
  })
  .then(data => console.log('✅ Login API response:', data))
  .catch(error => console.error('❌ Login API failed:', error));
