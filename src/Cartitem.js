import React from "react";

class CartItem extends React.Component{
    // constructor(){
        // super();
        // this.state = {
        //     price: 12000,
        //     title: 'Mobile',
        //     qty: 1,
        //     img:''
            
        // }
        // this.increseingQty = this.increseingQty.bind(this);
        // this.testing();
    // }
// however many time setSate won't give result what we have learend so far about setState for example
//     testing () {
//     const promise = new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve('done');
//       }, 5000);
//     })

//     promise.then(() => {
//       // setState acts like a synchronus call
//       this.setState({ qty: this.state.qty + 10, price: this.state.price * this.state.qty});

//       this.setState({ qty: this.state.qty + 10, price: this.state.price * this.state.qty});

//       this.setState({ qty: this.state.qty + 10, price: this.state.price * this.state.qty});

//       console.log('state', this.state);
//     });
//   }
    

    // increseingQtyNprice = () =>{
        // this.state.qty +=1
        // console.log('this.state', this.state)
        // setSate form 1
/* calling many time of setSate form 1 won't increse the qty becuse of batching, it let the setSate to merge in one call */ 
        // this.setState({ 
        //     qty: this.state.qty + 1,
        //     price: this.state.price + 12000
        // })
        // this.setState({
        //     qty: this.state.qty + 1,
        //     price: this.state.price + 12000
        // })
        // this.setState({
        //     qty: this.state.qty + 1,
        //     price: this.state.price + 12000
        // })
        //setSate form 2 if prevSate required use this. 
        // when we call prevSate more than one time, prevSate maintain qub and pass the callback in it. As we know react ensuare to update prevSate, it is going incrse qty
        // this.setState((prevState)=>{

        //     return {
        //         qty: prevState.qty + 1,
        //         price: prevState.price + 12000
        //     }
        // }, ()=>{
        //     console.log(this.state)
        // })
        // this.setState((prevState)=>{

        //     return {
        //         qty: prevState.qty + 1,
        //         price: prevState.price + 12000
        //     }
        // })
        // this.setState((prevState)=>{

        //     return {
        //         qty: prevState.qty + 1,
        //         price: prevState.price + 12000
        //     }
        // })

        // now question occure, are setSates are asyicronous? ans - yes
        // console.log(this.state) that's we can't rely in this
    // }
    // decreseingQtyNprice = () =>{
    
    //     // console.log('this.state', this.state)
    //     // setSate form 2
    //     const {qty} = this.state;
    //     if (qty === 1){
    //         return; 
    //     }
    //     this.setState({
    //         qty: this.state.qty - 1,
    //         price: this.state.price - 12000
    //     })
        
      
    // }
    render() {
        // console.log("this.props", this.props)
        const {price, title, qty} = this.props.product; /*distucturing method*/
        const {product, onIncreaseQty, onDecreaseQty, onDeleteProduct} = this.props
        
        return (
            <div className="cart-item">
                {/* {this.props.jsx} */}
                <div className="left-block">
                    <img style={styles.image}/>
                    
                </div>
                <div className="right-block">
                    <div style={{fontSize: 25}}>{title}</div>
                    <div style={{color: "#777"}}>Rs: {price}</div>
                    <div style={{color: "#777"}}>Qty: {qty}</div>
                    <div className="cart-item-actions">
                        {/* button */}
                        <img alt="increase" className="action-icons" src="https://cdn-icons-png.flaticon.com/128/992/992651.png" onClick= {()=> onIncreaseQty(product)} /*{this.increseingQtyNprice}*/
                        /*{this.increseingQty.bind(this)}*/ />
                        <img alt="decrease" className="action-icons" src="https://cdn-icons-png.flaticon.com/128/992/992683.png" onClick= {()=> onDecreaseQty(product)}/*{this.decreseingQtyNprice} *//>
                        <img alt="delete" className="action-icons" src="https://cdn-icons-png.flaticon.com/128/3405/3405244.png" onClick={()=> onDeleteProduct(product.id)}/>
                    </div>
                    
                </div>

            </div>
        )
    }
}

const styles = {
    image:{
        height: 110,
        width: 110,
        borderRadius: 4,
        background: '#ccc'
    }
}


export default CartItem;

