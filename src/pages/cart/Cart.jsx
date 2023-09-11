import { useDispatch, useSelector } from 'react-redux';
import Button from "../../components/Button"
import { FaTrash } from "react-icons/fa"
import { clearCart, removeProductFromCart } from '../../redux/feature/cartSlice';
import ProductQuantity from '../../components/ProductQuantity';
function CartPage() {
  const dispatch = useDispatch()
  const { cart, totalPrice } = useSelector((state) => state.cartSlice)
  
  const handleRemoveFromCart = (id) => {
    dispatch(removeProductFromCart(id))
  }
  return (
    <>
      {cart.length < 1 ? <p className='text-3xl font-bold text-center mt-12'>Cart is empty</p> :
        <div className="flex flex-col md:flex-row">
          <div className="md:w-3/4 p-4 mx-auto">
            <h1 className="text-2xl font-semibold mb-4">Shopping Cart</h1>
            <table className="min-w-full table-auto">
              <thead>
                <tr>
                  <th className="text-left px-4 py-2 border">Image</th>
                  <th className="text-left px-4 py-2 border">Product</th>
                  <th className="text-left px-4 py-2 border">Quantity</th>
                  <th className="text-left px-4 py-2 border">Price</th>
                  <th className="text-left px-4 py-2 border">Action</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => (
                  <tr key={item.id}>
                    <td className="border px-4 py-2 h-8 ">
                      <img className='h-12 w-12' src={item.image} alt="" />
                    </td>
                    <td className="border px-4 py-2">{item.title}</td>
                    <td className="border px-4 py-2">
                      <ProductQuantity />
                    </td>
                    <td className="border px-4 py-2">${item.price}</td>
                    <td className="border px-4 py-2 cursor-pointer" onClick={() => handleRemoveFromCart(item.id)}><FaTrash /></td>
                  </tr>
                ))}
              </tbody>
            </table>
            <Button
              onClick={() => dispatch(clearCart())}
              title={"Clear cart"}
              style={"mt-5"}
            />
          </div>

          <div className="md:w-1/4 p-4 text-white">
            <div className="bg-purple-600 bg-opacity-80 p-4 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Cart Summary</h2>
              <div className="mb-2">
                Total Products: <span className="font-semibold">{cart.length}</span>
              </div>
              <div>
                Total Price: <span className="font-semibold">${totalPrice}</span>
              </div>
            </div>
            <Button
              title={"Payment to Proceed"}
              style={"mt-5"}
            />
          </div>
        </div>
      }
    </>
  );
}

export default CartPage;