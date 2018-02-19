
export default function courseReducer(state = [],action) {
  switch (action.type){
    case "CREATE_COURSE":
      //use spread  and create a new copy of the course because redux state is immutable and thus we need to create a new object and not change the current one
      return [...state,
        Object.assign({},action.course)
      ];
    default:
      return state;
  }
}
