const welcomeMessage = document.getElementById('welcomeMessage');

const welcome = async () => {
    
    if(!localStorage.getItem('token')){
        welcomeMessage.textContent = "Entre para acessar o conteúdo";
    } else {
        const response = await apiRequest('http://localhost:3000/auth/profile', 'GET');
        welcomeMessage.textContent = response.message
    }
}

welcome();


