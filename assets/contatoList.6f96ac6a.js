var m=Object.defineProperty;var h=(i,t,e)=>t in i?m(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var o=(i,t,e)=>(h(i,typeof t!="symbol"?t+"":t,e),e);import"./modulepreload-polyfill.c7c6310f.js";/* empty css              */import{E as d}from"./entidade.model.0b0c5e30.js";class c extends d{constructor(e,a,s,n,r,l){super();o(this,"nome");o(this,"email");o(this,"telefone");o(this,"empresa");o(this,"cargo");l&&(this.id=l),this.nome=e,this.email=a,this.telefone=s,this.empresa=n,this.cargo=r}}class u{constructor(){o(this,"localStorage");o(this,"contatos");this.localStorage=window.localStorage,this.contatos=this.selecionarTodos()}inserir(t){this.contatos.push(t),this.gravar()}editar(t,e){const a=this.contatos.findIndex(s=>s.id===t);this.contatos[a]={id:t,nome:e.nome,email:e.email,telefone:e.telefone,empresa:e.empresa,cargo:e.cargo},this.gravar()}excluir(t){this.contatos=this.contatos.filter(e=>e.id!==t),this.gravar()}selecionarTodos(){const t=this.localStorage.getItem("contatos");return t?JSON.parse(t):[]}selecionarPorId(t){return this.contatos.find(e=>e.id===t)}gravar(){const t=JSON.stringify(this.contatos);this.localStorage.setItem("contatos",t)}}class g{constructor(t,e){o(this,"txtNome");o(this,"txtEmail");o(this,"txtTelefone");o(this,"txtEmpresa");o(this,"txtCargo");o(this,"buttonSalvar");o(this,"idSelecionado");if(this.repositorioContatos=t,this.configurarElementos(),e){this.idSelecionado=e;const a=this.repositorioContatos.selecionarPorId(e);a&&this.preencherFormulario(a)}}configurarElementos(){this.txtNome=document.getElementById("txtNome"),this.txtEmail=document.getElementById("txtEmail"),this.txtTelefone=document.getElementById("txtTelefone"),this.txtEmpresa=document.getElementById("txtEmpresa"),this.txtCargo=document.getElementById("txtCargo"),this.buttonSalvar=document.getElementById("btnSalvar"),this.buttonSalvar.addEventListener("click",t=>this.gravarRegistros())}gravarRegistros(){const t=this.obterDadosFormulario();!this.validarInputs(t)||(this.idSelecionado?this.repositorioContatos.editar(t.id,t):this.repositorioContatos.inserir(t),window.location.href="contato.list.html")}preencherFormulario(t){this.txtNome.value=t.nome,this.txtEmail.value=t.email,this.txtTelefone.value=t.telefone,this.txtEmpresa.value=t.empresa,this.txtCargo.value=t.cargo}obterDadosFormulario(){const t=this.txtNome.value,e=this.txtEmail.value,a=this.txtTelefone.value,s=this.txtEmpresa.value,n=this.txtCargo.value;let r=null;return this.idSelecionado?r=new c(t,e,a,s,n,this.idSelecionado):r=new c(t,e,a,s,n),r}validarInputs(t){return new RegExp(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi).test(t.email)?t.telefone.length<10?(alert("Telefone inv\xE1lido"),!1):!0:(alert("Email inv\xE1lido"),!1)}}const f=new URLSearchParams(window.location.search),x=f.get("id");new g(new u,x);
