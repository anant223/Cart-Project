import React from "react";
import CartItem from "./Cartitem";

const Cart = (props) =>{
// const  Cart extends React.Component{
    // constructor(){
    //     super();
    //     this.state = {
    //         products: [
    //             {
    //                 price: 12000,
    //                 title: 'Mobile',
    //                 qty: 1,
    //                 img:'',
    //                 id:3
    //             },
    //             {
    //                 price: 12500,
    //                 title: 'Watch',
    //                 qty: 1,
    //                 img:'',
    //                 id:1
    //             },
    //             {
    //                 price: 45600,
    //                 title: 'Laptop',
    //                 qty: 1,
    //                 img:'',
    //                 id:2
    //             }
    //         ]
            
    //     }
    //     this.handelincreaseProductQty = (product)=>{
    //         // console.log('this product ', product);
    //         const {products} = this.state;
    //         const index =  products.indexOf(product)
    //         products[index].qty += 1
    
            
    //         this.setState({
    //             products: products
    //         })
    //     }

    //     this.handeldecreasProductQty = (product)=>{

    //         // console.log('plz decrease qty', product);
            
    //         const {products} = this.state;
    //         const index = products.indexOf(product);
    //         if (products[index].qty == 1){
    //             return;
    //         }
    //         products[index].qty -= 1
            

    //         this.setState({
    //             products:products
    //         })
    //     }

    //     this.handelDeleteProduct = (id)=>{
    //         console.log("plz delet this product", id);
    //         const {products} = this.state;
    //         const items = products.filter((item) => item.id !== id)
            
    //         this.setState({
    //             products: items
    //         })
    //     }
    // }
    // render() {
    //     // const arr = [1,2,3,4,5]
        // const {products} = this.state;
    const { products } = props;
    return (
        <div className="cart">
            {products.map((product) => {
              return (
                <CartItem
                    product={product} 
                    key={product.id}
                    onIncreaseQty = {props.onIncreaseQty}
                    onDecreaseQty = {props.onDecreaseQty}
                    onDeleteProduct = {props.onDeleteProduct}
                />
              )
            })}
            {/* // passing item and qty price via props  */}
            {/* <CartItem qty={1} price={1500} title={'Watch'} img={''}/> */}
        </div>
    )
}




export default Cart;

