import React from 'react';
import _ from 'lodash';

export default class SearchBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {term: ''}
    }

    render() {

        const searchString = 'Search  ';
        return (
            <div className="search-bar">
                {searchString}
                <input onChange={event => this.onInputChange(event.target.value)}/>
            </div>
        );
    }

    onInputChange(term) {
        this.setState({term})
        this.props.onSearchTermChange(term);
    }

}