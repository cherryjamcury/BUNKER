import React, { useEffect } from 'react'


//Connect to API 
async function ConnectToAPI(URL, KEY = null){

  const headers = {}

  if(KEY){
    headers['Authorization'] = KEY
  }

  try{
    const response  = await fetch(
      URL, {
        method: 'GET',
        headers: headers
      })

      const data = await response.json()
      console.log(data)
      return data 
  }

  catch(error){
    console.error(error)
    return null
  }
}



//Handle Data 
function  HandleData(data){
  if(Array.isArray(data)){
    data.forEach(item => HandleData(item))
  }
  else if(data !== null && typeof data === 'object'){
    Object.entries(data).forEach(([key , value])=>{
      HandleData(value)
    })
  }
  else {
    console.log(data)
  }

}



export default function ReactPractice1() {
const URl = 'https://restcountries.com/v3.1/name/aruba?fullText=true'

  useEffect(()=>{

ConnectToAPI(URl).then(data => {
  if(data){
    HandleData(data)

  }
})

  },[])

  return (
    <div>Practicing connecting to an API, loading data, and using it in a project </div>

    
  )
}
