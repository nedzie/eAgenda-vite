import { IPaginaHTML } from "../shared/pagina.interface";
import { IPaginaListagem } from "../shared/pagina.list.interface";
import { IRepositorio } from "../shared/repositorio.interface";
import { Contato } from "./models/contato.model";
import { ContatoRepositoryLocalStorage } from "./repositories/contato.repository.local-storage";

class ContatoPaginaListagem implements IPaginaHTML, IPaginaListagem {
  tabela: HTMLTableElement;

  constructor(private repositorioContatos: IRepositorio<Contato>) {
    this.configurarElementos();

    this.atualizarTabela();
}
  
  configurarElementos(): void {
    this.tabela = document.getElementById("tabela") as HTMLTableElement;
  }

  atualizarTabela(): void {
    const contatos = this.repositorioContatos.selecionarTodos();

    const corpoTabela = this.tabela.getElementsByTagName("tbody")[0];

    contatos.forEach(contato => {

      const novaLinha = corpoTabela.insertRow();

      Object.values(contato).forEach((valor: any) => {
        const novaCelula = novaLinha.insertCell();
                
        novaCelula.innerText = valor;
      });

      const celulaBotoes = novaLinha.insertCell();
            const buttonEditar = document.createElement("a");
            buttonEditar.innerText = "Editar";
            buttonEditar.className = "btn btn-primary me-2";
            
            buttonEditar.addEventListener("click", () => {
                const idSelecionado = contato.id;

                window.location.href = `contato.create.html?id=${idSelecionado}`;
            });

            const buttonExcluir = document.createElement("a");
            buttonExcluir.innerText = "Excluir";
            buttonExcluir.className = "btn btn-danger";
            
            buttonExcluir.addEventListener("click", () => {
                const idSelecionado = contato.id;

                this.repositorioContatos.excluir(idSelecionado);

                window.location.reload();
            });

            celulaBotoes.appendChild(buttonEditar);
            celulaBotoes.appendChild(buttonExcluir);
    });
  }
}

new ContatoPaginaListagem(new ContatoRepositoryLocalStorage());