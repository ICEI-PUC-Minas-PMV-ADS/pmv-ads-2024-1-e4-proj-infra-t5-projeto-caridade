import { Link } from "react-router-dom"
import Header from "../../components/header"
import Footer from "../../components/footer"
import Input from "../../components/input"

function Register() {
  return (
    <div>
      <Header />
      <div style={{ display: 'flex', justifyContent: 'left', gap: '40px', padding: '60px' }}>
        <div style={{ display: 'flex', justifyContent: 'right', flexDirection: 'column', gap: '10px' }}>
          <h1>Cadastrar</h1>
        </div>
        <div>
          <img src="" alt="teste" />
        </div>
        
      </div>

      <form>
        <Input label={"Nome"} inputType={"text"} />
        <Input label={"Sobrenome"} inputType={"text"} />
        <Input label={"Email"} inputType={"text"} />
        <Input label={"Senha"} inputType={"password"} />     
      </form>

      <Link to="/register"><button>Criar conta</button></Link>

      <Footer />
    </div>
  )
}

export default Register


