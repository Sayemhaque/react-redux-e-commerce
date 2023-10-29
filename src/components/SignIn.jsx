import { Link } from "react-router-dom";
import Button from "./Button";


const SignIn = () => {
  return (
    <div className="flex items-center justify-center bg-gray-100 ">
      <div className="bg-white p-8 rounded-lg overflow-hidden shadow-md w-[500px]">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Sign In</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:ring focus:border-blue-300"
              type="email"
              name="email"
              placeholder="example@gmail.com"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Password
            </label>
            <input
              className="border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:ring focus:border-blue-300"
              type="password"
              name="password"
              placeholder="*********"
            />
          </div>
          </form>
          <Button
          title={"Log in"}
          style={'bg-purple-700 w-full py-3 rounded-lg'}
          type="submit"
          />
          <p className="text-center py-2">Do not have an account?
             <Link to='/signup' className="font-bold text-purple-500 ml-2">Sign up</Link>
          </p>
          </div>
          </div>
  )

}

export default SignIn;