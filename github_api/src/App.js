import Header from "./Components/Header";

import './App.css';
import { Component } from 'react';

//npm start


class GitHub extends Component
{
  constructor(props)
  {
    super(props)
    this.state =
    {
      listaRepositorios : [],
      nome : ''
    }
  }

  buscarRepo = (element) =>
  {
    element.preventDefault();

    console.log('Função chamada')

    fetch('https://api.github.com/users/' + this.state.nome + '/repos')

    .then(resposta => resposta.json())

    .then(lista => this.setState({ listaRepositorios : lista }))

    .catch( erro => console.log(erro) )
  }

  atualizaEstadoNome = async (nome) => 
  {                       //Nome state   //Valor Input
    await this.setState({ nome : nome.target.value })
    console.log(this.state.nome)
  }

  render()
  {
  return (
    <div className="App">
      <main>
        <section>
          <Header/>
          <form onSubmit={this.buscarRepositorios}>
            <div>
              <input type="text" value={this.state.nome} onChange={this.atualizaEstadoNome} placeholder="Usuario do GitHub"/>
              <button type="submit" onClick={this.buscarRepo}> Buscar </button>
            </div>
          </form>
        </section>
        <section>
          <table>
            <thead>
              <tr>
                <th> ID </th>
                <th> Nome Repositorio </th>
                <th> Descrição </th>
                <th> Data de Criação </th>
                <th> Tamanho </th>
              </tr>
            </thead>
            <tbody>
              {  this.state.listaRepositorios.map( (repositorio) => {           
                  return(
                    <tr key={repositorio.id}>
                      
                      <td className="repoItemContainer">{repositorio.id}</td>
                      <td className="repoItemContainer">{repositorio.name}</td>
                      <td className="repoItemContainer">{repositorio.description}</td>
                      <td className="repoItemContainer">{repositorio.created_at}</td>
                      <td className="repoItemContainer">{repositorio.size}</td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>        
        </section>
      </main>
    </div>
    )
  }
}

export default GitHub;