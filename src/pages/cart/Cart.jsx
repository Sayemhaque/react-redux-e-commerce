import { useSelector } from 'react-redux';



import { Toaster } from 'react-hot-toast';

import CartCard from './CartCard';
function CartPage() {
  const { cart,totalPrice } = useSelector((state) => state.cartSlice)


  let totalQuantity = 0;

  // Loop through the cart and sum up the quantities
  for (const item of cart) {
    totalQuantity += item.quantity;
  }

  return (
    <section className='md:py-12 min-h-screen bg-slate-300'>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      {cart.length < 1 ? <p className='text-3xl font-bold text-center'>
        Cart is empty
      </p> :
        <div className='grid grid-cols-1  md:grid-cols-3 gap-5  py-5 md:px-3 px-3'>
          <div className='col-span-2  '>
            {cart.map(product =>
              <CartCard key={product.id} product={product} />
            )}
          </div>
          <div className='bg-purple-600 bg-opacity-80 col-span-1 text-white h-40 rounded-md p-3'>
            <p className='text-md font-bold'>Total Products: 
            <span className='text-xl'>{totalQuantity}</span></p>
            <p className='text-md font-bold'>Total Price: 
             <span className='text-xl'>${totalPrice}</span></p>
          </div>
        </div>
      }
    </section>
  );
}

export default CartPage;
