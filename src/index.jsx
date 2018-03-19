import React from 'react'
import PropTypes from 'prop-types'

const themes = {
  main: {
    content: {
      backgroundColor: 'blueviolet',
      color: 'whitesmoke'
    }
  },
  inverted: {
    content: {
      backgroundColor: 'whitesmoke',
      color: 'blueviolet'
    }
  }
}

const MyComponent = ({ children, theme, ...props }) => (
  <div {...props} style={themes[theme].content} ariaHideApp={false}>
    {children}
  </div>
)

MyComponent.propTypes = {
  theme: PropTypes.oneOf(Object.keys(themes))
}

MyComponent.defaultProps = {
  theme: 'main'
}

export default MyComponent
