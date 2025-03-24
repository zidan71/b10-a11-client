import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../../../firebase.cofig';
import { FaGoogle } from "react-icons/fa";


const Register = () => {

    const {register,updateUser} = useContext(AuthContext)
    const navigate = useNavigate()

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
            updateUser({displayName : name,photoURL:photo})
            .then(()=> {
                navigate('/')
            })
            .catch(err => {
                toast.error('error happend')
            })

        })
        .catch(err => {
            console.log('erro',err.message)
        })


    }

    const google =new GoogleAuthProvider()

    const handleGoogle = () => {
        signInWithPopup(auth,google)
        .then(result => {
            toast.success('Successfully Registered')
            navigate('/')
        })
        .catch(()=> {
            toast.error('Credentials not Okay!')
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

                <div className='text-center my-2'>
                    <p>Or</p>
                    <button  onClick={handleGoogle} className="btn w-full mt-1.5"> <FaGoogle /> Google</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Register;