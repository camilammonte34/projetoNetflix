function information(){
    a = document.querySelector("[class= 'filme-principal']").style.backgroundImage='url(img/capa3.jpg)'
    b = document.querySelector(".titulo")
    c = document.querySelector(".decription")
    b.remove()
    c.innerHTML="<p class='temp'><strong>A série Once Upon a Time começou a ser exibida em 29 de setembro de 2012 e tem 7 temporadas." +
        " A série segue vários personagens de contos de fadas que foram trazidos para o mundo real e tiveram suas memórias originais roubadas por uma maldição poderosa. As primeiras seis temporadas se passam na cidade fictícia de Storybrooke, com Emma Swan sendo a personagem principal, enquanto a sétima temporada se passa em um bairro de Seattle chamada Hyperion Heights, com uma nova narrativa principal liderada por Henry Mills, agora adulto.\n" +
        "\n" +
        "Em fevereiro de 2018, foi anunciado que a sétima temporada seria a última temporada da série</strong></p>"

}

