import React from 'react'
import PetsList from './PetsList'

export default function Friend(props) {
  // 👉 1- What does a Friend need?
  const { friendData } = props;

  const changeStatusHandler = () => {
    props.changeStatus(friendData.id);
  }

  return (
    <div className='friend-friends container'>
      {/* 👉 2- Fix the JSX so it displays real info coming into the component */}
      <div className='friend-info'>
        <div >
          <h3>Name: {friendData.name}</h3>
          <p>Age: {friendData.age}</p>

          <p>Married: {friendData.married ? "yes" : "no"} <button onClick={changeStatus}>change</button></p>
          <div>Likes:
            <ul>
              {friendData.hobbies.map((hobby) => {
                <li key={hobby}>{hobby}</li>
              })}
            </ul>
          </div>
        </div>

        <div>
          {/* 👉 3- What data does the PetsList need? */}
          {/* What is the exact name of the prop/props it expects? */}
          {/* Is the data around here somewhere so I may pass it? */}
          <PetsList />
        </div>
      </div>
    </div>
  )
}
