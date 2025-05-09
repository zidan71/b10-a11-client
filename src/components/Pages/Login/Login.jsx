import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import { toast } from 'react-toastify';

const Login = () => {


    const {login} =  useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()

    const handleClick = e => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;

        (email,password)
        login(email,password)
        .then(result => {
            (result.user)
            toast.success('Login Successful')
            navigate(location?.state ? location.state : '/' )
        })
        .catch(err => {
            ("ERRR",err.message)
            toast.error('Wrong Credentials')
        })
    }



    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <form onSubmit={handleClick} className="fieldset">
                <label className="fieldset-label">Email</label>
                <input name='email' type="email" className="input" placeholder="Email" />
                <label className="fieldset-label">Password</label>
                <input name='password' type="password" className="input" placeholder="Password" />
                <div><a className="link link-hover">Forgot password?</a></div>
                <p>New to this site ? please <Link className='text-red-500' to={'/register'}>Register</Link></p>
                <button className="btn btn-neutral mt-4">Login</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Login;