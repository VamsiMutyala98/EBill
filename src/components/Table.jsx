import React, { Component } from 'react'
import '../CSS/TableCSS.css'
import {
    Link} from 'react-router-dom'

const getItems = localStorage.getItem('testObject')
const store = JSON.parse(getItems)
let total = 0

console.log("yes");
console.log(store);

export class table extends Component {
    constructor(props){
        super(props);
        this.state={
            totalPrice:"0"
        }
    }
    handleChangeCheckbox = (event)=>{

        const index = event.target.id;
        
        var x = document.getElementsByClassName(index);
        
        if(x[0].checked === true ){
            console.log("Success");
            total = total + parseInt(store[parseInt(index)]["Quantity"]) * parseInt(store[parseInt(index)]["ItemPrice"].substring(0,2))
        }
        else{
            total = total - parseInt(store[parseInt(index)]["Quantity"]) * parseInt(store[parseInt(index)]["ItemPrice"].substring(0,2))
        }
        this.setState({
            totalPrice:total
        })
    }
    render() {
        console.log(store);
        if(store==null){
            return (<div>
                <h1 className="NoElements">No Items in Table</h1>
            </div>)
        }
        else{
            return (
               
                <div className="Main">
                        <Link to="/reactForm"><button>Add Items</button></Link>
                    <table >
                        <thead>
                            <tr>
                                <th>Item Name</th>
                                <th>Item Price</th>
                                <th>Quantity</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                        {JSON.parse(getItems).map((item, index) => (
                            <tr key={index} >
                                <td >{item.ItemName}</td>
                                <td id={index}>{item.ItemPrice}</td>
                                <td >{item.Quantity}</td>
                                <td onChange={this.handleChangeCheckbox} ><input type="checkbox" id={index} className={index} /></td>
                            </tr>
                        ))}
                        </tbody>
                        <div>
                            <div type="button" onChange={this.handleChangeCheckbox} value={this.state.totalPrice}><h1>Total Price: {this.state.totalPrice}</h1></div>
                        </div>
                    </table>
                    
                </div>
            )
        }
    }
}

export default table
