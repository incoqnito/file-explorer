import React from 'react'

import { TreeView } from '../../src/index.js'

export default () => (
  <TreeView
    data={[ {
      id: 1,
      title: 'First Folder',
      children: [ {
        id: 1,
        title: 'Child Folder',
        children: [ {
          id: 1,
          title: 'Another Child Folder'
        } ]
      } ]
    }, {
      id: 2,
      title: 'Second Folder'
    } ]}
  />
)
