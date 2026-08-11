const inputUpload = document.getElementById('meu-upload')

inputUpload.addEventListener('change', function(evento) {  

    const arquivo = evento.target.files[0]

    if (arquivo) {
        const nomeDaImagem = arquivo.nomeDaImagem
        console.log(nomeDaImagem)
    } else {
        console.log("Nenhum arquivo selecionado.");
    }
});