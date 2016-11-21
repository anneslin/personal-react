import React, { Component } from 'react';

class Background extends Component {
  static propTypes = {
    bgImg: React.PropTypes.bool
  }
  static defaultProps = {
    bgImg: true
  }
  componentDidMount() {
    document.body.classList.toggle('bgImg', this.props.bgImg)
  }
  componentWillReceiveProps(nextProps) {
    document.body.classList.toggle('bgImg', nextProps.bgImg)
  }
  componentWillUnmount() {
    document.body.classList.remove('bgImg')
  }
  render() {
    return null
  }
}
export default Background;
