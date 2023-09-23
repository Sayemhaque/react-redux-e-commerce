import { SignIn } from '@clerk/clerk-react';

const Signin = () => {
    return (
        <div className='flex justify-center items-center h-[90vh] bg-gray-200'>
            <SignIn/>
        </div>
    );
};

export default Signin;