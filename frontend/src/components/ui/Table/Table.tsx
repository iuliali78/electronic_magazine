import React from 'react'

interface IProps {
    name: string;
}

const Table: React.FunctionComponent<IProps> = ({name}) => {
  return (
    <div>{name}</div>
  )
}

export default Table