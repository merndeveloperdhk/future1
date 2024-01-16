import { useContext, useState } from "react";
import loginImg from "../../../login/login.svg";
import { AuthContext } from "../../AuthProvider";
import { Link,  useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";
import axios from "axios";

const Login = () => {
  const location = useLocation();
  console.log(location);
  const navigate = useNavigate();
  const[success, setSuccess] = useState(' ');
  const {login}=  useContext(AuthContext)
    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const loginUser = {email, password}
        console.log(loginUser);
        setSuccess(' ')
        login(email, password)
        .then(result => {
          console.log(result.user);

          // const user = {email}
          
          // get access token
          axios.post('http://localhost:5000/jwt', {email}, {withCredentials : true})
          .then(res => {
            console.log(res.data);
            if(res.data.success){
                navigate(location?.state?location?.state: "/")
            }
          })
         
        })
        .catch(error=>{
          console.log(error.message);
        })
    }
  return (
    <div>
     
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse  ">
          <div className="text-center lg:text-left md:w-1/2 md:space-y-8">
          <h1 className="md:text-4xl text-base font-bold text-center">Login now!</h1>
            <img src={loginImg} alt="" className="w-full" />
          </div>
          <div className="card flex-shrink-0 w-full md:w-1/2 max-w-sm shadow-2xl bg-base-100 ">
            <form  onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                
                <input type="submit" value="Login" className="btn btn-primary"/>
              </div>
              {
                success && <span>{success}</span>
              }
            </form>
            
          <p className="text-center mb-2">new to this site? Please <Link to='/registration' className="text-red-600 font-bold">Register</Link></p>
          <div className="divider">OR</div>
          <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
