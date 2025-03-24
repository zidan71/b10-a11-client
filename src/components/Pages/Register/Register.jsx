import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';

const Register = () => {

    const {register} = useContext(AuthContext)

    const handleClick = e => {
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        const photo = e.target.photo.value;
        const password = e.target.password.value;

        const registration = {name,email,photo,password}

        console.log(registration)
        register(email,password)
        .then(result => {
            console.log(result.user)
        })
        .catch(err => {
            console.log('erro',err.message)
        })


    }

    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <form onSubmit={handleClick} className="fieldset">
                <label className="fieldset-label">Name</label>
                <input type="text" name='name' className="input" placeholder="Name" />

                <label className="fieldset-label">Photo</label>
                <input type="text" name='photo' className="input" placeholder="photo Url" />

                <label className="fieldset-label">Email</label>
                <input type="email" name='email' className="input" placeholder="Email" />

                <label className="fieldset-label">Password</label>
                <input type="password" name='password' className="input" placeholder="Password" />
                
                <button className="btn btn-neutral mt-4">Register</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Register;