
const moviesInitialState=[]
const moviesReducer=(state=moviesInitialState,action)=>{
    switch(action.type){
        case 'ADD_MOVIE':{
            // console.log(action.payload);
            return [...state, {...action.payload}]
        }
        case 'REMOVE_MOVIE':{
            const result=state.filter((ele)=>{
                return ele.id !== action.payload.id
            })
            return [...result]
        }
        default:{
            return [...state]
        }
    }

}

export default moviesReducer