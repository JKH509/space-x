import Axios from 'axios';
// import actionTypes 
import { LAUNCH_URL, GET_LAUNCHES_REQUEST } from '../constants/consts';

// export const fetchLaunches = () => async (dispatch) => {
//   const response = await fetch(LAUNCH_URL);
//   const jsonResponse = await response.json();
//   // console.log(jsonResponse)

//   dispatch({
//     type: GET_LAUNCHES_REQUEST,
//     payload: jsonResponse,
//   });
// };

// export const getLaunchList = () => dispatch => {
// const response = await fetch(LAUNCH_URL)
// const res = await response.json()
//     dispatch({
//       type: GET_LAUNCH_LIST,
//       payload: res.data
//     });
//     return res.data;
// };

// export const getLaunchList = () => dispatch => {
//   axios.get("https://api.spacexdata.com/v4/launches/").then(res => {
//     dispatch({
//       type: GET_LAUNCH_LIST,
//       payload: res.data
//     });
//     return res.data;
//   });
// };



// export const getLaunches = () => async (dispatch) => {
//   try {
//     dispatch({ type: actionTypes.GET_LAUNCHES_REQUEST });

//     const { data } = await Axios.get("https://api.spacexdata.com/v4/launches/");
// console.log(data)
//     dispatch({
//       type: actionTypes.GET_LAUNCHES__SUCCESS,
//       payload: data,
//     });
//   } catch (error) {
//     dispatch({
//       type: actionTypes.GET_LAUNCHES__FAIL,
//       payload:
//         error.response && error.response.data.message
//           ? error.response.data.message
//           : error.message,
//     });
//   }
// };

// export const getLaunchDetails = (id) => async (dispatch) => {
//   try {
//     dispatch({ type: actionTypes.GET_LAUNCH_DETAILS_REQUEST });

//     const { data } = await axios.get(`/api/launch/${id}`);

//     dispatch({
//       type: actionTypes.GET_LAUNCH_DETAILS_SUCCESS,
//       payload: data,
//     });
//   } catch (error) {
//     dispatch({
//       type: actionTypes.GET_LAUNCH_DETAILS_FAIL,
//       payload:
//         error.response && error.response.data.message
//           ? error.response.data.message
//           : error.message,
//     });
//   }
// };

