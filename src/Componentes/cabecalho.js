import React from 'react'

const Cabecalho = props => {
    return (
        <nav className='navbar navbar-fixed-top'>
            <div className='container'>
                <div className='navbar-header'>
                    <a className='navbar-brand' href='#home'></a>
                </div>
                <div className='collapse navbar-collapse' id='myNavbar'>
                    <ul className='nav navbar-nav navbar-right'>
                        <li><a href='#pricing'>Serviços</a></li>
                        <li><a href='#cadastro.js'>Cadastro</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Cabecalho