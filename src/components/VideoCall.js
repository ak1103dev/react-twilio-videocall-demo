import React, { Component } from 'react'

import request from '../utils/request'

class VideoCall extends Component {
  state = {
    token: ''
  }

  componentDidMount = async () => {
    const { data } = await request().get('/token')
    this.setState({ token: data.token })
  }

  render() {
    return (
      <div>
        VideoCall
      </div>
    )
  }
}

export default VideoCall
