import { resolve } from "path";
import { defineConfig } from "vite";
import { ghPages } from "vite-plugin-gh-pages";

const root = resolve(__dirname, "src");
const outDir = resolve(__dirname, "dist");

export default defineConfig({
  base: "/eAgenda-vite/",
  plugins: [ghPages()],
  root: root,
  build: {
    outDir: outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        index: resolve(root, "index.html"),
        tarefaList: resolve(root, "tarefas/tarefa.list.html"),
        tarefaCreate: resolve(root, "tarefas/tarefa.create.html"),
        /* Os meus */
        contatoList: resolve(root, "contatos/contato.create.html"),
        contatoCreate: resolve(root, "contatos/contato.create.html"),
        itemList: resolve(root, "tarefas/item.list.html"),
        itemCreate: resolve(root, "tarefas/item.create.html")
      }
    }
  },
  publicDir: "../public"
});