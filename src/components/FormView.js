import React, { Component } from 'react'

class FormView extends Component {
  state = {
    id: '',
    name: '',
    deposit: '',
    cCard: '',
  }

  addNewUser = (e) => {
    let id = e.target.id
    if (id === 'accName') {
      this.setState({ name: e.target.value })
    }
    if (id === 'accDeposit') {
      this.setState({ deposit: e.target.value })
    }
    if (id === 'accCard') {
      this.setState({ cCard: e.target.value })
    }
  }

  saveNewUser = (e) => {
    e.preventDefault()
    this.props.insertNewPerson(this.state)
  }

  render() {
    return (
      <div id="formView">
        <h4 className="title">Add Account</h4>
        <div className="inputHolder">
          <div id="error-box" className="errorBox">
            Fill in the empty fields
          </div>
          <form action="" onSubmit={this.saveNewUser}>
            <input
              id="accId"
              type="text"
              placeholder="id"
              className="formControl"
              disabled
            />
            <input
              id="accName"
              type="text"
              placeholder="name"
              className="formControl"
              onChange={this.addNewUser}
            />
            <input
              id="accDeposit"
              type="text"
              placeholder="deposit"
              className="formControl"
              onChange={this.addNewUser}
            />
            <input
              id="accCard"
              type="text"
              placeholder="Credit Card"
              className="formControl"
              onChange={this.addNewUser}
            />
            <button
              id="saveBtn"
              className="btn formControl"
            >
              Save
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default FormView
