import React from 'react';

const Cadastro = props => {

  return (
    <div id='cadastro' className='cadastro'>
      <div className='letra'>
        <h2 className='ca'> Cadastro </h2>
      </div>
      <div className='rows'>
        <div className='cols'>
          <input className='nome' type='text' id='nome' placeholder='Nome*' />
          <input className='sobrenome' type='text' id='sobrenome' placeholder='Sobrenome*' />
        </div><br />
        <div className='cols'>
          <input className='cpf' type='number' id='cpf' placeholder='CPF*' />
          <input className='email' type='text' id='email' placeholder='Email*' />
          <input className='tel' type='number' id='name' placeholder='Telefone*' />
        </div><br />
        <div className='cols'>
          <input className='empr' type='text' id='empr' placeholder='Nome da Empresa*' />
          <input className='cnpj' type='number' id='cnpj' placeholder='CNPJ*' />
        </div><br />
        <div className='letra'><h2 className='ca'>Endereço</h2></div>
        <div className='cols'>
          <input className='cep' type='number' id='cep' placeholder='CEP*' />
          <input className='ender' type='text' id='ender' placeholder='Endereço*' />
          <input className='num' type='number' id='num' placeholder='Número*' />
        </div><br />
        <div className='cols'>
          <input className='com' type='number' id='com' placeholder='Complemento*' />
          <select className='estado' name="estados-brasil" placeholder='Estado*'>
            <option value="Estado">Estado*</option>
            <option value="AC">Acre</option>
            <option value="AL">Alagoas</option>
            <option value="AP">Amapá</option>
            <option value="AM">Amazonas</option>
            <option value="BA">Bahia</option>
            <option value="CE">Ceará</option>
            <option value="DF">Distrito Federal</option>
            <option value="ES">Espírito Santo</option>
            <option value="GO">Goiás</option>
            <option value="MA">Maranhão</option>
            <option value="MT">Mato Grosso</option>
            <option value="MS">Mato Grosso do Sul</option>
            <option value="MG">Minas Gerais</option>
            <option value="PA">Pará</option>
            <option value="PB">Paraíba</option>
            <option value="PR">Paraná</option>
            <option value="PE">Pernambuco</option>
            <option value="PI">Piauí</option>
            <option value="RJ">Rio de Janeiro</option>
            <option value="RN">Rio Grande do Norte</option>
            <option value="RS">Rio Grande do Sul</option>
            <option value="RO">Rondônia</option>
            <option value="RR">Roraima</option>
            <option value="SC">Santa Catarina</option>
            <option value="SP">São Paulo</option>
            <option value="SE">Sergipe</option>
            <option value="TO">Tocantins</option>
          </select>
          <input className='cidade' type='text' id='cidade' placeholder='Cidade*' />
        </div><br />
        <div className='lei'><h2 className='ca'>Agora escolha sua senha</h2></div>
        <div className='letra'></div><br/>
        
        <div className='cols'>
          <input className='pas' type='password' id='senha' placeholder='Senha*' /><br />
        </div>
        <div className='cols'>
        <input className='pas' type='password' id='senha' placeholder='Confirmar Senha*' />
        </div><br/>
        <div className='cols'>
        <button className='pa1' type='submit' >Cadastrar</button>
        </div>
      </div >
    </div>
  )
}

export default Cadastro