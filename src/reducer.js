export const initialState={
    basket:[],
    user:null,
};

export const getBasketPrice=(basket)=>{
    return basket?.reduce((amount,item)=>item.price+amount,0);
   
}

/*reducer*/
function reducer(state,action){
    console.log(action); 
    switch(action.type){
        case "SET_USER":
            return {
                ...state,
                user:action.user
    }
            
        case 'ADD':
            return{
                ...state,
                basket:[...state.basket,action.item]
            }
        case 'REMOVE':
            //removing from basket
            let newBasket=[...state.basket];
            const idx=state.basket.findIndex((item)=> item.id=action.id);
            if(idx>=0){
                newBasket.splice(idx,1);
            }
            return {...state,basket:newBasket};
        default:
            return state;

        
    }
}


export default reducer;