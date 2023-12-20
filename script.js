function toggleMode(){
    const html = document.documentElement;

/*
    if(html.classList.contains('light')){
        html.classList.remove('light');
    } else {
        html.classList.add('light');
    }
*/

    // essa função .toggle faz exatamente a mesma coisa que essa função feita acima.
    html.classList.toggle('light');

    // pegar a tag img
    const img = document.querySelector("#profile img");
    
    // substituir a imagem
    if (html.classList.contains('light')) {
        //se tiver light mode, adicionar a imagem light
        img.setAttribute('src', './assets/avatar-light.png');
        img.setAttribute('alt', 'Foto de Patricia Ferrer, usando óculos escuros.');
    } else {
        // se tiver sem light mode, manter a imagem normal
        img.setAttribute('src', './assets/avatar.png');
        img.setAttribute('alt', 'Foto de Patricia Ferrer sorrindo, usando óculos, um casaco cinza e fundo branco.');
    }
    
}