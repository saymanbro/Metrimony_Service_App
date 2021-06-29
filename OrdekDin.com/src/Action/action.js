import * as api from '../Api/app'



export const getBios = () => async (dispatch) => {
      try{
                const { data } = await api.getBio();
                
                dispatch({type: 'FETCH_ALL', payload: data})
      }catch(e){
          console.log(e);
      }
}

export const  postBio = (bio) => async (dispatch) => {

        try{
                    const {data} = await api.postBio(bio);
                    dispatch({type:'POST_BIO', payload:data})
        }catch(e){
            console.log(e);
        }
}
   
export const searchBioByField = (bio) => async (dispatch) => {
        try{
            // console.log(key);
                const {data} = await api.searchBio(bio);
                
                let findedBio = data
               
                dispatch({type:'FETCH_ALL', payload: findedBio});
        }catch(e){
            console.log(e);
        }
}


                //  set User when he or she Login ///

export const loggedUserInLocalStorage = (profile) => async (dispatch)=>{
        try{
                dispatch({type: 'USER_LOGIN', payload: profile});
        }catch(e){
            console.log(e);
        }
}
