// Define API endpoint urls
const API_URL = "/api/auth";

export async function registerUser(userData) {
  // POST to register endpoint
  const response = await fetch(`${API_URL}/register`, {
    method: "POST", 
    body: JSON.stringify(userData)
  });
  return response.json(); 
}

export async function loginUser(credentials) {
  // POST to login endpoint
  const response = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(credentials)
  });
  
  return response.json();
}