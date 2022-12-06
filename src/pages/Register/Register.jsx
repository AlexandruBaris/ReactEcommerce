import "./Register.scss"
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className="register">
      <div className="card">
        <div className="reg">
          <h1>Register</h1>
            <form>
              <input type="text" placeholder="Email"/>
              <input type="text" placeholder="FirstName"/>
              <input type="text" placeholder="LastName"/>
              <input type="text" placeholder="Password"/>
              <button>Register</button>
            </form>
          </div>
        
        <div
        className="login">
            <span>Do you have an account?</span>
            <Link className ='link' to="/login">
              <button>
                Login
              </button>
            </Link>
        </div>
      </div>
    </div>
  )
}

export default Register