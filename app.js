// Só irá carregar o js quando toda a página for carregada.
document.addEventListener('DOMContentLoaded', () => {
    const btns = Array.from(document.querySelectorAll('.btn > button'));
    const [btnVisualizar] = btns;

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

    carregarUsuarios();
});

const users = document.getElementById("lista");

function carregarUsuarios() {
    users.innerHTML = ""; // limpa antes de carregar

    fetch("https://crudcrud.com/api/67dca9c0adad48c68c96a0798f5d3175/login2")
        .then(resposta => resposta.json())
        .then((listaU) => {
            listaU.forEach(usuario => {
                const item = document.createElement("li");
                item.dataset.id = usuario._id;  // <--- salvando id no HTML

                item.innerHTML = `
                    <p class="N1">Nome: </p><p class="N2">${usuario.Nome}</p>
                    <p class="N3">Email: </p><p class="N4">${usuario.Email}</p>
                    <button class="delete">x</button>
                `;
                users.appendChild(item)
            });
        });
}

// =============== REGISTRAR ===============
function Registrar() {
    const nome = document.getElementById("nomeIn").value.trim();
    const email = document.getElementById("mailIN").value.trim();

    if (nome === "" || email === "") {
        alert("Preencha nome e email antes de registrar!");
        return;
    }

    const novoUsuario = {
        Nome: nome,
        Email: email
    };

    fetch("https://crudcrud.com/api/67dca9c0adad48c68c96a0798f5d3175/login2", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(novoUsuario)
    })
        .then(res => {
            alert("Usuário registrado com sucesso!");
            document.getElementById("nomeIn").value = "";
            document.getElementById("mailIN").value = "";
            carregarUsuarios();
        });
}

// =============== DELETAR ===============
users.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete")) {

        const id = e.target.parentElement.dataset.id;

        fetch(`https://crudcrud.com/api/67dca9c0adad48c68c96a0798f5d3175/login2/${id}`, {
            method: "DELETE"
        })
            .then(() => {
                alert("Usuário removido!");
                e.target.parentElement.remove();
            });
    }
});
