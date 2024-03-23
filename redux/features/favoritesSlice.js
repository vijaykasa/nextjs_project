
import {createSlice} from '@reduxjs/toolkit';
import { setLoacalStorage } from '../../utils/helper';

let data={
  post:[],
  picture:[]
}

if (typeof window !== 'undefined') {
  // Perform localStorage 
  data.post=localStorage.getItem('post') ?  JSON.parse(localStorage.getItem('post') ) : []
  data.picture = localStorage.getItem('picture') ?  JSON.parse(localStorage.getItem('picture') ) : []
}



const defaultState  = {
  PostData: data.post,
  PictureData:data.picture
};

const slice = createSlice({
  name: 'count',
  initialState: defaultState,
  reducers: {
    addPost: (state, action) => {
      state.PostData.push(action.payload);
      setLoacalStorage("post", state.PostData)

    },
    addPicture: (state, action) => {
      state.PictureData.push(action.payload);
      setLoacalStorage("picture", state.PictureData)
    },
    removePicture:(state,action) =>{
      const filterData=state.PictureData.filter((item)=>item.id !== action.payload.id)
      state.PictureData=filterData
      setLoacalStorage('picture',state.PictureData)
    },
    removePost:(state,action)=>{
      const filterData=state.PostData.filter((item)=>item.id !== action.payload.id)
      state.PostData=filterData
      setLoacalStorage('picture',state.PostData)
    }
  }
});

export const { addPost, addPicture,removePicture,removePost } = slice.actions;

export default slice.reducer;