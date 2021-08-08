import React from 'react'
import {useSelector,useDispatch} from 'react-redux'

import {closeLargeImg} from '../../redux/actions/largeImg'
import './largesImg.scss'

function LargeImg() {

         const {src,isShow,description}=useSelector(({showLargeImg})=>{
                 return{
                         src:showLargeImg.src,
                         isShow:showLargeImg.isShow,
                         description:showLargeImg.description
                 }
         })

          const dispatch=useDispatch()
         const closeImg=()=>{
                dispatch(closeLargeImg(false))
         }
 
          React.useEffect(()=>{
                  if(isShow){
                          document.body.style.overflow="hidden"
                  }else{
                        document.body.style.overflow="auto"

                  }
          },[isShow])

          const closeImage=(e)=>{
        if(!!e.target.childNodes[0]&&!!e.target.childNodes[0].childNodes[0]){
                        dispatch(closeLargeImg(false))
                  }
          }

        return (
                <>
                {isShow &&
                        <div className="large" onClick={closeImage}> 
                        <div className="large_main">
                <div className="large_img">
                        <img src={src} alt="chka" width="800px" height="500px" />
                </div>
                <div className="large_main_description_btn">
                        <div>{
                        description?<span>{description}</span>:<span>Default</span>
                        }
                </div>
                
                <div className="large_button">
                        null
                        </div>
                        
                </div>
                
                </div>
              <div className="large_close" onClick={closeImg}>&#10006;</div>

                </div>
        }
        </>
        )
}

export default LargeImg
