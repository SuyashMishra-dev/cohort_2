const ADD_ITEM = "ADD ITEM";

const initState = {
  orderList: []
};

const reducer = (state = initState, action) => {
  console.log("entered reducer");
  switch (action.type) {
    case ADD_ITEM:
      console.log("ADD ITEM Called");
      let temp = {
        type: ADD_ITEM,
        itemIssue: action.itemIssue,
        itemOrder: action.itemOrder,
        itemEmailId:action.itemEmailId,
        itemContactNumber : action.itemContactNumber,
        itemIssueDetails:action.itemIssueDetails,
        itemResolutionDeadline:action.itemResolutionDeadline,
        itemPriority:action.itemPriority,
        itemCreation:action.itemCreation
    
      };
      return {
        orderList: [...state.orderList, temp]
      };

    default:
      console.log("default called", state);
      return state;
  }
};

export default reducer;
