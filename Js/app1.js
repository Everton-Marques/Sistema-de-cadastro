import { Usuario } from "./class.js";
import { carregarUsuarios, registrarUsuario} from "./utils.js";

const users = document.getElementById("lista");
const btnRegistrar = document.getElementById("btnALL");
const overlayLi = document.getElementById('overlayLi');

document.addEventListener('DOMContentLoaded', () => {
    const btnVisualizar = document.getElementById("btnV")

    const overlayLi = document.getElementById('overlayLi');

    btnVisualizar?.addEventListener('click', () => {
        if (overlayLi) overlayLi.style.display = 'flex';
    });

    document.querySelectorAll('.close-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.overlay-lista').forEach(o => {
                o.style.display = 'none';
            });
        });
    });

    [overlayLi].forEach(overlayAtual => {
        if (!overlayAtual) return;
        overlayAtual.addEventListener('click', (e) => {
            if (e.target === overlayAtual) overlayAtual.style.display = 'none';
        });
    });
    carregarUsuarios(users);

});
//Registro  e.preventDefault()
btnRegistrar.addEventListener("click", (e) => {
    const nome = document.getElementById("nomeIn").value;
    const email = document.getElementById("mailIN").value;
    if (!Usuario.Verificação(nome, email)) {
        alert("Preencha todos os campos!");
        return;
    }
    const usuario = new Usuario(nome, email);
    registrarUsuario(usuario);
})

