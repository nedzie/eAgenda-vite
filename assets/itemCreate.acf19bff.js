var s=Object.defineProperty;var c=(o,t,e)=>t in o?s(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e;var a=(o,t,e)=>(c(o,typeof t!="symbol"?t+"":t,e),e);import"./modulepreload-polyfill.c7c6310f.js";/* empty css              */import{E as n}from"./entidade.model.0b0c5e30.js";import{T as l}from"./tarefa.repository.local-storage.5f58b1f6.js";class d extends n{constructor(e){super();a(this,"descricao");a(this,"finalizado");this.descricao=e,this.finalizado=!1}}class m{constructor(t,e){a(this,"txtDescricao");a(this,"buttonSalvar");a(this,"idSelecionado");if(this.repositorioTarefas=t,this.configurarElementos(),e){this.idSelecionado=e;const r=this.repositorioTarefas.selecionarPorId(e),i=r.itens[0];r&&this.preencherFormulario(i)}}configurarElementos(){this.txtDescricao=document.getElementById("txtDescricao"),this.buttonSalvar=document.getElementById("btnSalvar"),this.buttonSalvar.addEventListener("click",t=>this.gravarRegistros())}gravarRegistros(){const t=this.obterDadosFormulario(),e=this.repositorioTarefas.selecionarPorId(this.idSelecionado);e&&e.addItem(t),window.location.href="item.list.html"}preencherFormulario(t){this.txtDescricao.value=t.descricao}obterDadosFormulario(){return new d(this.txtDescricao.value)}}const h=new URLSearchParams(window.location.search),f=h.get("id");new m(new l,f);