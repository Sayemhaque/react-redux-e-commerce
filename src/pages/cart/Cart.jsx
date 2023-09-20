import  { useSelector } from 'react-redux';



import { Toaster } from 'react-hot-toast';

import CartCard from './CartCard';
function CartPage() {
  const { cart} = useSelector((state) => state.cartSlice)

  
  let totalQuantity = 0;

  // Loop through the cart and sum up the quantities
  for (const item of cart) {
    totalQuantity += item.quantity;
  }

  return (
    <section className='bg-black min-h-screen'>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      {cart.length < 1 ? <p className='text-3xl font-bold text-center mt-12'>Cart is empty</p> :
        
      <div className='grid grid-cols-1 md:grid-cols-3 px-6 py-5'>
       <div className='col-span-2 py-4 px-3 md:px-12 '>
       {cart.map(product => 
          <CartCard key={product.id} product={product} />
        )}
       </div>
       <div className='bg-purple-600 col-span-1 text-white h-80'>
           <p>{totalQuantity}</p>
       </div>
      </div>
      }
    </section>
  );
}

export default CartPage;
