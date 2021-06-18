
import React, { Component } from 'react'
import '../CSS/FormCSS.css'

// window.location.reload()

const getItems = localStorage.getItem('testObject')
const store = JSON.parse(getItems)

var arr = [];
if(store == null){
    arr=[]
}
else{
    arr = store
}

export class ReactForm extends Component {
    constructor(props){
        super(props);
        this.state={
            ItemName:'',
            ItemPrice:'',
            Quantity:'',
        };
        localStorage.removeItem('testObject')
    }
    handleChangeItemName =(event)=>{
        this.setState({
            ItemName: event.target.value,
        })
    }
    handleChangeItemPrice =(event)=>{
        this.setState({
            ItemPrice: event.target.value,
        })
    }
    handleChangeQuantity =(event)=>{
        this.setState({
            Quantity:event.target.value
        })
    }
    
    handleSubmit = (e)=>{
        e.preventDefault()
        var item = {
            ItemName : this.state.ItemName,
            ItemPrice : this.state.ItemPrice,
            Quantity : this.state.Quantity
        }
        var length =arr.length;
        arr.push(item);
        console.log(arr);
        localStorage.setItem("testObject",JSON.stringify(arr));
        if(length !== arr.length){
            document.getElementById("visible").innerHTML="Added Successfully"
            document.getElementById("visible").style.color="green"
            document.getElementById("visible").style.textAlign="Center"
            document.getElementById("visible").style.fontWeight="bold"
        }   
        this.setState({
            ItemName:"",
            ItemPrice:"",
            Quantity:""
        })
        // setTimeout(()=>{
        //     document.getElementById("visible").innerHTML=""
        // },2000)
    }
    handleChangeButton = (e)=>{
        
    }
    render() {
        return (
            <div className="main ">
                <div className="style"><a href="/table"><button  style={{backgroundColor:"blue"}}>Show Table</button></a></div>
                <h1>Enter the Items</h1>
                <form  onSubmit={this.handleSubmit}>
                    <label htmlFor="">ItemName: </label><br />
                    <input type="text" placeholder="ItemName" value={this.state.ItemName} onChange={this.handleChangeItemName} /><br />
                    <label htmlFor="">ItemPrice:</label><br />
                    <input type="text" placeholder="ItemPrice" value={this.state.ItemPrice} onChange={this.handleChangeItemPrice}/><br />
                    <label htmlFor="">Quantity:</label><br />
                    <input type="text" placeholder="Quantity" value={this.state.Quantity} onChange={this.handleChangeQuantity} /><br />
                    <div id="visible"></div>
                    <button className="styles" type="submit" value="submit" >Add</button>
                </form>
            </div>
        )
    }
}

export default ReactForm
