const BASE_URL="http://34.239.105.41/"

export async function getAllUsers(params) {
    const response = await fetch(BASE_URL+'users/');
    return response.json();
}

