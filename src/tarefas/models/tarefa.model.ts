import { EntidadeBase } from "../../shared/entidade.model";
import { Item } from "./item.model";
import { Prioridade } from "./prioridade.enum";

export class Tarefa extends EntidadeBase {
    public descricao: string;
    public dataCriacao: Date;
    public prioridade: Prioridade;
    public itens: Item[];

    constructor(descricao: string, prioridade: Prioridade, id?: string) {
      super();

      if(id)
          this.id = id;
          
      this.descricao = descricao;
      this.dataCriacao = new Date();
      this.prioridade = prioridade;
    }

    public addItem(item: Item): void {
      this.itens.push(item);
    }
}