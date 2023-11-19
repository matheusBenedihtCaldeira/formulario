document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("form");
    form.addEventListener("submit", function (event) {
        event.preventDefault();
    })
})

function gerarHistoria() {
    let nome = document.getElementById("nome").value;
    let idade = document.getElementById("idade").value;
    let localizacao = document.getElementById("localizacao").value;
    let raca = document.querySelector('input[name="raca"]:checked').value;
    let resultado = document.getElementById('historia');
    let armas = document.querySelectorAll('input[name="armas"]:checked');
    let armasSelecionadas = [];
    armas.forEach(function (checkbox) {
        armasSelecionadas.push(checkbox.value);
    });
    let clan = document.querySelector('input[name="clan"]:checked').value;
    console.log(clan);

    let historia = `
    <div class="col-12 fs-6">
                <div class="row">
                    <h2>A Jornada de ${nome}</h2>
                    <div>
                        <p>Em uma terra encantada,  um(a) ${raca}(a) chamado(a) ${nome}, de ${idade} anos, embarcou em uma jornada épica pela mágica ${localizacao}. Armada com ${armasSelecionadas}, ele(a) partiu para explorar os segredos antigos que residiam em ${localizacao}. Com uma força notável, ${nome} enfrentou desafios incríveis, sua habilidade e destreza na luta destacando-se entre todos.</p>
                    </div>
                    <div>
                        <p>Ao longo dos anos, sua sabedoria cresceu, e ${nome} se tornou uma guardiã respeitada por todos os reinos.Tendo origem do clan ${clan}, tornado se uma lenda viva.</p >
                    </div >
                    <div>
                        <p>Aos ${idade} anos, ele(a) descobriu um portal antigo que levava a uma dimensão esquecida, onde a magia e os desafios eram além de qualquer coisa que ele(a) já havia enfrentado. Com sua força e sabedoria, ${nome} não apenas sobreviveu a essa jornada extraordinária, mas também trouxe consigo conhecimentos que enriqueceram sua terra natal e seu clan.</p>
                    </div>
                    <div">
                        <p>No crepúsculo de sua vida longa e repleta de realizações, ${nome} permaneceu uma inspiração para as futuras gerações, uma testemunha viva da magia que permeava seu mundo encantado.
                    </p>
                    </div>
            </div >
            </div >
            </div >
        `

    
    if (clan == "Paladino") {
        resultado.style.backgroundColor = '#d97706';
        resultado.style.color = 'white';
    } else {
        resultado.style.backgroundColor = '#450a0a';
        resultado.style.color = 'white';
    }

    resultado.innerHTML = historia;
    
}