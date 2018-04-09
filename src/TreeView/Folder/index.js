import React from 'react'
import styled from 'styled-components'

import FolderIcon from '../icons/Folder.svg'
import OpenFolderIcon from '../icons/OpenFolder.svg'

  <Wrapper className='file-explorer-tree-view-folder' onClick={(event) => {
const Folder = ({ folder: { name, id, children }, shouldDisplay, onExpand, path = [] }) => shouldDisplay(path) && (
    event.stopPropagation()
    onExpand(path.concat(id))
  }}>
    <Icon src={shouldDisplay(path.concat(id)) ? OpenFolderIcon : FolderIcon} fill='#333' />

    <Name className='file-explorer-tree-view-folder-name'>
    { name }
    </Name>

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
  margin-left: 12px;

  overflow: hidden;
  text-overflow: ellipsis;

  cursor: pointer;

  & > * {
    vertical-align: middle;
  }
`

const Icon = ({ src: Icon, ...props }) => (
  <Icon width='16' height='16' {...props} />
)

const Name = styled.span`
  position: relative;
  color: #333;
  padding-left: 4px;

  font-size: 14px;
  font-weight: 200;

  white-space: nowrap;
  user-select: none;
`

export default Folder
