import React, { useEffect } from 'react'
import jwtDecode from 'jwt-decode'




const expire = ({logout}) => {

    useEffect(()=>{
        const token = localStorage.getItem('token')

        if(token){
            const decodedToken = jwtDecode(token)

            //Get current time::
            const currentTime = Math.floor(Date.now()/1000)

            //check for expiry::
            if(decodedToken.exp >= currentTime){
                logout()
            }
        }
    },[logout])
  return (
    <div>expire</div>
  )
}

export default expire