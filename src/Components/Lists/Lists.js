import React from 'react'
// Router Imports
import { Link } from 'react-router-dom';

const Lists = ({ data, comeTo }) => {
  return (
    <>
      {data.results.map((item, i) => (
        <li className={`card`} key={item.name}>
          <Link className={`link-list`} to={`${comeTo}${i + 1}/`}>{item.name}</Link>
        </li>
      ))}
    </>
  )
}

export default Lists