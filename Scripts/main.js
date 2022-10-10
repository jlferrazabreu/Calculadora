function Calculadora() {
    this.display = document.querySelector('.display');
    
    this.inicia = () => {
        this.capturaCliques();
        this.capturaEnter();
    };

    this.capturaEnter = () => {
        document.addEventListener('keyup', e => {
            if (e.keyCode === 13) this.realizaConta();
        });
    };

    this.capturaCliques = () =>{
        document.addEventListener('click', event => {
            const el = event.target;
            if(el.classList.contains('btn-num')) this.addNumDisplay(el);
            if(el.classList.contains('btn-clear')) this.clear();
            if(el.classList.contains('btn-del')) this.deleta();
            if(el.classList.contains('btn-eq')) this.realizaConta();
        });
    };

    this.addNumDisplay = el => this.display.value += el.innerText;

    this.clear = () => this.display.value = '';
    this.deleta = () => this.display.value = this.display.value.slice(0,-1);
    this.realizaConta = () => {
        try {
            const conta = eval(this.display.value);

            if (!conta) {
                alert('Conta invalida');
                return;
            }

            this.display.value = conta;

        } catch (error) {
            alert('Conta invalida');
                return;
        }
    };

}

const calculadora = new Calculadora();
calculadora.inicia();