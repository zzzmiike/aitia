import React, { Component } from 'react';

import Aitia from './aitia';
import Cadastro from './Componentes/cadastro';
import Cabecalho from './Componentes/cabecalho';
import Rodape from './Componentes/rodape';



class App extends Component {
	render() {
		return (
			<div className="App">
				<Cabecalho />

				<Aitia />
				
				<Cadastro />

				<Rodape />
			</div>

		);
	}
}


export default App;
