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

    const result = path.reduce((result, id, index) => {
      if (!result[id]) {
        result[id] = {}
      } else if (index === path.length - 1) {
        result[id] = false
        return 'shrink'
      }

      return result[id]
    }, currentPath)

    if (result === 'shrink') {
      this.props.onCloseFolder && this.props.onCloseFolder(path)
    } else {
      this.props.onExpandFolder && this.props.onExpandFolder(path)
    }

    this.setState({
      currentPath
    })
  }

  render () {
    const { data } = this.props

    return (
      <Wrapper className='ile-explorer-tree-view-wrapper'>
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
  
  padding-bottom: 8px;
`
