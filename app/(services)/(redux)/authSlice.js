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
  user: null,
  loading: true,
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers:{
    loginUserAction: (state,action) =>{
      state.user = action.payload
      state.loading = false
      AsyncStorage.setItem("userInfo", JSON.stringify(action.payload))
    },
    logoutAction: (state, action) =>{
      state.user = null
      state.loading = false
      AsyncStorage.removeItem("userInfo")
    },
    setUserAction: (state, action)=>{
      state.user = action.payload
      state.loading = false;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  }
})


export const { loginUserAction, logoutAction, setUserAction, setLoading } =
  authSlice.actions;

export const authReducer = authSlice.reducer

export const loadUser = () => async (dispatch) =>{
  const user = await getUser();
  if (user){
    dispatch(setUserAction(user))
  }else {
    dispatch(setLoading(false));
  }
}