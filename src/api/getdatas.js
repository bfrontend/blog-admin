import axios from '@/libs/api.request'

export const getFriendLinks = () => {
  return axios.request({
    url: 'get_friend_links',
    method: 'get'
  })
}

export const getDisplayStructure = (tablename) => {
  return axios.request({
    url: 'get_display_structure',
    params: {
      tablename: tablename
    },
    method: 'get'
  })
}

export const getCategorys = () => {
  return axios.request({
    url: 'get_categorys',
    method: 'get'
  })
}

export const getOriginalCategorys = () => {
  return axios.request({
    url: 'get_original_categorys',
    method: 'get'
  })
}
