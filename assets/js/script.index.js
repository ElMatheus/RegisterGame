



/* Para realizar precisa de uma funcao */


function verifyInputs() {
    // Verificar se os inputs estao trazendo os valores, 
    // para isso precisamos de variaveis 
    // que colotem e armazenam os inputs

    let title = document.getElementById('title-input').value;
    let price = document.getElementById('price-input').value;
    let description = document.getElementById('description-input').value;
    let platform = document.getElementById('platform-input').value;
    let imgLink = document.getElementById('imgLink-input').value;

    console.log(title);
    console.log(price);
    console.log(description);
    console.log(platform);
    console.log(imgLink);
    // Verificar se o if esta funcionando
    if(title == '' || price == '' || description == '' || platform == '' || imgLink == ''){
        console.log('Os inputs estao vazios');
        // E se estiver funcionando retorna verdadeiro
        sendMsg('Preencha todos os campos', 'error');
        return true;
    } else {
        console.log('Os inputs estao preenchidos');
        sendMsg('Cadastrado com sucesso', 'success');
        return false;
    }
}

function verifySrc(src) {
    if(src.match(/\.(jpeg|jpg|gif|png)$/) != null){
        sendMsg('Cadastrado com sucesso', 'success');
        return true;
    } else {
        sendMsg('Imagem está com o link errado', 'error');
        return false;
    }
}

function sendMsg(msg, typeMsg) {
    let msgDiv = document.getElementById('msg');
    msgDiv.innerHTML = '';
    let msgParaTela=`
        <p class="${typeMsg}">${msg}</p>
    `;
    msgDiv.innerHTML = msgParaTela;

    setTimeout(function() {
        msgDiv.innerHTML = '';
    }, 3000);
}

class Game {
    constructor(title,price,description,platform,imgLink){
        this.title = title;
        this.price = price;
        this.description = description;
        this.platform = platform;
        this.imgLink = imgLink;
    }
}

const gameTeste = new Game('teste','123','Deskteste','PS4','url');

console.log(gameTeste);

function composeGame() {
    let title = document.getElementById('title-input').value;
    let price = document.getElementById('price-input').value;
    let description = document.getElementById('description-input').value;
    let platform = document.getElementById('platform-input').value;
    let imgLink = document.getElementById('imgLink-input').value;

    const game = new Game(title,price,description,platform,imgLink);

    console.log(game);

    libraryGames.add(game);
    console.log(libraryGames);
}

class GameList {
    constructor() {
        this.games = [];
    }

    add(param) {
        if(!verifyInputs() && verifySrc(param.imgLink) == true) {
            this.games.push(param);
            renderContent();
            clearFields();
        }
    }
}

const libraryGames = new GameList();

/* La em add surgiu a necessidade de apos criar o objeto 
que eu limpe os inputs entao eu criei uma funcao de ação */

function clearFields() {
    document.getElementById('title-input').value = '';
    document.getElementById('price-input').value ='';
    document.getElementById('description-input').value='';
    document.getElementById('platform-input').value='';
    document.getElementById('imgLink-input').value='';
}

window.console.clear();

// agora fazer uma funcao que renderizara o objeto no html

function renderContent() {
    let html = '';
    let array = libraryGames.games;

    array.forEach(game => {
        html += `
        <div class="gameDetail">
            <p>Titulo: <strong> ${game.title} </strong></p>
            <p id="price">Preço: R$${game.price}</p>
            <p>Descrição: ${game.description}</p>
            <p>Plataforma: ${game.platform}</p>
            <img src="${game.imgLink}" alt="${game.title}">
        </div>
        `;
    });

    document.getElementById('gameList').innerHTML = html;
}