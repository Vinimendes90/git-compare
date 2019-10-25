import React, {Component} from 'react';

import api from '../../services/api';

import logo from '../../images/logo.png';

import { Container, Form } from './styles';

import CompareList from '../../components/CompareList';

export default class Home extends Component {

    state = {
        repositoryInput: "",
        repositories:[],
    };

    handleAddRepository = async (e) => {
         e.preventDefault();

         try {
            const response = await api.get(`/repos/${this.state.repositoryInput}`);

           this.setState({
               repositoryInput: '',
               repositories: [... this.state.repositories, response.data],
           })
         } catch (err) {

         }
    };


  render() {
      return (
    <Container>
        <img src= {logo} alt= "logo" />

        <Form onSubmit = {this.handleAddRepository}>
            <input type="text"
            placeholder="usuário/repositório"
            value={this.state.repositoryInput}
             /* */   onChange={e => this.setState({repositoryInput: e.target.value}) }/* é um evento que é disparado sempre q a uma alteração no input*/
                />
            <button type="submit">OK</button>
        </Form>

      <CompareList repositories={this.state.repositories} />
    </Container>
      );
  }
}


