import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { FormContainer } from './SearchForm.styled';

const SearchForm = ({ handleSearch }) => {
  const [input, setInput] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  const handleInput = e => {
    setInput(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    handleSearch(query);
    setSearchParams({ query: input });
  };
  return (
    <FormContainer>
      <form action="submit" onSubmit={handleSubmit}>
        <label htmlFor="">
          <input
            type="text"
            name="search"
            value={input}
            onChange={handleInput}
            autoComplete="off"
          />
        </label>
        <button type="submit">Search</button>
      </form>
    </FormContainer>
  );
};

export default SearchForm;
