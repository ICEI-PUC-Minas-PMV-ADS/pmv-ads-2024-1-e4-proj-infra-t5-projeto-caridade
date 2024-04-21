import { Link } from "react-router-dom"
import Footer from "../../components/footer"
import Header from "../../components/header"

function Home() {

  return (
    <div>
      <Header />
      <div style={{ display: 'flex', justifyContent: 'left', gap: '40px', padding: '60px' }}>
        <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', gap: '10px'  }}>
          <h1>Encontre projetos que te engajam!</h1>
          <span>
            Buscador de projetos de caridade que tem<br/> como objetivo auxiliar na 
            divulgação e busca de informações <br/>relativas a instituições filantrópicas em âmbito global.
          </span>
          <Link to="/register"><button>Criar conta</button></Link>
        </div>
        <div>
          <img src="" alt="teste" />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home
