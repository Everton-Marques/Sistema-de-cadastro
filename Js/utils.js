export function carregarUsuarios(ListaU) {
    ListaU.innerHTML = ""; // limpa antes de carregar

    fetch("https://crudcrud.com/api/0dcf4035f1fe4680826d437c11be6c77/login4")
        .then(resposta => resposta.json())
        .then((listaUsers) => {
            listaUsers.forEach(usuario => {
                const item = document.createElement("li");
                item.dataset.id = usuario._id;  // <--- salvando id no HTML

                item.innerHTML = `
                    <p class="N1">Nome: </p><p class="N2">${usuario.Nome}</p>
                    <p class="N3">Email: </p><p class="N4">${usuario.Email}</p>
                    <button class="delete">x</button>
                `;
                ListaU.appendChild(item)
            });
        })
        .catch(erro => {
            console.error("Erro ao carregar usuários:", erro);
            ListaU.innerHTML = `<p class="errolista">Erro ao carregar usuário</p>`;
        });
}
export function registrarUsuario(us) {

    const novoUsuario = {
        Nome: us.nome,
        Email: us.email
    };
    console.log("objeto", us)
    fetch("https://crudcrud.com/api/0dcf4035f1fe4680826d437c11be6c77/login4", {
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
export function Deletar(idUser, elementoHTML){
      fetch(`https://crudcrud.com/api/0dcf4035f1fe4680826d437c11be6c77/login4/${idUser}`, {
            method: "DELETE"
        })
        .then(() => {
            alert("Usuário removido!");
            elementoHTML.remove();
        })
          .catch(erro => {
            console.error("Erro ao Remover usuário", erro);
        });
}


