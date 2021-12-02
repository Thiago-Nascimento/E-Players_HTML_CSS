
function mostrarMenu() {
    
    let menu = document.getElementById("menu");
    
    console.log(getComputedStyle(menu).display);

    if (getComputedStyle(menu).display != "none") {
        menu.style.display = "none"

    } else {
        menu.style.display = "flex"
    }
}

function mostrarPopUp() {
    window.alert("A página carregou com sucesso!!!")
}

function cadastrarEmail() {
    let emailDigitado = document.getElementById("campo-email").value;
    console.log(emailDigitado);
}

function renderizarNoticias() {
    let espaco = document.getElementById("espaco-noticias")

    let listaNoticias = [
        {
            imagem: "img/fifa.png",
            titulo: "Avaí subiu para a série A",
            descricao: "Avaí subiu para a série A do campeonato brasileiro"
        },
        {
            imagem: "img/cardnews.jpg",
            titulo: "Black Friday derruba o preco do Disco de Freio",
            descricao: "Black Friday vende pela metade do dobro, o Disco de Freio"
        },
        {
            imagem: "img/cardnews.jpg",
            titulo: "Renato Gaucho demitido",
            descricao: "Renato Gaucho foi demitido do Flamengo após jogo contra o Palmeiras"
        },
        {
            imagem: "img/cardnews.jpg",
            titulo: "Avaí subiu para a série A",
            descricao: "Avaí subiu para a série A do campeonato brasileiro"
        },
        {
            imagem: "img/cardnews.jpg",
            titulo: "Avaí subiu para a série A",
            descricao: "Avaí subiu para a série A do campeonato brasileiro"
        },
        {
            imagem: "img/cardnews.jpg",
            titulo: "Avaí subiu para a série A",
            descricao: "Avaí subiu para a série A do campeonato brasileiro"
        },
        {
            imagem: "img/cardnews.jpg",
            titulo: "Avaí subiu para a série A",
            descricao: "Avaí subiu para a série A do campeonato brasileiro"
        },
        {
            imagem: "img/cardnews.jpg",
            titulo: "Avaí subiu para a série A",
            descricao: "Avaí subiu para a série A do campeonato brasileiro"
        },
        {
            imagem: "img/cardnews.jpg",
            titulo: "Avaí subiu para a série A",
            descricao: "Avaí subiu para a série A do campeonato brasileiro"
        },
        {
            imagem: "img/cardnews.jpg",
            titulo: "Avaí subiu para a série A",
            descricao: "Avaí subiu para a série A do campeonato brasileiro"
        },
        {
            imagem: "img/cardnews.jpg",
            titulo: "Avaí subiu para a série A",
            descricao: "Avaí subiu para a série A do campeonato brasileiro"
        },
        {
            imagem: "img/cardnews.jpg",
            titulo: "Avaí subiu para a série A",
            descricao: "Avaí subiu para a série A do campeonato brasileiro"
        },
    ]

    let template = "";

    for (let index = 0; index < listaNoticias.length; index++) {
        const noticia = listaNoticias[index];

        console.log(noticia)

        template =+ `<div class="cardnews">
            <img src="${noticia.imagem}" alt="Foto da jogadora profissional">
            <h3>${noticia.titulo}</h3>
            <p>${noticia.descricao}</p>
        </div>`        
    }

    espaco.innerHTML = template
}
