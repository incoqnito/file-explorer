import React from 'react'
import { action } from '@storybook/addon-actions'

import { FolderView } from '../../src/index.js'

export default () => (
  <FolderView folders={[ {
    id: 1,
    name: 'Folder'
  }, {
    id: 2,
    name: 'Another Folder'
  }, {
    id: 3,
    name: 'My Folder'
  }, {
    id: 4,
    name: 'Test'
  } ]} files={[ {
    id: 1,
    name: 'File'
  }, {
    id: 2,
    name: 'My File'
  }, {
    id: 3,
    name: 'A File'
  } ]} onClickFolder={action('onClickFolder()')} onClickFile={action('onClickFile()')} />
)
