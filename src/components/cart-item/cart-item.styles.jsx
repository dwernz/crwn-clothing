import styled from 'styled-components';

export const CartItemContainer = styled.div`
    width: 100%;
    display: flex;
    height: 80px;
    margin-bottom: 15px;

    img {
        width: 30%;
    }
`;

export const ItemDetails = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 10px 20px;
`;

export const ItemDetailsName = styled.span`
    font-size: 16px;
`;

export const ItemDetailsPrice = styled.span`

`;

//         .name {
//             
//         }

//         .quantity-mod {
//             font-size: 18px;
            
//             .subtract-quantity {
//                 margin-left: 5px;
//                 cursor: pointer;
//             }

//             .subtract-quantity:hover {
//                 text-decoration: underline;
//             }

//             .add-quantity {
//                 margin-left: 10px;
//                 cursor: pointer;
//             }

//             .add-quantity:hover {
//                 text-decoration: underline;
//             }
//         }
//     }

//     .delete-item:hover {
//         cursor: pointer;
//         text-decoration: underline;
//     }
// }