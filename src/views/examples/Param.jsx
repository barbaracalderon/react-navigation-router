import React from 'react'

import { useParams } from 'react-router-dom'

const Param = props => {
    const { id } = useParams()

    return (
    <div className="Param">
        <h1>Componente Param </h1>
        <h2>Valor: {id} </h2>
        <p>O parâmetro acima ({id}) é passado no endereço, de modo que a URL é criada a partir desse valor de parâmetro. Por esta razão, Param #01 e Param #02 apontam para endereços diferentes - <strong>apesar de existir apenas um único arquivo Param.jsx</strong> criado.</p>
    </div>
    )
}

export default Param