import React from 'react'
import axios from 'axios'
const SET_BEER = 'SET_BEER'

export const oneBeer = (id) => {
  return(dispatch) => {
    axios.get(`/beer/${id}`)
    .then( res => {
        dispatch({ type: SET_BEER, beer: res.data })
      })
      .catch( err => {
        debugger
      })
  }
}