const obrasDeArte = [];

const container = document.getElementById('galeria-container');
const form = document.getElementById('form-arte');

function renderizarGaleria() {
    container.innerHTML = "";
    obrasDeArte.forEach(obra => {
        const card = document.createElement('div');
        card.classList.add('card');

        card.innerHTML = `
            <img src="${obra.imagem}" alt="${obra.titulo}">
            <div class="card-info">
                <h3 class="titulo-arte">${obra.titulo}</h3>
                <p class="autor">Por ${obra.autor}</p>
                <p class="valor">${obra.valor}</p>
            </div>
        `;

        container.appendChild(card);
    });
}

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const tituloInput = document.getElementById('titulo').value;
    const autorInput = document.getElementById('autor').value;
    const valorInput = document.getElementById('valor').value;
    const imagemInput = document.getElementById('imagem').files[0];

    if (imagemInput) {
        const leitor = new FileReader();

        leitor.onload = function(e) {
            const novaObra = {
                titulo: tituloInput,
                autor: autorInput,
                valor: `R$ ${valorInput}`,
                imagem: e.target.result // Lê a imagem como dados em formato base64
            };

            obrasDeArte.push(novaObra);
            renderizarGaleria();
            form.reset();
        }

        leitor.readAsDataURL(imagemInput);
    }
});