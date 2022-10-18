import React, { Component } from 'react'
import PersonsList from './PersonsList'
import FormView from './FormView'

class MainView extends Component {
  state = {
    data: [
      { id: '1', name: 'John Doe', deposit: '$5000', cCard: 'Visa' },
      { id: '2', name: 'Marko Markovic', deposit: '$4000', cCard: 'Master' },
      { id: '3', name: 'Mihajlo Mihajlovic', deposit: '$3200', cCard: 'Visa' },
    ],
  }

  insertNewPerson = (person) => {
    person.id = Math.floor(Math.random() * 10000 - 10) + 10
    this.setState({
      data: [...this.state.data, person],
    })
  }

  render() {
    return (
      <main>
        <div id="mainView">
          <h4 className="title">Accounts</h4>
          <div className="row">
            <table className="table">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Deposit</th>
                  <th>Credit Card</th>
                </tr>
              </thead>
              <PersonsList data={this.state.data} />
            </table>
          </div>
        </div>
        <FormView insertNewPerson={this.insertNewPerson} />
      </main>
    )
  }
}

export default MainView
