const ADD_ITEM = "ADD ITEM";

// create action creators and export
const addItem = item => {
  console.log("add item called");
  return {
    type: ADD_ITEM,
    itemPlayerName: item.playerName,
    itemCountry: item.country,
    itemTtScore: item.tScore,
    itemOdiScore : item.OdiScore,
    itemIssueDetails:item.issueDetails,
    itemResolutionDeadline:item.resolutionDeadline,
    itemPriority:item.priority,
    itemCreation : item.creation
  };
};

export { addItem };
