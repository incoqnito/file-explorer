import React from 'react'
import styled from 'styled-components'

const Folder = ({ folder: { title, id, children }, shouldDisplay, onExpand, path = [] }) => shouldDisplay(path) && (
  <Wrapper className='file-explorer-tree-view-folder' onClick={(event) => {
    event.stopPropagation()
    onExpand(path.concat(id))
  }}>
    { title }

    { children && children.map((folder) => (
      <Folder
        key={folder.id}
        folder={folder}
        path={path.concat(id)}
        shouldDisplay={shouldDisplay}
        onExpand={onExpand}
      />
    )) }
  </Wrapper>
)

const Wrapper = styled.div`
  margin-top: 8px;
  margin-left: 8px;
`

export default Folder
