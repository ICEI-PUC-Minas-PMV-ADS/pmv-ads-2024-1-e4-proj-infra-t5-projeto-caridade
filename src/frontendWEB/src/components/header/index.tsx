import { BsSearch } from "react-icons/bs"
import { Link } from "react-router-dom"

function Header() {

    return (
      <div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px' }}>
          <Link to="/"><h1>Charity Finder</h1></Link>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Link to='/search'><BsSearch /></Link>
            <Link to='/login'><button>Login</button></Link>
          </div>
        </div>
        <hr
          style={{
            color: "#E1E1E2",
          }}
        />
      </div>
    )
  }
  
  export default Header
  