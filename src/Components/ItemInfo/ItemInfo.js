import React from 'react'

const ItemInfo = ({ data, verifyLinkList }) => {
  const formatTitle = (key) => {
    return key.replace(/_/g, ' ').toUpperCase();
  }

  return (
    <>
      {Object.keys(data).map(key => {
        if (!Array.isArray(data[key])) {
          return <li><span>{formatTitle(key)}</span>{data[key]}</li>;
        } else {
          return (
            <ul className={`listsInList`}>
              <h3>{formatTitle(key)}</h3>
              {data[key].map((value) => (
                <li className={`linkItemInList`} onClick={verifyLinkList} key={value}>
                  {value}
                </li>
              ))}
            </ul>
          )
        }
      })}
    </>
  )
}

export default ItemInfo
