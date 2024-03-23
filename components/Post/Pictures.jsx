import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const Pictures = (props) => {
   // const [picturesData, setpicturesData] = useState([])
   // useEffect(() => {
   //    const getpicturesData = async () => {
   //       const response = await axios.get("https://jsonplaceholder.typicode.com/photos")
   //       const result = response.data
   //       console.log(result)
   //       setpicturesData(result)
   //    }
   //    getpicturesData()
   // }, [])
   return (
      <>
         <div class="flex bg-white shadow-lg rounded-lg mx-4 md:mx-auto my-2 max-w-md md:max-w-2xl ">
            <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
               {props?.pictureData?.map((item, index) => {
                  return (
                     <div  key={index}>
                        <img class="h-auto max-w-full rounded-lg" src={item.url} alt="" />
                     </div>
                  )
               })
               }
            </div>
         </div>
      </>

   )
}
