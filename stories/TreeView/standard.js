import React from 'react'
import { action } from '@storybook/addon-actions'

import { TreeView } from '../../src/index.js'

export default () => (
  <TreeView
    data={[ {
      id: 1,
      name: 'First Folder',
      children: [ {
        id: 1,
        name: 'Child Folder',
        children: [ {
          id: 1,
          name: 'Another Child Folder'
        } ]
      }, {
        id: 2,
        name: 'Second Child Folder',
        children: [ {
          id: 1,
          name: 'Another Child Folder'
        } ]
      } ]
    }, {
      id: 2,
      name: 'Second Folder'
    } ]}
    onExpandFolder={action('onExpandFolder() [path of folder IDs]')}
    onCloseFolder={action('onCloseFolder() [path of folder IDs]')}
  />
)
