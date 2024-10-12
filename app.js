function pesquisar() {
    //Pega o local em que deverá ser exibido o resultado
    let section = document.getElementById("resultados-pesquisa");

    //Inicia a string "resltado" pois a ela será adicionado várias outras coisas
    let resultado = "";

    //Pega o que está escrito na barra de pesquisa
    let campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase();

    if (campoPesquisa == "") {
        section.innerHTML = "Digite o nome de um país."
        return
    }

    //Inicializa as string para não ficar dentro do for
    pais = "";
    capital = "";
    tags = "";

    for (let item of paises) {
        pais = item.pais.toLowerCase();
        capital = item.capital.toLowerCase();
        tag = item.tag.toLowerCase();

        if (pais.includes(campoPesquisa) || capital.includes(campoPesquisa) || tag.includes(campoPesquisa)) {
            //Elabora o que deve ou não ser exibido na seção de resultados
            resultado += `
                <div class="item-resultado">
                <h2>
                <a href="#" target="_blank">${item.pais}</a></h2>
                <p class="descricao-meta">
                ${item.capital}
                </p>
                </div>`
        }
    }

    //Coloco o que somou nos "resultado" na section recolhida do HTML
    section.innerHTML = resultado;

    //Se não tiver nenhum resultado, escreve que nada foi encontrado
    if(resultado == ""){
        section.innerHTML = "Nada foi encontrado.";
    }

}

//min 45