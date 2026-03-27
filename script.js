function verificarRelacion() {
    const fechaInput = document.getElementById('fechaInicio').value;
    const mesesEstimadosInput = document.getElementById('mesesEstimados').value;
    const resultadoTexto = document.getElementById('resultado');

    if (!fechaInput || mesesEstimadosInput === "") {
        alert("Por favor, completa ambos campos.");
        return;
    }

    const mesesEstimados = parseInt(mesesEstimadosInput);
    const fechaInicio = new Date(fechaInput);
    const hoy = new Date();

    // Cálculo de meses
    let mesesReales = (hoy.getFullYear() - fechaInicio.getFullYear()) * 12;
    mesesReales += hoy.getMonth() - fechaInicio.getMonth();

    if (hoy.getDate() < fechaInicio.getDate()) {
        mesesReales--;
    }

    if (mesesReales === mesesEstimados) {
        resultadoTexto.style.color = "#ff4d6d";
        resultadoTexto.innerHTML = `¡Correcto! Llevan <strong>${mesesReales}</strong> meses. ❤️`;
        lanzarTulipanes();
    } else {
        resultadoTexto.style.color = "red";
        resultadoTexto.innerHTML = `El cálculo real es de <strong>${mesesReales}</strong> meses.`;
    }
}

function lanzarTulipanes() {
    const garden = document.getElementById('garden');
    const flores = ['🌷', '🌸', '🌹', '🌺'];
    
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const flor = document.createElement('div');
            flor.classList.add('tulipan');
            flor.innerText = flores[Math.floor(Math.random() * flores.length)];
            flor.style.left = Math.random() * 100 + 'vw';
            flor.style.animationDuration = (Math.random() * 3 + 2) + 's';
            garden.appendChild(flor);
            
            setTimeout(() => flor.remove(), 5000);
        }, i * 100);
    }
}