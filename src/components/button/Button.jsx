import React from 'react'

function Button({children,chnageShowBlock,closeAddBlock,sendResult,...styles}) {
        return (
                <div style={styles} onClick={chnageShowBlock || closeAddBlock ||sendResult}>
                       {children} 
                </div>
        )
}

export default Button
