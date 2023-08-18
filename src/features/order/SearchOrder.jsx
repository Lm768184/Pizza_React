import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
//Header

const SearchOrder = () => {
  const [query, setQuery] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    if (!query) return;
    e.preventDefault();
    navigate(`/order/${query}`);
    setQuery('');
    console.log('queryInSearchOrderHandleSubmit==>', query);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Search order #"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="input"
      ></input>
    </form>
  );
};

export default SearchOrder;
