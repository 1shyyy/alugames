function alterarStatus(num){
    if(document.getElementById('game-' + num).querySelector('div').classList.contains('dashboard__item__img--rented')){
        let imagem = document.getElementById('game-' + num).querySelector('div').classList.remove('dashboard__item__img--rented');
        let botao = document.getElementById('game-' + num).querySelector('a').classList.remove('dashboard__item__button--return');
        let textoBotao = document.getElementById('game-' + num).querySelector('a');
        textoBotao.innerHTML = 'Alugar';
    }else{
        let imagem = document.getElementById('game-' + num).querySelector('div').classList.add('dashboard__item__img--rented');
        let botao = document.getElementById('game-' + num).querySelector('a').classList.add('dashboard__item__button--return');
        let textoBotao = document.getElementById('game-' + num).querySelector('a');
        textoBotao.innerHTML = 'Devolver';
    }
}