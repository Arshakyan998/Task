import React from 'react'
import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'

import {showLargeImg} from "../../redux/actions/largeImg"


function Slider({src,id,description,romovePhoto,length}) {

        const  dispatch = useDispatch()

const removeImg=()=>{
        if(window.confirm(`Вы действительно хотите удалить ${description?description:"Default"}`))
        romovePhoto(id)
}

const largeImg=()=>{
        const result={
                src,
                description,
                
        }
        dispatch(showLargeImg(result))
}

        return (
                <div className="main_slider_block">
                        <div className="slider_block">
                                <div className="slider_block_img" onClick={largeImg}>

                        
                        <img src={src} alt="netu" width="300px" height="300px" />
                        </div>
                        <div className="slider_block_description">
                        {description&&description.length>=10? <span>{description.slice(0,10)}... </span>:
                        <span>{description} </span> }
                        
                        </div> {length>1 &&
                        <div className="slider_block_remove">
                        <span onClick={removeImg}>&#10008;</span>
                        </div>
                        }
                        </div>
                </div>
               
        )
}

Slider.propTypes={
        src:PropTypes.string.isRequired,
        id:PropTypes.number.isRequired,
        description:PropTypes.string,
        romovePhoto:PropTypes.func,
        length:PropTypes.number.isRequired
}

export default Slider
