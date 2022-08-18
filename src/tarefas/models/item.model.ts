import { EntidadeBase } from "../../shared/entidade.model";

export class Item extends EntidadeBase {
  public descricao: string;
  public finalizado: boolean;

  constructor(descricao: string) {
    super();

    this.descricao = descricao;
    this.finalizado = false;
  }
}