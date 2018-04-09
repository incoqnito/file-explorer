import React from 'react'
import styled from 'styled-components'

import Icon from '../Icon/index.js'

export default ({ icon, text, ...props }) => (
  <Wrapper {...props}>
    <Icon src={icon} />

    <Text>
      { text }
    </Text>
  </Wrapper>
)

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
`
