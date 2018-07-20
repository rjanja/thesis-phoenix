import React from 'react'

class CancelButton extends React.Component {
  render () {
    return (
      <div onClick={this.props.onPress} className='thesis-button cancel'><div className='tooltip'>Discard Changes</div><i className='fa fa-minus fa-2x' /></div>
    )
  }
}

export default CancelButton

