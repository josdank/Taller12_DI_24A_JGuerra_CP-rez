//función para el login 
function login (){
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "Java" && password === "123456") {
        alert("Bienvenido al sistema")
        window.location.href = "verificar_edad.html";
    }if (!username || !password){
        alert("Por favor, Ingrese todos los campos")
    }else{
        document.getElementById('error-message').innerText = "Inserte correctamente sus datos";
    }
}
