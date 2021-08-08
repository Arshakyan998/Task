const initalState={
        src:"",
        description:"",
        isShow:false
}

const showLargeImg=(state=initalState,action)=>{

        switch (action.type) {
                case "SHOW_LARGE_IMG":{
                       return{
                               ...state,
                               src:action.payload.src,
                               description:action.payload.description,
                               isShow:true
                       }
                }
                case "CLOSE_LARGE_IMG":{
                        return{
                                ...state,
                                isShow:action.payload
                        }
                }
                        
                        
        
                default:
                        return state;
        }
}

export default showLargeImg