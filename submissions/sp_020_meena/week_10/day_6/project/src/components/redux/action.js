const ADD_PLAYER = "ADD_PLAYER";

const addPlayer = item =>{
    console.log("add item called");
    return{
        type:ADD_PLAYER,
        itemName: item.name,
        itemCountry: item.country,
        itemT20Score: item.t20Score,
        itemOdiScore: item.odiScore,
        itemTestScore: item.testScore,
    }
};

export { addPlayer };