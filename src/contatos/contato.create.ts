import { IPaginaFormulario } from "../shared/pagina-create.interface";
import { IPaginaHTML } from "../shared/pagina.interface";
import { IRepositorio } from "../shared/repositorio.interface";
import { Contato } from "./models/contato.model";
import { ContatoRepositoryLocalStorage } from "./repositories/contato.repository.local-storage";

class ContatoPaginaCadastro implements IPaginaHTML, IPaginaFormulario<Contato> {
  private txtNome: HTMLInputElement;
  private txtEmail: HTMLInputElement;
  private txtTelefone: HTMLInputElement;
  private txtEmpresa: HTMLInputElement;
  private txtCargo: HTMLInputElement;
  private buttonSalvar: HTMLButtonElement;
  private idSelecionado: string;

  constructor(private repositorioContatos: IRepositorio<Contato>, id?: string) {
    this.configurarElementos();

    if(id) {
      this.idSelecionado = id;
      const tarefaSelecionada = this.repositorioContatos.selecionarPorId(id);

      if(tarefaSelecionada) {
        this.preencherFormulario(tarefaSelecionada);
      }
    };
  }

  configurarElementos(): void {
    this.txtNome = document.getElementById("txtNome") as HTMLInputElement;
    this.txtEmail = document.getElementById("txtEmail") as HTMLInputElement;
    this.txtTelefone = document.getElementById("txtTelefone") as HTMLInputElement;
    this.txtEmpresa = document.getElementById("txtEmpresa") as HTMLInputElement;
    this.txtCargo = document.getElementById("txtCargo") as HTMLInputElement;
    this.buttonSalvar = document.getElementById("btnSalvar") as HTMLButtonElement;

    this.buttonSalvar.addEventListener("click", (_evt: any) => this.gravarRegistros());
  }

  gravarRegistros(): void {
    const contato = this.obterDadosFormulario();

    if(!this.validarInputs(contato))
      return;

    if(!this.idSelecionado)
      this.repositorioContatos.inserir(contato);
    else
      this.repositorioContatos.editar(contato.id, contato);

    window.location.href = "contato.list.html";
  }

  preencherFormulario(contato: Contato): void {
    this.txtNome.value = contato.nome;
    this.txtEmail.value = contato.email;
    this.txtTelefone.value = contato.telefone;
    this.txtEmpresa.value = contato.empresa;
    this.txtCargo.value = contato.cargo;
  }

  obterDadosFormulario(): Contato {
    const nome = this.txtNome.value;
    const email = this.txtEmail.value;
    const telefone = this.txtTelefone.value;
    const empresa = this.txtEmpresa.value;
    const cargo = this.txtCargo.value;

    let contato = null;

    if(!this.idSelecionado)
      contato = new Contato(nome, email, telefone, empresa, cargo);
    else
      contato = new Contato(nome, email, telefone, empresa, cargo, this.idSelecionado);

    return contato;
  }

  private validarInputs(contato: Contato): boolean {
    const email = new RegExp(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi);
    if(!email.test(contato.email)) {
      alert("Email inválido");
      return false;
    }

    if(contato.telefone.length < 10) {
      alert("Telefone inválido");
      return false
    }

    return true;
  }
}

const params = new URLSearchParams(window.location.search);
const id = params.get("id") as string;

new ContatoPaginaCadastro(new ContatoRepositoryLocalStorage(), id);