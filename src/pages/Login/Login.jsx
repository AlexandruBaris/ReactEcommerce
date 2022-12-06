import "./Login.scss"
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="login">
      <div className="card">
        <div className="log">
          <h1>Login</h1>
            <form>
              <input type="text" placeholder="email"/>
              <input type="text" placeholder="password"/>
              <button>Login</button>
            </form>
          </div>
        
        <div
        className="reg">
            <span>Don't you have an account?</span>
            <Link className ='link' to="/register">
              <button>
                Register
              </button>
            </Link>
        </div>
      </div>
    </div>
  )
}

export default Login