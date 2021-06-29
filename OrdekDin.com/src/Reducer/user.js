import {combineReducers} from 'redux';

import {Bio , Auth}from './index';

const allReducers =  combineReducers({Bio, Auth });
export default allReducers;
