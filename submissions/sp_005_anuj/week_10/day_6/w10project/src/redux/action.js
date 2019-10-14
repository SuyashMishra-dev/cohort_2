const ADD_PLAYER = "ADD_PLAYER"
const addPlayer = item => {
    return {
        type: ADD_PLAYER,
        playername: item.playername,
        country: item.country,
        t20: item.t20,
        odi:item.odi,
        test :item.test
      };
};
export {addPlayer};