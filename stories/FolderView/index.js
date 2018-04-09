import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Standard from './standard.js'
import DoubleClickThreshold from './doubleClickThreshold.js'

storiesOf('FolderView', module)
  .add('Standard', Standard)
  .add('Double Click Detection Threshold 1000ms', DoubleClickThreshold)
