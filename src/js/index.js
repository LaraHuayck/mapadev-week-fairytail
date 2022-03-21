/*Quando clicar no perssonagem da listagem temos que esconer o cartão do perssonagem aberto e mostrar o cartão correspondente ao que foi selecionado na listagem 

para isso vamos precisar trabalhar com dois elementos
1-listagem
2-cartão

precisamos criar duas variaveis no JS para trabaljar com os elementos da tela

vamos precisar trabalhar com um evento decliqye feito pelo usuário na listagem de pokemon

- remover a classe aberto  só do cartão que está aberto
- ao clicar em 1 perssonagem da listagem pegamos o id desse pokemon para saber qual cartão mostrar
-remover a classe ativa que marca o perssonagem selecionado
-adicionar a classe ativo no item da lista selecionado
*/

// precisamos criar duas variaveis no JS para trabaljar com os elementos da tela
const listaSelecFairytail = document.querySelectorAll('.fairytail')
const fairytailCard = document.querySelectorAll ('.cartao-fairytail')


listaSelecFairytail.forEach(guilda => {
    //vamos precisar trabalhar com um evento decliqye feito pelo usuário na listagem de pokemon
    guilda.addEventListener('click', () => {
        //remover a classe aberto  só do cartão que está aberto
        const cartaoFairytailAberto = document.querySelector ('.aberto')
        cartaoFairytailAberto.classList.remove('aberto')

        // ao clicar em 1 perssonagem da listagem pegamos o id desse pokemon para saber qual cartão mostrar
        const idFairytailSelecionado = guilda.attributes.id.value

        const idDoCartaoFairytailParaAbrir = 'cartao-' + idFairytailSelecionado
        const cartaoFairytailParaAbrir = document.getElementById(idDoCartaoFairytailParaAbrir)
        cartaoFairytailParaAbrir.classList.add('aberto')

        //remover a classe ativa que marca o perssonagem selecionado
        const fairytailAtivoNaListagem = document.querySelector('.ativo')
        fairytailAtivoNaListagem.classList.remove('ativo')

        //adicionar a classe ativo no item da lista selecionado
        const fairytailSelecNaListagem = document.getElementById(idFairytailSelecionado)
        fairytailSelecNaListagem.classList.add('ativo')

    })
})
