 export const API_BASE_URL="https://slots-booking.herokuapp.com/api/forums/";
 


export const getApiUrl=(endpoint)=>API_BASE_URL+endpoint;

 
 
 
export const FORUMS_API=getApiUrl("edit");
export const ALL_FORUMS_API=getApiUrl("all_forums");
export const GET_FORUMS_API=getApiUrl("getforums");
 

