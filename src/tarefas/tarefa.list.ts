import { IPaginaHTML } from "../shared/pagina.interface";
import { IPaginaListagem } from "../shared/pagina.list.interface";
import { IRepositorio } from "../shared/repositorio.interface";
import { Tarefa } from "./models/tarefa.model";
import { TarefaRepositoryLocalStorage } from "./repositories/tarefa.repository.local-storage";


class TarefaPaginaListagem implements IPaginaHTML, IPaginaListagem {
    tabela: HTMLTableElement;

    constructor(private repositorioTarefas: IRepositorio<Tarefa>) {
        this.configurarElementos();

        this.atualizarTabela();
    }
    
    configurarElementos(): void {
        this.tabela = document.getElementById("tabela") as HTMLTableElement;
    }

    atualizarTabela(): void {
        const tarefas = this.repositorioTarefas.selecionarTodos();

        const corpoTabela = this.tabela.getElementsByTagName("tbody")[0];

        tarefas.forEach(tarefa => {
            const novaLinha = corpoTabela.insertRow();

            Object.values(tarefa).forEach((valor: any) => {
                const novaCelula = novaLinha.insertCell();
                
                novaCelula.innerText = valor;
            });
            
            const celulaBotoes = novaLinha.insertCell();
            const buttonEditar = document.createElement("a");
            buttonEditar.innerText = "Editar";
            buttonEditar.className = "btn btn-primary me-3";
            
            buttonEditar.addEventListener("click", () => {
                const idSelecionado = tarefa.id;

                window.location.href = `tarefa.create.html?id=${idSelecionado}`;
            });

            const buttonExcluir = document.createElement("a");
            buttonExcluir.innerText = "Excluir";
            buttonExcluir.className = "btn btn-danger me-3";
            
            buttonExcluir.addEventListener("click", () => {
                const idSelecionado = tarefa.id;

                this.repositorioTarefas.excluir(idSelecionado);

                window.location.reload();
            });

            const buttonAddItens = document.createElement("a");
            buttonAddItens.innerText = "Add Itens";
            buttonAddItens.className = "btn btn-outline-light me-3";

            buttonAddItens.addEventListener("click", () => {
                const idSelecionado = tarefa.id;

                window.location.href = `item.create.html?id=${idSelecionado}`;
            });

            const buttonVisualizarItens = document.createElement("a");
            buttonVisualizarItens.innerText = "Visualizar Itens";
            buttonVisualizarItens.className = "btn btn-outline-info";

            buttonVisualizarItens.addEventListener("click", () => {
                const idSelecionado = tarefa.id;

                window.location.href = `item.list.html?is=${idSelecionado}`;
            })

            celulaBotoes.appendChild(buttonEditar);
            celulaBotoes.appendChild(buttonExcluir);
            celulaBotoes.appendChild(buttonAddItens);
            celulaBotoes.appendChild(buttonVisualizarItens);
        });
    }
} 

new TarefaPaginaListagem(new TarefaRepositoryLocalStorage());