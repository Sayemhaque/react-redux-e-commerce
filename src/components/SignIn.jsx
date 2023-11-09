import { Link, useNavigate } from "react-router-dom";
import Button from "./Button";
import { useSigninMutation } from "../redux/feature/api/baseApi";
import { useState } from "react";
import Input from "./Input";
import Label from "./Label";


const SignIn = () => {
  const navigate = useNavigate()
  const [errors, setErrors] = useState("")
  const [signin, { isLoading }] = useSigninMutation()
  const handleSignIn = async (e) => {
    try {
      e.preventDefault()
      const form = e.target;
      const email = form.email.value;
      const password = form.password.value;
      const userdata = { email, password }
      await signin(userdata).unwrap()
      navigate("/")
    } catch (error) {
      setErrors(error.data.error)
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
          <p className="text-red-500">{errors}</p>
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