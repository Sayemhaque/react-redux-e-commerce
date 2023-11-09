import { useState } from 'react';
import { useSignupMutation } from '../redux/feature/api/baseApi';
import Button from './Button';
import { Link, useNavigate } from 'react-router-dom';
import Label from './Label';
import Input from './Input';

const SignUp = () => {
    const navigate = useNavigate()
    const [errors, setErrors] = useState("")
    const [signup, { isLoading }] = useSignupMutation()
    const handleSignUp = async (e) => {
        try {
            e.preventDefault()
            const form = e.target;
            const username = form.username.value;
            const email = form.email.value;
            const password = form.password.value;
            const userdata = { username, email, password }
            const payload = await signup(userdata).unwrap()
            if (payload.status) {
                navigate("/signin")
            }
        } catch (error) {
            console.log(error)
            setErrors(error.data.error)
        }
    }
    return (
        <div>
            <div className="bg-white p-12 rounded-lg overflow-hidden shadow-md  w-full md:w-[500px]">
                <h2 className="text-2xl font-bold text-center  text-gray-800 mb-6">Sign up</h2>
                <form onSubmit={handleSignUp}>
                    <div className="mb-4">
                        <Label
                            styles="block text-gray-700 text-sm font-bold mb-2" htmlFor="email"
                            text='Username'
                        />
                        <Input
                            type="text"
                            name="username"
                            placeholder="Mdsayem"
                        />
                    </div>
                    <div className="mb-4">
                        <Label
                            styles="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="email"
                            text='Email'
                        />
                        <Input
                            type="email"
                            name="email"
                            placeholder="example@gmail.com"
                        />
                    </div>
                    <div className="mb-4">
                        <Label
                            styles="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="email"
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
                        title={isLoading ? "Loading..." : "Sign up"}
                        style={'bg-purple-700 w-full py-3 rounded-lg'}
                        type="submit"
                    />
                </form>
                <p className="text-center py-2">Already have an account?
                    <Link to='/signin' className="font-bold text-purple-500 ml-2">
                        Log in
                    </Link>
                </p>
            </div>
        </div>

    );
};

export default SignUp;