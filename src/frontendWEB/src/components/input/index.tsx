import { BsSearch } from "react-icons/bs"
import { Link } from "react-router-dom"

function Input({label, inputType}) {


    return (
        <div style={}>
            <span>
               {
                label
               } 
            </span>
            <input type={inputType} />

        </div>

    )
}

export default Input