import express from 'express';
import {getUsers,getUserBySearch,  postBio} from '../Controller/app.js';
const Users = express.Router();



Users.get('/',  getUsers);
Users.post('/search', getUserBySearch);
Users.post('/', postBio);





export default Users;