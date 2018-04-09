import React from 'react'
import styled from 'styled-components'

import Folder from './Folder/index.js'

export default class TreeView extends React.PureComponent {
  state = {
    currentPath: {}
  }

  shouldDisplayFolder = (path) => {
    return path.reduce((result, value) => {
      return result !== false && !!result[value]
        ? result[value]
        : false
    }, this.state.currentPath) !== false
  }

  onExpandFolder = (path) => {
    const currentPath = {
      ...this.state.currentPath
    }

    path.reduce((result, id, index) => {
      if (!result[id]) {
        result[id] = {}
      } else if (index === path.length - 1) {
        result[id] = false
      }

      return result[id]
    }, currentPath)

    this.setState({
      currentPath
    })
  }

  render () {
    const { data } = this.props

    return (
      <Wrapper>
        {
          data.map((folder) => (
            <Folder
              key={folder.id}
              folder={folder}
              shouldDisplay={this.shouldDisplayFolder}
              onExpand={this.onExpandFolder}
            />
          ))
        }
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  * {
    font-family: sans-serif;
  }

  border: 1px solid #CCC;
  padding-bottom: 8px;
`
