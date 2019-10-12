const add =(val)=>(
    console.log("im in add"+val),
    {
        type:"add",
        val
  }
)
const useradd=(newitem)=>(
    {
        type:"useradd",
        newitem
    }
)
const order = ()=>(
    {
        type:"order",

    }
)


var obj = {
    cart:[],
    finalprice:0,
    order:[],
    items:[
        {
            name:"modela",
            img:"https://m.media-amazon.com/images/I/81XcGuHh9ZL._AC_UL320_ML3_.jpg",
            price:100
        },
        {
            name:"Tv",
            img:"https://m.media-amazon.com/images/I/71AUBr20GaL._AC_UL320_ML3_.jpg",
            price:200
        },
        
        {
            name:"modeld",
            img:"https://rukminim1.flixcart.com/image/150/150/jx3kn0w0/mobile/9/j/e/vivo-z1-pro-1951-pd1911f-ex-original-imafhmyaytjannkv.jpeg?q=70",
            price:300
        },
        {
            name:"miband",
            img:"https://m.media-amazon.com/images/I/71ZIrJ6XLLL._AC_UL320_ML3_.jpg",
            price:240
        },
        {
            name:"headphones mi",
            img:"https://m.media-amazon.com/images/I/71DAywteJ3L._AC_UL320_ML3_.jpg",
            price:210
        }
    ]
}


const reducer=(state=obj,action)=>{
    if(action.type=="add")
    {
        //console.log(state.cart)
            return{
                items:state.items,
                cart:[...state.cart,state.items[action.val]],
                finalprice:Number(state.items[action.val].price)+Number(state.finalprice),
                order:state.order
            }
            
    }
    if(action.type=="useradd")
    {
        return{
            items:[...state.items,action.newitem],
            cart:state.cart,
            finalprice:state.finalprice,
            order:state.order
        }
    }
    if(action.type=="order")
    {
        console.log(state.order)
        return{
                items:state.items,
                cart:state.cart,
                finalprice:state.finalprice,
                order:[...state.order,state.cart[0]]
        }
    }
return state;
}
export default reducer;
export  {add,useradd,order}