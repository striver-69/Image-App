import React from 'react'

export default function ImageList(props) {
  const images=props.images.map((image)=>{
    return <img alt={image.description} key={image.id} src={image.urls.regular}/>
  })
  return (
    <div>
      {images}
    </div>
  )
}
