import { Usuario } from "./class.js";
import { carregarUsuarios, registrarUsuario, Deletar } from "./utils.js";

const users = document.getElementById("lista");
const btnRegistrar = document.getElementById("btnR");
const overlayLi = document.getElementById('overlayLi');
const btndelete = document.getElementById("btnD")

document.addEventListener('DOMContentLoaded', () => {
    const btnVisualizar = document.getElementById("btnV")

    btnVisualizar?.addEventListener('click', () => {
        carregarUsuarios(users)
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
//Registro
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
users.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete")) {
        
        const item = e.target.parentElement;
        const id = item.dataset.id;

        Deletar(id, item);
    }
});

