import React from 'react'
import ReactDOM from 'react-dom'
import { Button, Snackbar } from 'react-toolbox'

class SnackBarComponent extends React.Component {
  handleSnackbarClick = (event, instance) => {
    this.setState({ active: false })
  };

  handleSnackbarTimeout = (event, instance) => {
    this.setState({ active: false });
  };

  handleClick = () => {
    this.setState({ active: true });
  };

  render () {
    return (
      <section>
        <Snackbar
          action='Dismiss'
          active={this.props.active}
          icon='question_answer'
          label={this.props.label}
          timeout={4000}
          onClick={this.props.onClick}
          onTimeout={this.props.onTimeout}
          type='cancel'
        />
      </section>
    );
  }
}

export default SnackBarComponent

