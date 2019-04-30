import React, { Component } from 'react'

export class PicFrame extends Component {
  render() {
    return (
      <div>
        <div className='sqFrame' onClick={this.props.btn}>
            <div id={this.props.id} className='insideFrame' style={{ backgroundImage : this.props.bgimage, backgroundColor: 'yellow' }} >
            
            </div>
        </div>
      </div>
    )
  }
}

export default PicFrame
