/*
包含n个reducer函数: 根据老的state和指定的action返回一个新的state
 */
import {combineReducers} from 'redux'


import {ITEM_SEARCH} from './action-types';

const initItemList = []

function itemList(state=initItemList, action) {
  switch (action.type) {
    case ITEM_SEARCH:
      return action.data
    default:
      return state
  }
}

export default combineReducers({
  itemList
})
