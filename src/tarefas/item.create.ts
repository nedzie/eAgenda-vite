import { IPaginaFormulario } from "../shared/pagina-create.interface";
import { IPaginaHTML } from "../shared/pagina.interface";
import { IRepositorio } from "../shared/repositorio.interface";
import { Item } from "./models/item.model";
import { Tarefa } from "./models/tarefa.model";
import { TarefaRepositoryLocalStorage } from "./repositories/tarefa.repository.local-storage";


class ItemPaginaCadastro implements IPaginaHTML, IPaginaFormulario<Item>  {
  private txtDescricao: HTMLInputElement;
  private buttonSalvar: HTMLButtonElement;
  private idSelecionado: string;

  constructor(private repositorioTarefas: IRepositorio<Tarefa>, id?: string) { /* Repositório também é um atributo de 'TarefaPaginaCadastro' */
    this.configurarElementos();

    if(id) {
      this.idSelecionado = id;
      const tarefaSelecionada = this.repositorioTarefas.selecionarPorId(id);

      const item = tarefaSelecionada!.itens[0];

      if(tarefaSelecionada) {
        this.preencherFormulario(item);
      }
    };
  };
  
  configurarElementos(): void {
    this.txtDescricao = document.getElementById("txtDescricao") as HTMLInputElement;
    this.buttonSalvar = document.getElementById("btnSalvar") as HTMLButtonElement;

    this.buttonSalvar.addEventListener("click", (_evt: any) => this.gravarRegistros());
  };

  gravarRegistros(): void {
    const item = this.obterDadosFormulario();

    const tarefaSelecionada = this.repositorioTarefas.selecionarPorId(this.idSelecionado);

    if(tarefaSelecionada)
      tarefaSelecionada.addItem(item);

    window.location.href = "item.list.html";
  };

  preencherFormulario(item: Item): void{
    this.txtDescricao.value = item.descricao;
  }

  obterDadosFormulario(): Item {
    return new Item(this.txtDescricao.value);
  }

}

const params = new URLSearchParams(window.location.search);
const id = params.get("id") as string;

new ItemPaginaCadastro(new TarefaRepositoryLocalStorage(), id);