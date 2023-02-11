import React, { useState } from 'react'
import PropTypes from 'prop-types'

const FirstApp = ({valor}) => {
  
    const [counter, setCounter] = useState(valor)


    const handleAdd = () => {
        console.log('Llama handleAdd')
        setCounter(counter + 1)
    }

    const handleSubstract = () => {
        console.log('Llama handleSubstract')
        setCounter(counter - 1)
    }

    const handleReset = () => {
        console.log('Llama handleReset')
        setCounter(valor)
    }

  
    return (
        <>
        <h1>
            Prueba
        </h1>

            <button onClick = {()=> handleAdd()} > +1 </button>
            <button onClick = {()=> handleSubstract()} > -1 </button>
            <button onClick = {()=> handleReset()}>{valor} </button>
        <span> { counter } </span>
        </>
  )
}

FirstApp.proptypes = {
    valor: PropTypes.number.isRequired
}
FirstApp.defaultProps = {
    valor: 1
}
export default FirstApp