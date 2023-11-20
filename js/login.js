const form = document.getElementById("login");
let listUsuarios = JSON.parse(localStorage.getItem("listUsuarios"));


form.addEventListener("submit", (event) => {
    event.preventDefault();
    const emailValider = document.getElementById("email").value;
    const passwordValider = document.getElementById("password").value;
    let usuarioObtenido;

    listUsuarios.forEach(usuario => {
        
        if (usuario.email === emailValider)
            usuarioObtenido = usuario;
    });

    if (usuarioObtenido) {
        if (usuarioObtenido.password === passwordValider) {
            let login = {
                logeado: true,
                nombre: usuarioObtenido.nombre
            };
            
            localStorage.setItem("login", JSON.stringify(login));
            window.location.href = "index.html";
        } else {
            alert("La contraseña es incorrecta")
        }
    }else{
        alert("El correo no fue encontrado")
    }

});

function redireccion() {
    window.location.href = "index.html";

}