
export  const Bio = (bio=[], action) =>{
    switch(action.type) {

    
            
     
     
        case "FETCH_ALL" :return action.payload;

        case 'POST_BIO': return [ ...bio, action.payload];

       
        
       
        default :return bio;
    }
}
export  const Auth = (auth=[], action) =>{
    switch(action.type) {

     
        case "USER_LOGOUT": localStorage.clear();
          return null    
        case "USER_LOGIN" :
        localStorage.setItem('profile', JSON.stringify(action?.payload)) 
            return  action.payload;
 
       
        default :return auth;
    }
}

















 
//  export const user = (users=[ ], action) =>{
//        switch(action.type){
//            case GETUSER : return action.payload;
//             case POSTUSERPROFILE : return [...users, action.payload]
//            default : return users; 
//        }
// }







// export const authReducer = (state = {authData: null}, action) => {
//     switch(action.type){
//         case 'AUTH' : 
//         localStorage.setItem('profile', JSON.stringify({...action?.data}))
//         return {...state, authData : action?.data};
//         case "LOGOUT": 
//         localStorage.clear();
//         return {...state, authData: null};
//         default : return state
//     }
// }