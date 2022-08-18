import { EntidadeBase } from "./entidade.model.js";

export interface IPaginaFormulario<T extends EntidadeBase> {
    preencherFormulario(registro: T): void;
    obterDadosFormulario(): T;
    gravarRegistros(): void;
}