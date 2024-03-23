import React, { useState } from 'react'
import { NavBar } from '../components/NavBar/NavBar'
import { useSelector } from 'react-redux'
import { Pictures } from '../components/Post/Pictures'
import { Post } from '../components/Post/Post'

const Favorites = () => {
    const [currentTab,setCurrentTab]=useState("post")
    const Data = useSelector((state)=>state)
    console.log(Data)
    
    return (
    <>
            <NavBar />
            <div className=" bg-white shadow-lg rounded-lg mx-4 md:mx-auto my-2 max-w-md md:max-w-2xl ">
                <div className="flex items-start  w-[100%]">
                    <div class="mb-4 border-b border-gray-200 dark:border-gray-700">
                        <ul class="flex flex-wrap -mb-px text-sm font-medium text-center" id="default-styled-tab" data-tabs-toggle="#default-styled-tab-content" data-tabs-active-classes="text-purple-600 hover:text-purple-600 dark:text-purple-500 dark:hover:text-purple-500 border-purple-600 dark:border-purple-500" data-tabs-inactive-classes="dark:border-transparent text-gray-500 hover:text-gray-600 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300" role="tablist">
                            <li class="me-2" onClick={()=>{setCurrentTab('post')}}>
                                <button class="inline-block p-4 border-b-2 rounded-t-lg" id="profile-styled-tab" data-tabs-target="#styled-profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Post</button>
                            </li>
                            <li class="me-2" onClick={()=>{setCurrentTab('picture')}}>
                                <button class="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="dashboard-styled-tab" data-tabs-target="#styled-dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="false">Picture</button>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='px-6 py-3'>
                {
                   currentTab === 'post' && <>
                    <Post postData={Data?.PostData} />
                         
                   
                   </> }
                   { currentTab === 'picture' &&
                    <>
                   <Pictures pictureData={Data?.PictureData} />
                   </>
                }
                </div>
                </div>
            </>
            )
}

            export default Favorites