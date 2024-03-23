import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavBar } from '../components/NavBar/NavBar'
import { SearchBar } from '../components/searchBar/SearchBar'
import { Pagination } from '../components/pagiantion/Pagination'
import { useDispatch, useSelector } from 'react-redux'
import { addPost, removePost } from '../redux/features/favoritesSlice'

const Post = () => {
    const dispatch = useDispatch();
    const [postData, setPostData] = useState([]);
    const [nPages, setNpages] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [recordsPerPage] = useState(20);
    const [searchVal, setSearchVal] = useState("");
    const Data = useSelector((state) => state);

    // function handleSearchClick() {
    //     if (searchVal === "") { setProducts(productList); return; }
    //     const filterBySearch = productList.filter((item) => {
    //         if (item.toLowerCase()
    //             .includes(searchVal.toLowerCase())) { return item; }
    //     })
    //     setProducts(filterBySearch);
    // }

    const getPostData = async () => {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
        const result = response.data
        if (searchVal === "") {
            setPostData(result)
            const pages = Math.ceil(result.length / recordsPerPage)
            setNpages(pages);
            return;
        }
        const filterBySearch = result.filter((item) => {
            if (item.title.toLowerCase()
                .includes(searchVal.toLowerCase())) { return item; }
        })
        setPostData(filterBySearch);
        const pages = Math.ceil(filterBySearch.length / recordsPerPage)
        setNpages(pages);
    }
    useEffect(() => {
        getPostData()
    }, [])

    const isLiked = (item) => {
        let liked = Data.PostData.find((val) => val.id === item.id)
        return liked
    }

    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;

    const currentRecords = postData?.slice(indexOfFirstRecord, indexOfLastRecord);


    return (

        <>
            <NavBar />
            <SearchBar setSearchVal={setSearchVal} searchVal={searchVal} getPostData={getPostData} />
            {currentRecords && currentRecords.map((item) => {
                return (
                    <div className="flex bg-white shadow-lg rounded-lg mx-4 md:mx-auto my-2 max-w-md md:max-w-2xl ">
                        <div className="flex items-start px-4 py-6">
                            <img className="w-12 h-12 rounded-full object-cover mr-4 shadow" src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="avatar" />
                            <div className="">
                                <div className="flex items-center justify-between">
                                    <h2 className="text-lg font-semibold text-gray-900 -mt-1">Brad Adams </h2>
                                    <small className="text-sm text-gray-700">22h ago</small>
                                </div>
                                <p className="text-gray-700">{item.title} </p>
                                <p className="mt-3 text-gray-700 text-sm">
                                    {item.body}
                                </p>
                                <div className="mt-4 flex items-center">
                                    {
                                        isLiked(item) ? <button onClick={() => {
                                            dispatch(removePost(item))
                                        }} className="flex mr-2 text-gray-700 text-sm mr-3">
                                            <svg fill="orange" viewBox="0 0 24 24" className="w-4 h-4 mr-1" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                            </svg>

                                        </button> :
                                            <button className="flex mr-2 text-gray-700 text-sm mr-3" onClick={() => {
                                                dispatch(addPost(item))
                                            }}>
                                                <svg fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-1" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                                </svg>

                                            </button>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
            <Pagination
                nPages={nPages}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />
        </>
    )
}

export default Post