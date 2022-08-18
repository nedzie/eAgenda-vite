import { IRepositorioSerializavel } from "../../shared/repositorio-serializavel.interface";
import { IRepositorio } from "../../shared/repositorio.interface";
import { Tarefa } from "../models/tarefa.model";

export class TarefaRepositoryLocalStorage implements IRepositorio<Tarefa>, IRepositorioSerializavel {
  private readonly localStorage: Storage;

  private tarefas: Tarefa[];

  constructor() {
    this.localStorage = window.localStorage;
    this.tarefas = this.selecionarTodos();
  }

  public inserir(registro: Tarefa): void {
    this.tarefas.push(registro);
    this.gravar();
  }

  editar(id: string, tarefa: Tarefa): void {
    const indiceTarefa = this.tarefas.findIndex(x => x.id === id);

    const novaTarefa = new Tarefa(tarefa.descricao, tarefa.prioridade);

    novaTarefa.dataCriacao = tarefa.dataCriacao;
    novaTarefa.itens = tarefa.itens;
    novaTarefa.id = tarefa.id;

    this.tarefas[indiceTarefa] = novaTarefa;

    this.gravar();
  }

  excluir(id: string): void {
    this.tarefas = this.tarefas.filter(x => x.id !== id);

    this.gravar();
  }

  public selecionarTodos(): Tarefa[] {
    const dados = this.localStorage.getItem("tarefas");

    if(!dados)
        return [];

    return JSON.parse(dados);
  }

  selecionarPorId(id: string): Tarefa | undefined {
    return this.tarefas.find(x => x.id === id);
  }

  public gravar(): void {
    const tarefasJsonString = JSON.stringify(this.tarefas);

    this.localStorage.setItem("tarefas", tarefasJsonString);
  }
}