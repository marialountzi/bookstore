import React from 'react';
import Scroll from './Scroll';
import SearchList from './SearchList';


class Search extends React.Component {

    constructor({ details }) {
        super();
        this.filters = [{ key: 1, value: "title", name: "Title" }, { key: 2, value: "author", name: "Author" }];
        this.searchField = "";
        this.setSearchField = "";
        this.details = details
        this.state = {filteredPersons: this.filterList()};
    }


    filterList() {
        var property = this.filters.find(filter => filter.value === this.setSearchField);
        var tempText = this.searchField.toLowerCase();
        return this.details.filter(
            person => {
                var list = property ? [person[property.value]] : this.filters.map(filter => person[filter.value]);
                return list.some(text => text.toLowerCase().includes(tempText));
            }
        );
    }

    handleChange(event) {
        this.searchField = event.target.value;
        this.setState({filteredPersons: this.filterList()});
    }
    
    filterChange(event) {
        this.setSearchField = event.target.value;
        this.setState({filteredPersons: this.filterList()});
    }

    searchList() {
        return (
            <Scroll>
                <SearchList filteredPersons={this.state.filteredPersons} />
            </Scroll>
        );
    }

    render() {
        return (
            <section className="garamond">
                <div className="navy georgia ma0 grow">
                    <h2 className="f1 bg-yellow dib br3  ">Bookstore</h2>
                    <h2 className="f3 orange">Search to find your new book</h2>
                    <h2 className="f6 black">Use the filters below to specify your search</h2>
                </div>

                <div className="pa2">
                    <input
                        className="tc pa3 bb br3 grow b--none bg-lightest-blue ma3"
                        type="search"
                        placeholder="Search..."
                        onChange={this.handleChange.bind(this)}
                    />
                </div>

                <div>
                    {this.filters.map((filter, index) => {
                        return (
                            <span key={filter.key} onChange={this.filterChange.bind(this)}>
                                <input type="radio" value={filter.value} name="filter" defaultChecked={!index} />
                                <label>{filter.name}</label>
                            </span>
                        );
                    })}
                </div>

                {this.searchList()}
            </section>
        );
    }
}

export default Search;