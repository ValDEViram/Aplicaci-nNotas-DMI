import AsyncStorage from "@react-native-async-storage/async-storage";
import { createSlice } from "@reduxjs/toolkit";

const getUser = async () =>{
  try{
    const userInfo =  await AsyncStorage.getItem("userInfo")
    return userInfo ? JSON.parse(userInfo) : null
  }catch (error){
    return null
  }
}

const initialState = {
  user: null
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers:{
    loginUserAction: (state,action) =>{
      state.user = action.payload
      AsyncStorage.setItem("userInfo", JSON.stringify(action.payload))
    },
    logoutAction: (state, action) =>{
      state.user = null
      AsyncStorage.removeItem("userInfo")
    },
    setUserAction: (state, action)=>{
      state.user = action.payload
    }
  }
})


export const {loginUserAction, logoutAction, setUserAction} = authSlice.actions

export const authReducer = authSlice.reducer

export const loadUser = () => async (dispatch) =>{
  const userInfo = await getUser();
  if (userInfo){
    dispatch(setUserAction(userInfo))
  }
}