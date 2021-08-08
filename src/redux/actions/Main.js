export const main=()=>{
return{
        type:"DROW_ITEMS"
}
}

export const changeMainCategory=(val)=>{
        return{
                type:"CHANGE_MAIN_CATEGORY",
                payload:val
        }
}
export const changeActiveType=(val)=>{
        return{
                type:"CHANGE_ACTIVE_TYPE",
                payload:val
        }
}

export const createNewType=(val)=>{
        return{
                type:"CREATE_NEW_TYPE",
                payload:val
        }
}

export const removeImgFromItems=(val)=>{

        return{
                type:"REMOVE_IMG_FROM_ITEMS",
                payload:val
        }
}

export const addNewPhoto=(val)=>{
        return{
               type:"ADD_NEW_PHOTO",
               payload:val
        }
}

export const changeCategoryParams=(val)=>{
        return{
                type:"CHANGE_CATEGORY_PARAMS",
                payload:val
        }
}

export const addNewCategory=(val)=>{
        return{
                type:"ADD_NEW_CATEGORY",
                payload:val
        }
}

export const removeCategory=(val)=>{
        return{
                type:"REMOVE_CATEGORY",
                payload:val
        }
}

export const removeType=(val)=>{
        return{
                type:"REMOVE_TYPE",
                payload:val
        }
}

export const changeCurrentTypeName=(val)=>{
        return{
                type:"CHANGE_CURRENT_TYPE_NAME",
                payload:val
        }
}