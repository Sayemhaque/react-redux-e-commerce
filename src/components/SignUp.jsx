
import Button from './Button';
import { Link, useNavigate } from 'react-router-dom';
import Label from './Label';
import Input from './Input';
import { useDispatch, useSelector } from 'react-redux';
import { setError, setLoading} from '../redux/feature/api/authSlice';
import axios from 'axios';

const SignUp = () => {
    // const navigate = useNavigate()
    const { error, isLoading } = useSelector((state) => state.authSlice)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleSignUp = async (e) => {
        try {
            e.preventDefault()
            const form = e.target;
            const username = form.username.value;
            const email = form.email.value;
            const password = form.password.value;
            const userdata = { username, email, password }
            dispatch(setLoading(true))
            const response = await axios.post("https://shopzenith.vercel.app/api/register", userdata)
            console.log(response)
            if(response.data.status){
                navigate("/signin")
            }
        } catch (error) {
            console.log()
            dispatch(setError(error.response.data.error))
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
                    <p className="text-red-500">{error}</p>
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