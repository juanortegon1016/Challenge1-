//Challenge FirstApp 1°
import PropTypes from 'prop-types';
import {useState} from "react"
 const FirstApp = ({title, sum}) =>{
     return(
     <>
         <h1>{ title }</h1>
         <span> { sum }</span>
     </>
     )
 }

 FirstApp.propTypes = {
     title: PropTypes.string.isRequired,
     sum: PropTypes.number.isRequired
 }

 FirstApp.defaultProps = {
     title: "No hay titulo",
     sum: 300
 }
const FirstApp = ({value}) => {

const [counter, setCounter] = useState (value)
    const handleAdd = () => {
        setCounter (counter + 1)
    }

    return (
        <>
        <h1> Counter </h1>
        <span> {counter} </span>
        <button onClick={ () => handleAdd()}> +1</button>
        </>
    )
}



export default FirstApp