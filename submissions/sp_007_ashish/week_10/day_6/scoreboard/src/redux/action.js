const STORE_DATA ="STORE_DATA"
const SHOW_FROM = "SHOW_FORM"
const ADD_ITEM ="ADD_ITEM"
const SHOW_DATA ="SHOW_DATA"
const DISPLAY_PLAY ="DISPLAY_PLAY"
const storeData=data =>{
    return {
        type:STORE_DATA,
        data:data
    };
};
const showForm= data =>{
   return{
    type:SHOW_FROM,
    data:data
   }
}
const addItem =data =>{
   return{
    type:ADD_ITEM,
    data:data
   }
}
const showData =data =>{
    return{
        type:SHOW_DATA,
        data:data
    }
}
const displayPlayer = data =>{
   return{
    type:DISPLAY_PLAY,
    data:data
   }
}
export{
    showForm,storeData,STORE_DATA,SHOW_FROM,addItem,ADD_ITEM,showData,SHOW_DATA,DISPLAY_PLAY,displayPlayer
}
