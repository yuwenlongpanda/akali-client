/*
包含n个action creator
异步action
同步action
 */
import {
  ITEM_SEARCH
} from './action-types'

import {
  reqSearch
} from '../api'

// 授权成功的同步action
const searchSuccess = (itemList) => ({type: ITEM_SEARCH, data: itemList})

// 登陆异步action
export const search = (key) => {
  if (!key) {
    return;
  }
  return async dispatch => {
    const response = await reqSearch(key)
    const result = response.data
    if(result.code===1) { // 成功
      // 分发授权成功的同步action
      const itemList = result.data.map(item => {
        return {text: item.title, icon: 'https://img12.360buyimg.com/n7/jfs/t1/90519/18/18265/111331/5e903c7bE5adc02a2/e100d56022c8a78e.jpg'}
      })
      dispatch(searchSuccess(itemList))
    } else if (result.code===0){ // 失败 TODO

    }
  }
}
