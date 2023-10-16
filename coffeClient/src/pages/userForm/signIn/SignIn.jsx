import { Link, Navigate, useNavigate, useNavigation } from "react-router-dom";
import UseContext from "../../../firebase/useContext";


const SignIn = () => {

    const {user,login,googleLogin,userUid} = UseContext();

  

    const handleSignin= (e)=>{
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
       
        const usersSignin = {email,password};
  
 console.log(usersSignin)
 
 login(email,password)
 .then((result)=>{
  
   if(result){
      const UpdateUsers ={lastSignInAt: result?.user?.metadata?.lastSignInTime,email:email,uid:userUid,name:user?.displayName};

      console.log(UpdateUsers)
      
        fetch('https://server-rjhax89va-rajs-projects-d77d3858.vercel.app/users',{
      
        method:'PATCH',
      
        headers:{
          'content-type':'application/json',
        },
        body:JSON.stringify(UpdateUsers)
        
      
        })
        .then(res => res.json())
        .then(data=>{
          console.log(data)
           if(data.insertedId){
              alert('CREATED DATA');
           }
        })
      
   }
 

})
 .catch((error)=>{console.error(error)})
  
    
    }

// google 

const handleGoogleLogin =()=>{

      googleLogin()
      .then((result)=>{
      
        if(result){
              
               const UpdateUsers ={lastSignInAt: result?.user?.metadata?.lastSignInTime,email:result?.user?.email,uid:userUid };
      

        fetch('https://server-rjhax89va-rajs-projects-d77d3858.vercel.app/users',{

        method:'PATCH',
      
        headers:{
          'content-type':'application/json',
        },
        body:JSON.stringify(UpdateUsers)
        
      
        })
        .then(res => res.json())
        .then(data=>{
          console.log(data)
           if(data.insertedId){
              alert('CREATED DATA');
             
           }
        })
      
      

        }
    //  console.log('googel',userUid)

 
      

        
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
      <form onSubmit={handleSignin}  className="card-body">
      <h1 className="text-5xl font-bold">SignIn now!</h1>

     
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
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>

          <label className="label">
            <p href="#" className="label-text-alt link link-hover">New Here? <Link className="text-blue-700" to='/signup'>SignUp</Link> </p>
          </label>

        </div>

        <div className="form-control mt-6">
          <input type='submit' value='SignIn'  className="btn btn-primary"/>
        </div>
          <p className="text-center">  With</p>
         <button onClick={handleGoogleLogin}  className="btn bg-red-700 text-white"> Google</button>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default SignIn;