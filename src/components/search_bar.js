/**
 * Created by Palaparthi on 7/21/17.
 */

import React, {Component} from 'react'

//function based component
/*const SearchBar = () => {
    return <input />;
};*/

//Class based component
class SearchBar extends Component{

    constructor(props){
    super(props);

    this.state = {term: ''};
    }

    render() {
        //ES5
        //return <input onChange = {this.onInputChange}/>;

        //ES6
        return (
            <div>
                <input
                    value = {this.state.term}
                    onChange = {(event) => this.setState({ term: event.target.value })} />

            </div>
        );
    }
/*
    onInputChange(event){
        console.log(event.target.value);
    }*/
}

export default SearchBar;
