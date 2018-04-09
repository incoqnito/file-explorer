import React from 'react'
import styled from 'styled-components'

import Entity from './components/Entity/index.js'

import MaterialFolderIcon from './icons/Folder.svg'
import MaterialFileIcon from './icons/File.svg'

export default ({ folders, files, className, FolderIcon = MaterialFolderIcon, FileIcon = MaterialFileIcon, onClickFolder,
  onDoubleClickFolder, onClickFile, onDoubleClickFile, doubleClickThreshold = 200, ...props }) => (
  <Wrapper className={`${className ? className : ''} file-explorer-folder-view-wrapper`} {...props}>
    { folders.map((folder) => (
        <Entity
          text={folder.name}
          icon={(props) => <FolderIcon {...props} folder={folder} />}
          key={folder.id}
          doubleClickThreshold={doubleClickThreshold}
          onClick={onClickFolder && (() => onClickFolder(folder))}
          onDoubleClick={onDoubleClickFolder && (() => onDoubleClickFolder(folder))}
        />
      )
    )}
    { files.map((file) => (
        <Entity
          text={file.name}
          icon={(props) => <FileIcon {...props} file={file} />}
          key={file.id}
          doubleClickThreshold={doubleClickThreshold}
          onClick={onClickFile && (() => onClickFile(file))}
          onDoubleClick={onDoubleClickFile && (() => onDoubleClickFile(file))}
        />
      )
    ) }
  </Wrapper>
)

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  * {
    font-family: sans-serif;
    box-sizing: border-box;
  }

  @media only screen and (min-width: 811px) {
    & > * {
      flex-basis: 25%;
    }
  }
  @media only screen and (max-width: 810px) and (min-width: 541px) {
    & > * {
      flex-basis: 33%;
    }
  }
  @media only screen and (max-width: 540px) {
    & > * {
      flex-basis: 50%;
    }
  }
`
