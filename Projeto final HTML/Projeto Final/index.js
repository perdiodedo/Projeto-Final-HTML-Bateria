document.addEventListener('DOMContentLoaded', function() {
    // adicionando os click e pa
    const drums = document.querySelectorAll('.drum');
    drums.forEach(drum => {
        drum.addEventListener('click', function() {
            const key = this.getAttribute('data-key');
            // chamandoo função
            playAudio(key);
            // Adiciona a classe pressed e coloca o efeito la
            this.classList.add('pressed');
            // Remove a classe pressed e pa
            setTimeout(() => this.classList.remove('pressed'), 100); //tempo
        });
    });
    // evento pra sair o soom 
    document.addEventListener('keydown', function(event) {
        // pega o codigo ddas key
        const keyCode = event.keyCode;
        // Seleciona o botão correspondente ao código da tecla pressionada
        const drum = document.querySelector(`.drum[data-key="${keyCode}"]`);
        // se o botao for pressionado muda o efeito
        if (drum) {
            playAudio(keyCode);
            drum.classList.add('pressed');
            // Remove a classe pressed
            setTimeout(() => drum.classList.remove('pressed'), 100);
        }
    });

    // Função para reproduzir o áudio associado a uma tecla
    function playAudio(key) {
        const audio = document.querySelector(`audio[data-key="${key}"]`);
        if (audio) {
            audio.currentTime = 0;
            audio.play();
        }
    }
});
