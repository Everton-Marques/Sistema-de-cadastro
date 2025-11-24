//Só irá carregar o js quando toda a página for carregada.
document.addEventListener('DOMContentLoaded', () => {
    // Seleciona todos os botões dentro da div .btn e transforma em array.
    const btns = Array.from(document.querySelectorAll('.btn > button'));
    const [btnRegistrar, btnDeletar, btnVisualizar] = btns;
    //Referencia os dois  overlays.
    const overlayLi = document.getElementById('overlayLi');
    const overlayDlt = document.getElementById('overlayDlt');
    // Abrir visualizar."?" é usado para não retornar erro, se btnVisualizar nao existir.
    btnVisualizar?.addEventListener('click', () => {
        //Altera o display para flex.
        if (overlayLi) overlayLi.style.display = 'flex';
    });
    // Abrir delete.
    btnDeletar?.addEventListener('click', () => {
        if (overlayDlt) overlayDlt.style.display = 'flex';
    });
    // Fechar todos os modais quando clicar no botão .close-btn.
    //Pega todos os botões com a classe .close-btn.
    document.querySelectorAll('.close-btn').forEach(btn => {
        //e "passa" por eles esperando um click.
        btn.addEventListener('click', () => {
           // Após o clique, seleciona os dois overlays e define display="none" para ambos.
            document.querySelectorAll('.overlay-lista, .overlay-delete').forEach(o => {
                //Assim, o que  estiver ativo "flex", fecha com o "none".
                o.style.display = 'none';
            });
        });
    });
    // Fechar também ao clicar no overlay (fora do modal).
    //Pega os dois overlays no array e "passa" por eles.
    [overlayLi, overlayDlt].forEach(overlayAtual => {
        // Verifica se o overlay existe. Caso contrário, retorna dessa iteração e passa para o próximo.
        if (!overlayAtual) return;
        //se existir, vai aguardar um ouvinte de click.
        overlayAtual.addEventListener('click', (e) => {
           // e.target é o elemento onde o clique aconteceu.
            /* Se for estritamente igual ao overlay, ou seja, no overlay
            o mesmo recebe o display "none" e fecha*/
            if (e.target === overlayAtual) overlayAtual.style.display = 'none';
        });
    });
});