var d=Object.defineProperty;var c=(t,a,s)=>a in t?d(t,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[a]=s;var i=(t,a,s)=>(c(t,typeof a!="symbol"?a+"":a,s),s);import{E as n}from"./entidade.model.a432e501.js";class h extends n{constructor(s,e,r){super();i(this,"descricao");i(this,"dataCriacao");i(this,"prioridade");i(this,"itens");r&&(this.id=r),this.descricao=s,this.dataCriacao=new Date,this.prioridade=e}addItem(s){this.itens.push(s)}}class g{constructor(){i(this,"localStorage");i(this,"tarefas");this.localStorage=window.localStorage,this.tarefas=this.selecionarTodos()}inserir(a){this.tarefas.push(a),this.gravar()}editar(a,s){const e=this.tarefas.findIndex(o=>o.id===a),r=new h(s.descricao,s.prioridade);r.dataCriacao=s.dataCriacao,r.itens=s.itens,r.id=s.id,this.tarefas[e]=r,this.gravar()}excluir(a){this.tarefas=this.tarefas.filter(s=>s.id!==a),this.gravar()}selecionarTodos(){const a=this.localStorage.getItem("tarefas");return a?JSON.parse(a):[]}selecionarPorId(a){return this.tarefas.find(s=>s.id===a)}gravar(){const a=JSON.stringify(this.tarefas);this.localStorage.setItem("tarefas",a)}}export{g as T,h as a};