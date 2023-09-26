import { useContext } from 'react';

import { CartContext } from '../../context/cart.context';

import './cart-item.styles.scss';

const CartItem = ({cartItem}) => {
    const { name, quantity, price, imageUrl } = cartItem;

    return (
        <div className='cart-item-container'>
            <img src={imageUrl} />
            <div className='item-details'>
                <span className='name'>{name}</span>
                <span className='price'>{quantity} ea x ${price}</span>
                {/* <div className='quantity-mod'>
                    <span className='subtract-quantity' title='subtract'>-</span>
                    <span className='add-quantity' title='add'>+</span>
                </div> */}
            </div>
        </div>
    )
}

export default CartItem;