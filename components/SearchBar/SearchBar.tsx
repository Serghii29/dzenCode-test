import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import classes from '../../styles/search.module.scss';

export const SearchBar: React.FC = () => {
  const router = useRouter();
  const [searchParams, setSearchParams] = useState('');

  const handleSearch = () => {
    if (searchParams.length > 0) {
      router.replace({
        query: { searchParams },
      });
    } else {
      router.replace({}, undefined, { shallow: true });
    }
  };

  useEffect(() => {
    handleSearch();
  }, [searchParams]);

  return (
    <input
      className={classes.search}
      type="text"
      placeholder="Search"
      value={searchParams}
      onChange={(e) => setSearchParams(e.target.value)}
    />
  );
};
