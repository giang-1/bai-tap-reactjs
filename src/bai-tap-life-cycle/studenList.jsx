import React, { Component } from 'react'

class StudenList extends Component() {
    handleChange = (event) => {
        this.setState((state) => {
            const form = state.form
            form[event.target.name] = event.target.value
            return { form }
        }, () => this.checkInvalidForm())
    }
    handleSelect = (studentSelected, index) => {
        this.setState({
            form: JSON.parse(JSON.stringify(studentSelected)),
            indexSelected: index
        })
    }
    checkInvalidForm = () => {
        const { name, phone, email } = this.state.form
        const value = name && phone && email
        this.setState({
            isValid: value
        })
    }
    handleSubmit = () => {
        if (this.state.isValid) {
            const newList = this.state.studentList
            if (this.state.indexSelected > -1) {

            } else {

            }
            this.setState()
        }
    }
    render() {
        const { studentList, form } = this.state
        return (
            <div>
                <div>
                    <h1>Student List</h1>
                    <div>
                        <label>Name: </label>
                        <input name="name" value='' onChange={this.handleChange} />
                    </div>
                    <div>
                        <label>Phone: </label>
                        <input type="number" name="phone" value='' onChange={this.handleChange} />
                    </div>
                    <div>
                        <label>Email: </label>
                        <input name="email" value='' onChange={this.handleChange} />
                    </div>
                    <button onClick=''>Submit</button>
                    <table>
                        <thead>
                            <tr>
                                {/* Tạo Table header Name, Phone, Email, Action */}
                            </tr>
                        </thead>
                        <tbody>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }

}