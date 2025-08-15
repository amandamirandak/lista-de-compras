// Exporta a constante 'inputItem' para que ela possa ser usada em outros arquivos JavaScript.
// Essa constante está ligada ao elemento HTML com o id "input-item" (geralmente um campo <input>)
export const inputItem = document.getElementById("input-item");

let contador = 0;

// Exporta a função 'criarItemDaLista', que será usada para criar um novo item na lista de compras.
export function criarItemDaLista() {
    
    // Verifica se o campo de entrada está vazio (ou seja, se o usuário não digitou nada).
    // Se estiver vazio, mostra um alerta na tela pedindo para inserir um item
    // e finaliza a função com 'return', impedindo a continuação do código.
    if (inputItem.value === "") {
        alert("Por favor, insira um item!");
        return;
    }

    // Cria um elemento HTML <li> (list item), que representará um item da lista.
    const itemDaLista = document.createElement("li");

    // Cria uma <div> que servirá como um container para o conteúdo do item.
    const containerItemDaLista = document.createElement("div");

    // Adiciona uma classe CSS à <div> para que ela possa ser estilizada com CSS.
    containerItemDaLista.classList.add("lista-item-container");

    // Cria um parágrafo <p> para mostrar o nome do item digitado.
    const nomeItem = document.createElement("p");

    // Cria um checkbox para o item da lista
    const inputCheckBox = document.createElement("input");
    inputCheckBox.type = "checkbox";
    inputCheckBox.id = "checkbox-" + contador++;
    containerItemDaLista.appendChild(inputCheckBox);

    // Adiciona um evento para riscar ou remover
    //o risco do texto ao marcar/desmarcar um item
    inputCheckBox.addEventListener("change", function() {
        if(inputCheckBox.checked){
            nomeItem.style.textDecoration = "line-through";
        } else {
            nomeItem.style.textDecoration = "none";
        }
    });

    // Define o texto do parágrafo como o valor que o usuário digitou no input.
    nomeItem.innerText = inputItem.value;

    // Adiciona o <p> com o nome do item dentro da <div> (o container).
    containerItemDaLista.appendChild(nomeItem);

    // Adiciona a <div> dentro do <li>, formando a estrutura final do item.
    itemDaLista.appendChild(containerItemDaLista);

    // Retorna o <li> completo, que já contém o item digitado, pronto para ser adicionado na lista.
    return itemDaLista;
}
