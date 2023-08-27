import { Specification, Type } from '@/types.ts/enum';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import classes from '../../styles/filter_bar.module.scss';

export const FilterBar: React.FC = () => {
  const router = useRouter();
  const [filterType, setFilterType] = useState('');
  const [filterSpecification, setSilterSpecification] = useState('');

  const handleFilter = () => {
    if (filterType.length > 0) {
      router.replace({
        query: { type: filterType },
      });
    } else {
      router.replace({}, undefined, { shallow: true });
    }
  };

  const handleFilterSpecification = () => {
    if (filterSpecification.length > 0) {
      router.replace({
        query: { specification: filterSpecification },
      });
    } else {
      router.replace({}, undefined, { shallow: true });
    }
  };

  useEffect(() => {
    handleFilter();
  }, [filterType]);

  useEffect(() => {
    handleFilterSpecification();
  }, [filterSpecification]);

  return (
    <div className={classes.filter_bar}>
      <label htmlFor="type-select" className={classes.filter_bar__label}>
        Type:
        <select
          name="type"
          className={classes.filter_bar__select}
          onChange={(e) => setFilterType(e.target.value)}
        >
          <option value="">All Types</option>
          {Object.entries(Type).map(([name, value]) => (
            <option key={name} value={value}>
              {name}
            </option>
          ))}
        </select>
      </label>

      <label
        htmlFor="specification-select"
        className={classes.filter_bar__label}
      >
        Specification:
        <select
          name="specification"
          className={classes.filter_bar__select}
          onChange={(e) => setSilterSpecification(e.target.value)}
        >
          <option value="">All Specifications</option>
          {Object.entries(Specification).map(([name, value]) => (
            <option key={name} value={value}>
              {name}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};
