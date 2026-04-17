
class VooSeguro {
    #codigo;
    #combustivel;

    constructor(codigoPassado) {
        this.#codigo = codigoPassado;
        this.#combustivel = 100;
    }

    get exibirStatus() {
        return `Combustível: ${this.#combustivel}%`;
    }

    get nivelAtual() {
        return this.#combustivel;
    }

    set abastecer(quantidade) {
        if (quantidade < 0) {
            console.error("Tentativa de roubo!");
        } else if (this.#combustivel + quantidade > 100) {
            this.#combustivel = 100;
        } else {
            this.#combustivel += quantidade;
        }
    }

    gastar(quantidade) {
        this.#combustivel -= quantidade;

        if (this.#combustivel < 0) {
            this.#combustivel = 0;
        }
    }
}

const vooVip = new VooSeguro("VIP-001");
const painelTexto = document.getElementById("painelCombustivel");
const btnGastar = document.getElementById("btnGastar");
const btnAbastecer = document.getElementById("btnAbastecerSeguro");

function atualizarTela() {
    const nivel = vooVip.nivelAtual;
    painelTexto.innerText = vooVip.exibirStatus;

    document.body.className = "";

    if (nivel === 0) {
        document.body.classList.add("alerta-grave");
        alert("ahhhh vai explodir");
        
    } else if (nivel < 10) {
        document.body.classList.add("alerta-leve");
        alert("Alerta, talvez o avião caia");

        setTimeout(() => {
            document.body.classList.remove("alerta-leve");
        }, 3000);
    }
}

btnGastar.addEventListener("click", () => {
    vooVip.gastar(15); 
    atualizarTela();
});

btnAbastecer.addEventListener("click", () => {
    vooVip.abastecer = 10;
    atualizarTela();
});