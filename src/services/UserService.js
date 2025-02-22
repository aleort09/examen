const BASE_URL = "http://34.239.105.41/users/";

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