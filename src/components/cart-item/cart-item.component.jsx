import { CartItemContainer, ItemDetails, ItemDetailsName, ItemDetailsPrice } from './cart-item.styles';

const CartItem = ({cartItem}) => {
    const { name, quantity, price, imageUrl } = cartItem;

    return (
        <CartItemContainer>
            <img src={imageUrl} alt={name} />
            <ItemDetails>
                <ItemDetailsName>{name}</ItemDetailsName>
                <ItemDetailsPrice>{quantity} ea x ${price}</ItemDetailsPrice>
            </ItemDetails>
        </CartItemContainer>
    )
}

export default CartItem;