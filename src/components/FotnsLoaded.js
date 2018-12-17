import React from 'react'
import WebFont from 'webfontloader'

export class WithFontsLoaded extends React.Component {
  state = {
    loaded: false,
  }
  componentWillMount() {
    WebFont.load({
      google: {
        families: ['Droid Sans', 'Droid Serif'],
      },
    })
  }

  render() {
    return this.props.children({ loaded: this.state.loaded })
  }
}
