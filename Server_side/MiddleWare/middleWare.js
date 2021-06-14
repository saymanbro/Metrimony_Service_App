import jwt from 'jsonwebtoken';

const auth = async (req, res, next) => {

    try{
        console.log(req.headers);
            const token = req.headers.authorization;
            const isCustomAuth = token.length < 500 ;

            let decodeData;

            if(token && isCustomAuth){
                decodeData  = jwt.verify(token,'text');

                req.userId = decodeData?.id;
            }else{
                decodeData = jwt.decode(token);
                req.userId = decodeData?.sub;
            }
            next();

    }catch(e){
        console.log(e);
    }
}

export default auth;