const form = document.getElementById("login-form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let user = {
        username: form.username.value,
        password: form.password.value,
    };

    entrar(user).then((user) => {
        if (user.length > 0) {
            window.location.replace("http://127.0.0.1:5500/index.html");
        }
    });
});

async function entrar(user) {
    const url = `http://localhost:3000/users?username=${user.username}&password=${user.password}`;
    const response = await fetch(url)
    const userAuth = await response.json();

    if (userAuth.length == 0) {
        alert("Usuario não encontrado");
        return {};
    } else {
        return userAuth;
    }
    
}
