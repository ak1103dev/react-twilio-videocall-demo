import React, { Component } from 'react'

import { leaveRoomIfJoined, joinRoom, leaveRoom, previewCamera } from '../utils/twilioVideoCall'
import request from '../utils/request'

class VideoCall extends Component {
  state = {
    token: '',
    identity: '',
    roomName: '',
  }

  async componentDidMount() {
    window.addEventListener('beforeunload', leaveRoomIfJoined);
    const { data } = await request().get('/token')
    if (data) {
      this.setState(data)
    }
  }

  onChangeRoomName = (e) => this.setState({ roomName: e.target.value })

  render() {
    const { roomName, token, identity } = this.state
    return (
      <div>
        <div id="remote-media"></div>
        <div id="controls">
          <div id="preview">
            <p className="instructions">Hello Beautiful</p>
            <div id="local-media"></div>
            <button id="button-preview" onClick={previewCamera}>Preview My Camera</button>
          </div>
          <div id="room-controls">
            <p className="instructions">Room Name:</p>
            <input id="room-name" type="text" placeholder="Enter a room name" onChange={this.onChangeRoomName} />
            <button id="button-join" onClick={() => joinRoom({ roomName, token, identity })}>Join Room</button>
            <button id="button-leave" onClick={leaveRoom}>Leave Room</button>
          </div>
          <div id="log"></div>
        </div>
      </div>
    )
  }
}

export default VideoCall
