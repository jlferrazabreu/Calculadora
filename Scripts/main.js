function Calculadora() {
    this.display = document.querySelector('.display');
    
    this.inicia = () => this.capturaCliques();


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
    this.deleta = () => this.display.value = this.value.slice(0,-1);

}

const calculadora = new Calculadora();
calculadora.inicia();