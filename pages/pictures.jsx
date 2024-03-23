import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavBar } from '../components/NavBar/NavBar'
import { SearchBar } from '../components/searchBar/SearchBar'
import { Pagination } from '../components/pagiantion/Pagination'
import { useDispatch, useSelector } from 'react-redux'
import { addPicture, removePicture } from '../redux/features/favoritesSlice'

const Pictures = () => {
    const dispatch=useDispatch()
    const [picturesData, setpicturesData] = useState([])
    const Data = useSelector((state)=>state)
    const [Loading, setLoading] = useState(false)
    const [nPages, setNpages] = useState('')
    const [currentPage, setCurrentPage] = useState(1);
    const [recordsPerPage] = useState(20);

    const isLiked=(item)=>{
        let liked=Data.PictureData.find((val)=>val.id === item.id)
        return liked
    }
    useEffect(() => {
        const getpicturesData = async () => {
            setLoading(true)
            try {
                const response = await axios.get("https://jsonplaceholder.typicode.com/photos")
                const result = response.data
                console.log(result)
                setpicturesData(result)
                setLoading(false)
                const pages = Math.ceil(result.length / recordsPerPage)
                setNpages(pages)
            } catch (error) {
                setLoading(false)
                alert('somthing went wrong')
            }

        }
        getpicturesData()
    }, [])

 

    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;

    const currentRecords = picturesData?.slice(indexOfFirstRecord, indexOfLastRecord);
   
    return (
        <>
            <NavBar />
            <SearchBar />
            <div class="flex bg-white shadow-lg rounded-lg mx-4 md:mx-auto my-2 max-w-md md:max-w-2xl ">
                <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {
                        Loading ? <div class="flex rounded-lg  h-[75vh] w-[100%] items-center justify-center "> Loading... </div>
                            :
                            <>
                                {currentRecords && currentRecords?.map((item, index) => {
                                    return (
                                        //    <div class="flex bg-white shadow-lg rounded-lg mx-4 md:mx-auto my-2 max-w-md md:max-w-2xl ">
                                        //    <div class="flex items-start px-4 py-6">

                                        //       <div class=" m-auto">
                                        //          <div class="flex items-center justify-between">
                                        //            <div className='flex '>
                                        //            <img class="w-12 h-12 rounded-full object-cover mr-4 shadow" src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="avatar" />
                                        //            <div>
                                        //             <h2 class="text-lg font-semibold text-gray-900 -mt-1">Brad Adams </h2>
                                        //             <p class="text-gray-700">Joined 12 SEP 2012. </p>
                                        //             </div>
                                        //             </div>
                                        //             <small class="text-sm text-gray-700">22h ago</small>
                                        //          </div>


                                        //          <img class="mt-3 text-gray-700 text-sm m-auto" src="https://via.placeholder.com/600/771796" alt="image" />

                                        //          <div class="mt-4 flex items-center">
                                        //             <div class="flex mr-2 text-gray-700 text-sm mr-3">
                                        //                <svg fill="none" viewBox="0 0 24 24" class="w-4 h-4 mr-1" stroke="currentColor">
                                        //                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                        //                </svg>
                                        //                <span>12</span>
                                        //             </div>
                                        //             <div class="flex mr-2 text-gray-700 text-sm mr-8">
                                        //                <svg fill="none" viewBox="0 0 24 24" class="w-4 h-4 mr-1" stroke="currentColor">
                                        //                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                                        //                </svg>
                                        //                <span>8</span>
                                        //             </div>
                                        //             <div class="flex mr-2 text-gray-700 text-sm mr-4">
                                        //                <svg fill="none" viewBox="0 0 24 24" class="w-4 h-4 mr-1" stroke="currentColor">
                                        //                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                                        //                </svg>
                                        //                <span>share</span>
                                        //             </div>
                                        //          </div>
                                        //       </div>
                                        //    </div>
                                        // </div>

                                        <div className='' key={index}>
                                            <img class="h-auto max-w-full rounded-lg" src={item.url} alt="" />
                                            {
                                                isLiked(item) ? <button className='hover:text-[orange]' onClick={()=>{
                                                    dispatch(removePicture(item))
                                                   
                                                }}>                                                
                                                <svg fill=" orange" viewBox="0 0 24 24" className="w-4 h-4 mr-1" stroke="none">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                                    </svg>
                                                </button>
                                                :
                                                <button className='hover:text-[orange]' onClick={()=>{
                                                    
                                                    dispatch(addPicture(item))
                                                }}>                                                
                                                <svg fill="smokewhite" viewBox="0 0 24 24" className="w-4 h-4 mr-1" stroke="none">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                                    </svg>
                                                </button>
                                            }
                                            
                                        </div>



                                    )
                                })
                                }
                            </>
                    }
                </div>
            </div>
            <Pagination
                nPages={nPages}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />
        </>

    )
}

export default Pictures
