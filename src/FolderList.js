import React from 'react';
import {NavLink} from 'react-router-dom'


export default function FolderList(props) {
  return (
    <ul>
      {props.folders.map(folder => {
        return (
          <li key= {folder.id}>
            <NavLink to={`/folder/${folder.id}`}>
            {folder.name}
            </NavLink>
          </li>
        )
      })}
    </ul>
  )
}