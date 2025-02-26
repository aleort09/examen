const BASE_URL="https://127.0.0.1:5000/"

export async function getAllUsers(params) {
    const response = await fetch(BASE_URL+'users/');
    return response.json();
}

