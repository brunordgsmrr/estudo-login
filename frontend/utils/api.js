// Funções auxiliares para comunicação com API (fetch, headers)
const apiRequest = async (url, method, body = null) => {
    const token = localStorage.getItem('token');
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    };

    const response = await fetch(url, {
        method,
        headers,
        body: body ? JSON.stringify(body) : null
    });
    return response.json();
}