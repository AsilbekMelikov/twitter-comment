import React from "react";
import './PostAddForm.css'

export default class PostAddForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: ''
        }
        this.changeHandler = this.changeHandler.bind(this)
        this.addData = this.addData.bind(this)
    }
    changeHandler(e) {
        this.setState({search: e.target.value})
    }

    addData(e) {
        if (this.state.search) {
            e.preventDefault()
            this.props.onNewData(this.state.search)
            this.setState({search: ''})
        }
        else {
            e.preventDefault()
        }
    }

    render() {
        const {search} = this.state
        return (
            <form className='bottom-panel d-flex' onSubmit={this.addData}>
                <input
                    type='search'
                    placeholder='What are you thinking about ?'
                    value={search}
                    className='form-control new-post-label'
                    onChange={this.changeHandler}
                />
                <button type='submit' className='btn btn-outline-secondary form-button'>
                    Add Post
                </button>
            </form>
        )
    }
}
