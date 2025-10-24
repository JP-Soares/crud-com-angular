import { Injectable } from '@angular/core';
import { Cliente } from '../cadastro/cliente';
import { C } from '@angular/cdk/keycodes';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  static REPO_CLIENTES = "_CLIENTES";

  salvar(cliente: Cliente){
    const storage = this.obterStorage();
    storage.push(cliente);

    localStorage.setItem(ClienteService.REPO_CLIENTES, JSON.stringify(storage));
  }

  obterStorage():Cliente[]{
    const respositorioClientes = localStorage.getItem(ClienteService.REPO_CLIENTES);
    if (respositorioClientes) {
    try {
      const clientes = JSON.parse(respositorioClientes);
      if (Array.isArray(clientes)) {
        return clientes;
      } else {
        localStorage.setItem(ClienteService.REPO_CLIENTES, JSON.stringify([]));
        return [];
      }
    } catch {
      localStorage.setItem(ClienteService.REPO_CLIENTES, JSON.stringify([]));
      return [];
    }
  }

  localStorage.setItem(ClienteService.REPO_CLIENTES, JSON.stringify([]));
  return [];

  }

  pesquisarClientes(nomeBusca: string): Cliente[]{
    const clientes = this.obterStorage();
    if(!nomeBusca){
      return clientes;
    }
    return clientes.filter(cliente => cliente.nome?.indexOf(nomeBusca) !== -1);
  }

  buscarClientePorId(id :string): Cliente | undefined{
    const clientes = this.obterStorage();
    return clientes.find(cliente => cliente.id === id);
  }

  atualizar(cliente: Cliente){
    const storage = this.obterStorage();
    storage.forEach(c => {
      if(c.id === cliente.id){
        Object.assign(c, cliente);
      }
    });
    localStorage.setItem(ClienteService.REPO_CLIENTES, JSON.stringify(storage));
  }

  deletar(cliente: Cliente){
    const storage = this.obterStorage();

    const novaLista = storage.filter(c => c.id !== cliente.id);
    // const indexItem = storage.indexOf(cliente);
    // if(indexItem){
    //   storage.splice(indexItem, 1);
    // }

    localStorage.setItem(ClienteService.REPO_CLIENTES, JSON.stringify(novaLista));
  }
}
