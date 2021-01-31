const BloodReducer = (state={
    products:[]
},action) =>{
    switch(action.type){
        case 'ADD_BLOOD':
            return{
                ...state,
                products:action.payload
            }
            default:
                return state
    }
}

export default BloodReducer;