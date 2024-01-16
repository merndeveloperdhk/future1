
import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider";
import loginImg from "../../../login/login.svg";
import { Link } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";

const Registration = () => {
  const {createUser} = useContext(AuthContext);
  const [error, setError] = useState(' ');
  const[success, setSuccess] = useState(' ');

  const handleRegistration = event =>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoUrl = form.photoUrl.value;
    const email = form.email.value;
    const password = form.password.value;
    const loginUser = {name, photoUrl, email, password}
    console.log(loginUser);
    setError( ' ');
    setSuccess(' ');

         // password validation
 if(password.length < 6){
  setError('must min 6 character')
  return;
 } else if(password.search(/^(?=.*[A-Z]).*$/) ) {
  setError("Your password must contain at least one UpperCase.");
  return;
}else if (password.search(/^(?=.*[a-z]).*$/)){
  setError('At least one Lower Case');
  return;
}
else if(password.search(/^(?=.*[0-9]).*$/)){
  setError('At least one Number');
  return;
}
else if(password.search(/^(?=.*[~`!@#$%^&*()--+={}[\]|\\:;"'<>,.?/_₹]).*$/)){
  setError('At least One special character');
  return;
}
 
 else{
  setSuccess('Successfully created')
 }

    createUser(email, password)
    .then(result =>{
      console.log(result.user);
      form.reset();
    })
    .catch(error => {
      console.log(error.message);
    })
}
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
  <div className="text-center lg:text-left md:w-1/2 md:space-y-6">
    <h1 className="md:text-4xl text-base font-bold text-center">Register Now</h1>
            <img src={loginImg} alt="" className="w-full" />
          </div>
    <div className="card flex-shrink-0  max-w-sm shadow-2xl bg-base-100 w-full md:w-1/2">
      <form onSubmit={handleRegistration} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Your name</span>
          </label>
          <input type="text"  name="name" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input type="text"  name="photoUrl" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-4">
          <button className="btn btn-primary">Registration</button>
        </div>
        {
          error && <span className="text-red-600 text-center">{error}</span>
        }
        {
          success && <span className="text-green-600 text-center">{success}</span>
        }
      </form>
      <div className="text-center mb-2">Already have an account? Please <Link to='/login' className="text-red-600 font-bold">login</Link></div>
      <div className="divider">OR</div>
      <SocialLogin></SocialLogin>
    </div>
  </div>
</div>
        </div>
    );
};

export default Registration;