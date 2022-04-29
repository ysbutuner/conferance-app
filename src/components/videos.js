import React, { Component } from 'react'
import Video from './video'

class Videos extends Component {
  constructor(props) {
    super(props)

    this.state = {
      rVideos: [],
      remoteStreams: [],
      selectedVideo: null,
      videoVisible: false,
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.remoteStreams !== nextProps.remoteStreams) {

      const NoOfRemoteStreams = nextProps.remoteStreams.length

      let selectedVideo = {}

      if (NoOfRemoteStreams === 1)
        selectedVideo = { selectedVideo: nextProps.remoteStreams[0] }
      else {
        selectedVideo = this.state.selectedVideo && nextProps.remoteStreams.filter(stream => stream.id === this.state.selectedVideo.id) || []

        selectedVideo = selectedVideo.length ? {} : { selectedVideo: nextProps.remoteStreams[NoOfRemoteStreams - 1] }
      }
      console.log("remoteStreams", nextProps.remoteStreams)
      let _rVideos = nextProps.remoteStreams.map((rVideo, index) => {
        let nameLastIndex = rVideo.name.lastIndexOf("#");
        const _videoTrack = rVideo.stream.getTracks().filter(track => track.kind === 'video')
        let video = _videoTrack && (
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Video
              videoMuted={this.videoMuted}
              videoType='remoteVideo'
              videoStream={rVideo.stream}
              frameStyle={{
                backgroundColor: '#ffffff12',
                maxWidth: 100, maxHeight: 100,
                borderRadius: 5,
                float: 'left', margin: '0 3px'
              }}
              videoStyles={{
                objectFit: 'cover',
                borderRadius: 5,
                width: 100, height: 100,
                maxWidth: 100, maxHeight: 100,
              }}
            />
            <a style={{ fontSize: 7, color: 'whitesmoke' }}>{rVideo.name.slice(nameLastIndex, rVideo.name.length)}</a>
          </div>
        ) || <div></div>

        return (
          <div
            id={rVideo.name}
            onClick={() => this.switchVideo(rVideo)}
            style={{
              cursor: 'pointer', display: 'inline-block'
            }}
            key={index}
          >
            {video}
          </div>
        )
      })

      this.setState({
        remoteStreams: nextProps.remoteStreams,
        rVideos: _rVideos,
        ...selectedVideo,
      })
    }
  }

  videoMuted = (rVideo) => {
    const muteTrack = rVideo.getVideoTracks()[0]
    const isSelectedVideo = rVideo.id === this.state.selectedVideo.stream.id
    if (isSelectedVideo) {
      this.setState({
        videoVisible: !muteTrack.muted
      })
    }
  }

  switchVideo = (_video) => {
    const muteTrack = _video.stream.getVideoTracks()[0]
    this.setState({
      selectedVideo: _video,
      videoVisible: !muteTrack.muted
    })
  }

  render() {
    return (
      <div>
        <Video

          videoType='previewVideo'
          frameStyle={{
            zIndex: 1,
            position: 'fixed',
            bottom: 0,
            width: '100%', height: '100%',
            backgroundColor: 'black',
          }}
          videoStyles={{
            width: '100%', height: '100%'
          }}
          videoStream={this.state.selectedVideo && this.state.selectedVideo.stream}
        />
        <div
          style={{
            zIndex: 3,
            position: 'fixed',
            padding: '6px 3px',
            backgroundColor: 'rgba(0,0,0,0.3)',
            maxHeight: 160,
            top: 'auto',
            right: 10,
            left: 10,
            bottom: 10,
            overflowX: 'scroll',
            whiteSpace: 'nowrap'
          }}
        >
          {this.state.rVideos}
        </div>
      </div>
    )
  }

}

export default Videos
