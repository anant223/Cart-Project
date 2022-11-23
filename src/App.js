import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";


class App extends React.Component {
  
  constructor () {
    super();
    this.state = {
      products: [
        {
          price: 12000,
          title: 'Mobile',
          qty: 1,
          img:'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=367&q=80',
          id:3
        },
        {
          price: 12500,
          title: 'Watch',
          qty: 1,
          img:'https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80',
          id:1
        },
        {
          price: 45600,
          title: 'Laptop',
          qty: 1,
          img:'https://images.unsplash.com/photo-1580522154071-c6ca47a859ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
          id:2
        }
      ]
    }


  }
  handelIncreaseProductQty = (product)=>{
    // console.log('this product ', product);
    const {products} = this.state;
    const index =  products.indexOf(product)
    
    products[index].qty += 1

        
      this.setState({
          products:products
      })
    }

    handelDecreasProductQty = (product)=>{

      // console.log('plz decrease qty', product);
      const {products} = this.state;
      const index = products.indexOf(product);
      if (products[index].qty == 1){
          return;
      }
      products[index].qty -= 1
      

      this.setState({
          products : products
      })
    }

    handelDeleteProduct = (id)=>{
      console.log("plz delet this product", id);
      const {products} = this.state;
      const items = products.filter((item) => item.id !== id)
      
      this.setState({
          products: items
      })
        
    }

    getCartCount = () =>{
      const {products} = this.state;

      let count = 0;

      products.forEach((product) =>{
        count += product.qty
      })

      return count;
    }

    totalAmount = () =>{
      const {products} = this.state
      let cartTotal = 0;
      products.map((product) =>{
        cartTotal = cartTotal + product.qty * product.price
      })
      return cartTotal;
    }
 
  render()  {
    const {products} = this.state;
    return (
      <div className="App">
        <Navbar count = {this.getCartCount()}/>
        <Cart
           products={products}
          onIncreaseQty = {this.handelIncreaseProductQty}
          onDecreaseQty = {this.handelDecreasProductQty}
          onDeleteProduct = {this.handelDeleteProduct}
        />
        <div style={{padding:10, fontSize:20}}>Total: {this.totalAmount()}</div>
      </div>
      
    );
  } 
}

export default App;
