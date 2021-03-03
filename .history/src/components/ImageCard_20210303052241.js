import React, { Component } from 'react'

export class ImageCard extends Component {
  constructor(props){
    super(props)
    this.imageRef=React.createRef()
  }

  componentDidMount(){
    console.log(this.imageRef.current.clientHeight)
  }
  
  render() {
    const {description,urls}=this.props.images
    return (
      <div>
        <img ref={this.imageRef} alt={description} src={urls.regular} />
      </div>
    )
  }
}

export default ImageCard
