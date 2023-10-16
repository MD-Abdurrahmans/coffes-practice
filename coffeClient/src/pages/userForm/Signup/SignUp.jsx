

import { Link } from 'react-router-dom';
import UseContext from '../../../firebase/useContext';
const SignUp = () => {
    const {user,signUp,updateName} = UseContext();

console.log(user.displayName  )

    // console.log(user)
    const handleLogin= (e)=>{
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;



 console.log(user,updateName)
 signUp(email,password)
 .then((result)=>{    
  updateName(name)
  .then((result)=>{console.log(result)})
  .catch((error)=>{console.log(error)})
const users ={creationAt: result?.user?.metadata?.creationTime,email:email,
name:user?.displayName } ;


  fetch('https://server-rjhax89va-rajs-projects-d77d3858.vercel.app/users',{

  method:'POST',

  headers:{
    'content-type':'application/json',
  },
  body:JSON.stringify(users)
  

  })
  .then(res => res.json())
  .then(data=>{
     if(data.insertedId){
        alert('CREATED DATA');
     }
  })




})
 .catch((error)=>{console.error(error)})
  
    
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">

    <img src="../../../../public/loginPng.png" alt="" />    
  
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin}  className="card-body">
      <h1 className="text-5xl font-bold">SignUp now!</h1>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
          <label className="label">
            <p href="#" className="label-text-alt link link-hover">already have an Account? <Link className="text-blue-700" to='/signin'>SignIn</Link> </p>
          </label>
        </div>

        <div className="form-control mt-6">
          <input type='submit' value='SignUp'  className="btn btn-primary"/>
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default SignUp;