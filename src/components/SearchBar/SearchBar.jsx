import React, { Component } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

import {
  Header,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from './SearchBar.styled';

class SearchBar extends Component {
  handleSubmit = e => {
    e.preventDefault();

    const query = e.target.query.value;

    if (query.trim() !== '') {
      this.props.onSubmit(e.target.query.value);
    }

    e.target.reset();
  };

  render() {
    return (
      <Header>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchFormButton type="submit">
            <AiOutlineSearch width="32" height="32" />
            <SearchFormButtonLabel>Search</SearchFormButtonLabel>
          </SearchFormButton>

          <SearchFormInput
            name="query"
            type="text"
            autocomplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </SearchForm>
      </Header>
    );
  }
}

export default SearchBar;
