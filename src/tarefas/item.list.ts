import { IPaginaHTML } from "../shared/pagina.interface";
import { IPaginaListagem } from "../shared/pagina.list.interface";
import { IRepositorio } from "../shared/repositorio.interface";
import { Prioridade } from "./models/prioridade.enum";
import { Tarefa } from "./models/tarefa.model";
import { TarefaRepositoryLocalStorage } from "./repositories/tarefa.repository.local-storage";


class ItemPaginaListagem implements IPaginaHTML, IPaginaListagem {
    tabela: HTMLTableElement;
    private idSelecionado: string;

    constructor(private repositorioTarefas: IRepositorio<Tarefa>, id?: string) {
        this.configurarElementos();

        if(id)
          this.idSelecionado = id;

        /* REMOVER */
                        this.idSelecionado = this.idSelecionado.length.toString();
                        const removerEssaLinhaEADeCima = this.repositorioTarefas.selecionarTodos();
                        removerEssaLinhaEADeCima.push(new Tarefa("oi", Prioridade.Alta));
        /* REMOVER */

        this.atualizarTabela();
    }
    
    configurarElementos(): void {
        this.tabela = document.getElementById("tabela") as HTMLTableElement;
    }

    atualizarTabela(): void {
        // const tarefas = this.repositorioTarefas.selecionarPorId(this.idSelecionado);

        // const corpoTabela = this.tabela.getElementsByTagName("tbody")[0];

    }
} 

const params = new URLSearchParams(window.location.search);
const id = params.get("id") as string;

new ItemPaginaListagem(new TarefaRepositoryLocalStorage(), id);