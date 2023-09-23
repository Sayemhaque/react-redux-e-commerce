import { SignIn } from '@clerk/clerk-react';
import Button from '../../components/Button';
import { Link } from 'react-router-dom';

const Signin = () => {
    return (
        <div className='flex justify-center flex-col items-center h-[90vh] bg-gray-200'>
            <SignIn />
            <Link to="/">
                <Button
                    title={"Home"}
                    style={'bg-purple-500 px-12 py-3 mt-12 rounded-lg'}
                />
            </Link>
        </div>
    );
};

export default Signin;