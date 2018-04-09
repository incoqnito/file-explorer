import React from 'react'
import styled from 'styled-components'

import Icon from '../Icon/index.js'

export default class extends React.PureComponent {
  onClick = (event) => {
    event.persist()

    if (this.timeout) {
      window.clearTimeout(this.timeout)
      this.timeout = false

      this.props.onDoubleClick(event)
    } else {
      this.timeout = window.setTimeout(() => this.onClickTimeoutCallback(event), this.props.doubleClickThreshold)
    }
  }

  onClickTimeoutCallback = (event) => {
    this.timeout = false
    this.props.onClick && this.props.onClick(event)
  }

  render () {
    const { icon, text, style, className } = this.props

    return (
      <Wrapper
        onClick={this.props.onClick && !this.props.onDoubleClick ? this.props.onClick : this.onClick}
        style={style}
        className='file-explorer-folder-view-entity-wrapper'
      >
        <Icon src={icon} className='file-explorer-folder-view-entity-icon'/>

        <Text className='file-explorer-folder-view-entity-text'>
          { text }
        </Text>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  flex: 0 0;

  padding: 8px;

  display: flex;
  align-items: center;

  cursor: pointer;
`

const Text = styled.span`
  padding-left: 8px;
  white-space: nowrap;
  user-select: none;
`
