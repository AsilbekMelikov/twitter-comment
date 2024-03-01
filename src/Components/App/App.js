import AppHeader from "../AppHeader";
import SearchPanel from "../SearchPanel";
import PostStatusFilter from "../PostStatusFilter";
import PostList from "../PostList";
import PostAddForm from "../PostAddForm";
import './App.css'
import React from "react";


export default class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {label: 'Going to learn React JS', important: false, like: false, id: 1},
                {label: 'That is so good to learn', important: false, like: false, id: 2},
                {label: 'I need a break...', important: false, like: false, id: 3}
            ],
            term: '',
            filter : 'all'
        }
        this.maxId = 4

        this.deleteItem = this.deleteItem.bind(this)
        this.addNewData = this.addNewData.bind(this)
        this.onToggleImportant = this.onToggleImportant.bind(this)
        this.onToggleLiked = this.onToggleLiked.bind(this)
        this.onUpdateSearch = this.onUpdateSearch.bind(this)
        this.onFilterSelect = this.onFilterSelect.bind(this)
    }

    addNewData(newData) {
        const newItem = {
            label: newData,
            important: false,
            like: false,
            id: this.maxId++
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem]
            return {
                data: newArr
            }
        })
    }

    deleteItem(id) {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id)
            const  newArr = [...data.slice(0, index), ...data.slice(index + 1)]
            return {
                data: newArr
            }

            // The second solution for removing objects

            // const newArr =  data.filter(elem => elem.id !== id)
            // return {
            //     data:newArr
            // }
        })
    }

    onToggleImportant(id) {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id)
            const oldItem = data[index]
            const newItem = {...oldItem, important: !oldItem.important}
            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)]
            return {
                data: newArr
            }
        })
    }
    onToggleLiked(id) {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id)
            const oldItem = data[index]
            const newItem = {...oldItem, like: !oldItem.like}
            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)]
            return {
                data: newArr
            }
        })
    }

    searchPosts(items, term) {
        if (term.length === 0) {
            return items
        }
        else {
            return items.filter(item => item.label.indexOf(term) > -1)
        }
    }

    filterPost(items, filter) {
        if (filter === 'like') {
            return items.filter(item => item.like)
        }
        else {
            return items
        }
    }

    onUpdateSearch(term) {
        this.setState({term})
    }

    onFilterSelect(filter) {
        this.setState({filter})
    }

    render() {
        const {data, term, filter} = this.state
        const likes = data.filter(item => item.like).length
        const allPosts = data.length
        const visiblePosts = this.filterPost(this.searchPosts(data, term), filter)
        return (

            <div className='app'>
                <AppHeader allPosts ={allPosts} likes = {likes} />
                <div className='search-panel d-flex'>
                    <SearchPanel onUpdateSearch = {this.onUpdateSearch} />
                    <PostStatusFilter filter = {filter} onFilterSelect = {this.onFilterSelect} />
                </div>
                <PostList
                    posts ={visiblePosts}
                    onDelete={this.deleteItem}
                    onToggleImportant = {this.onToggleImportant}
                    onToggleLiked = {this.onToggleLiked}
                />
                <PostAddForm onNewData = {this.addNewData} />
            </div>
        );
    }
}
