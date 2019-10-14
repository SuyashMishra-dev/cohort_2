const ADD_ITEM = "ADD ITEM";

// create action creators and export
const addItem = item => {
  console.log("add item called");
  return {
    type: ADD_ITEM,
    itemIssue: item.issue,
    itemOrder: item.order,
    itemEmailId: item.emailId,
    itemContactNumber : item.contactNumber,
    itemIssueDetails:item.issueDetails,
    itemResolutionDeadline:item.resolutionDeadline,
    itemPriority:item.priority,
    itemCreation : item.creation
  };
};

export { addItem };
