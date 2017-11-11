import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import searchImg from '../logo.svg';

export const Search = () => {
  return (
    <form>
      <label>
        <input type="text" name="search" />
      </label>
      <input type="image" src={searchImg} height='42' width='42'></input>
    </form>
  )
}
