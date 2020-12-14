import React, { Component } from 'react'
import { connect } from 'react-redux'
import TaskPage from './components/TaskPage'

import { createTask} from './actions'


class App extends Component {
  onCreateTask = ({ title, description }) => {
    this.props.dispatch(createTask ({
      title,
      description
    }))
  }
  render() {
    return (
      <div className="main-content">
        <TaskPage 
          tasks={this.props.tasks} 
          onCreateTask={this.onCreateTask} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    tasks: state.tasks
  }
}

export default connect(mapStateToProps)(App)
  