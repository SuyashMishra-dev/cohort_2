const ADD_DETAILS = "ADD_DETAILS"
let retrieveData = localStorage.getItem("Details");
let details = JSON.parse(retrieveData)

if(details != null){
    var init = details
}else{

}

const reducer = (state=init,action) => {
    switch(action.type){
        case ADD_DETAILS:
            let tempStorage ={
                capital: action.capital,
                continent : action.continent,
                gdp : action.gdp,
                population: action.population
            }
        default:
            return state;

    }
}

export default reducer;