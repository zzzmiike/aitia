import React from 'react'

const aitia = props => {
  return (
    <div >
      < div id='services' className='container-fluid text-center' >
        <h2>SERVIÇOS</h2>
        <h4>O que nós oferecemos</h4>
        <br />
        <div className='row '>
          <div className='col-sm-4'>
            <span className='glyphicon glyphicon-off logo-small'></span>
            <h4>Poder</h4>
            <p></p>
          </div>
          <div className='col-sm-4'>
            <span className='glyphicon glyphicon-heart logo-small'></span>
            <h4>Confiança</h4>
            <p></p>
          </div>
          <div className='col-sm-4'>
            <span className='glyphicon glyphicon-lock logo-small'></span>
            <h4>Segurança</h4>
            <p></p>
          </div>
        </div>
        <br /><br />
        <div className='row '>
          <div className='col-sm-4'>
            <span className='glyphicon glyphicon-leaf logo-small'></span>
            <h4>Sustentabilidade</h4>
            <p></p>
          </div>
          <div className='col-sm-4'>
            <span className='glyphicon glyphicon-certificate logo-small'></span>
            <h4>Qualidade</h4>
            <p></p>
          </div>
          <div className='col-sm-4'>
            <span className='glyphicon glyphicon-wrench logo-small'></span>
            <h4 >Trabalho bem feito</h4>
            <p></p>
          </div>
        </div>
      </div >

      
      <div id='pricing' className='container-fluid'>
        <div className='text-center'>
          <h2>Preços</h2>
          <h4>Escolha o que ira precisar</h4>
        </div>
        <div className='row '>
          <div className='col-sm-4 col-xs-12'>
          </div>
          <div className='col-sm-4 col-xs-12'>
            <div className='panel panel-default text-center'>
              <div className='panel-body'>
                <p>Devs Full Stack</p><input type='number' placeholder='Devs' className='pr' /><br/><br/>
                <p>Designers UX</p><input type='number' className='pr' placeholder='Designers' /><br/><br/>
                <p>SM</p><input type='number' className='pr' placeholder='SM' /><br/><br/>
                <p>PO</p><input type='number' className='pr' placeholder='PO' /><br/><br/>
              </div>
              <div className='panel-footer'>
                <h4>per month</h4>
                <button className='btn btn-lg'>Sign Up</button>
              </div>
            </div>
          </div>
          <div className='col-sm-4 col-xs-12'>
          </div>
        </div>
      </div>

    </div>
  )
}
export default aitia