import { Link, useNavigate } from "react-router-dom";
import Button from "./Button";
import { useState } from "react";
import Input from "./Input";
import Label from "./Label";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setError, setUser } from "../redux/feature/api/authSlice";


const SignIn = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {error,isLoading} = useSelector((state) => state.authSlice)
  const handleSignIn = async (e) => {
    try {
      e.preventDefault()
      const form = e.target;
      const email = form.email.value;
      const password = form.password.value;
      const userdata = { email, password }
      const response = await axios.post("https://shopzenith.vercel.app/api/login",userdata)
      console.log(response)
      dispatch(setUser(response.data.token))
      navigate("/")
    } catch (error) {
      dispatch(setError(error.response.data.error))
    }
  }
  return (
    <div>
      <div className="bg-white p-12 rounded-lg overflow-hidden shadow-md w-full md:w-[500px]">
        <h2 className="text-2xl font-bold text-center  text-gray-800 mb-6">Log in</h2>
        <form onSubmit={handleSignIn}>
          <div className="mb-4">
            <Label
              styles="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
              text="Email"
            />
            <Input
              name="email"
              placeholder="example@gmail.com"
            />
          </div>
          <div className="mb-4">
            <Label
              styles="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
              text="Password"
            />
            <Input
              type="password"
              name="password"
              placeholder="*********"
            />
          </div>
          <p className="text-red-500">{error}</p>
          <Button
            title={isLoading ? "Loading..." : "Log in"}
            style={'bg-purple-700 w-full py-3 rounded-lg'}
            type="submit"
          />
        </form>
        <p className="text-center py-2">Do not have an account?
          <Link to='/signup' className="font-bold text-purple-500 ml-2">Sign up</Link>
        </p>
      </div>
    </div>
  )

}

export default SignIn;