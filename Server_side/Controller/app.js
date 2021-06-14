import User from '../model_Schema/index.js';



                // Get all Bio //
export const getUsers = async (req,res) => {
    try{
            const user = await User.find();
            res.status(200).json(user);
       
    }catch(e){
        console.log(e);
    }
}
                   
                    //  getting bio by field  //
export const getUserBySearch = async (req,res) => {

                const bio = req.body
                const { gen, sta, ad } = bio; 
              

        try{
           

             if(sta === '' && ad === '' ){

                const result = await User.find({  gender:gen });
                res.status(200).json(result);
        
        
               
            }else if(gen === '' && ad === '' ){

                const result = await User.find({ marrystatus:sta});
                res.status(200).json(result);
            
        
               
            }else if(gen === '' && sta === '' ){
                
                const result = await User.find({  presentadd:ad });
                res.status(200).json(result);
               
        
               
            }else if(gen === ''){

                const result = await User.find({  marrystatus:sta, presentadd:ad });
               res.status(200).json(result);
       
             
             }else if(sta === ''){

          
                const result = await User.find({  gender:gen , presentadd:ad });
                res.status(200).json(result);
        
              
            }
            
            if (ad === ''){

                     const result = await User.find({  gender:gen, marrystatus:sta });
                    res.status(200).json(result);                   
            
                
            }      
            const result  = await User.find({ gender: gen, marrystatus:sta, presentadd:ad})
            res.status(200).json(result); 
        }
        
        catch(e){
            console.log(e);
        }
}

        /// Creates Bio and post to DB //
export const postBio = async (req,res) => {
    try{
             const bio = req.body;

             const postBio = await new User(bio)
             const newBio = postBio.save()
             res.status(201).json(newBio);

    }catch(e){
        console.log(e);
    }
}

            // Show Bio Details //  

