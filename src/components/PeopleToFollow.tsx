import UserCard from "./UserCard";


// import React from 'react'
export const peopleToFollows = [
  { name: "Alice", following: true },
  { name: "Bob", following: false },
  { name: "Charlie", following: true },
  { name: "Diana", following: false },
  { name: "Ethan", following: true },
  { name: "Julia", following: false }
];

const PeopleToFollow = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="font-semibold text-lg mb-4">People To Follow</h3>
      <div className="space-y-4">
        {peopleToFollows.map((person,index) => (
          <UserCard key={index} person={person} />
        ))}
      </div>
    </div>
  )
}

export default PeopleToFollow