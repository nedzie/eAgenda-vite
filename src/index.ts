import { IPaginaHTML } from "./shared/pagina.interface";

class Index implements IPaginaHTML {
    buttonCadastrar: HTMLButtonElement;

    constructor() {
        this.configurarElementos();
    }

    public configurarElementos(): void {
    }
}

new Index();