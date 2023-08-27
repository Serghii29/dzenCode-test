import {
  addfilterBySpecification,
  addfilterByType,
} from '@/store/filterReducer';
import { useAppDispatch } from '@/store/hooks';
import { Specification, Type } from '@/types.ts/enum';
import React from 'react';
import classes from '../../styles/filter_bar.module.scss';

export const FilterBar: React.FC = () => {
  const dispatch = useAppDispatch();

  return (
    <div className={classes.filter_bar}>
      <label htmlFor="type-select" className={classes.filter_bar__label}>
        Type:
        <select
          name="type"
          className={classes.filter_bar__select}
          onChange={(e) => dispatch(addfilterByType(e.target.value))}
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
          onChange={(e) => dispatch(addfilterBySpecification(e.target.value))}
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
