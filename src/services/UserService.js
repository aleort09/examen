const response = await fetch("http://34.239.105.41:8000/users/", {
    mode: 'no-cors',  // Deshabilita CORS
    headers: {
      'Content-Type': 'application/json',
    },
  });

// Obtener todos los usuarios
export async function getAllUsers() {
    const response = await fetch(BASE_URL);
    return response.json();
}

// Buscar un usuario por nombre
export async function getUserByName(name) {
    const response = await fetch(`${BASE_URL}${name}`);
    return response.json();
}