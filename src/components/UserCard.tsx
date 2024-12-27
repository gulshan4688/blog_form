import { FaUserCircle } from "react-icons/fa"
// import { peopleToFollows } from "./PeopleToFollow"
 export interface UserCardProp{
    key:number;
    person:{
      name:string;
      following:boolean;
    }
}

const UserCard = ({person}:UserCardProp) => {
    return (
    <div className="flex items-center justify-between">
        <section className="flex items-center" >
            <FaUserCircle className="text-3xl mr-2 text-gray-500" />
            <span>{person.name}</span>
        </section>
        <button
    className={`border-2 rounded-full px-1.5 ${
      person.following ? "bg-gray-700 text-white" : "bg-gray-300 text-black"
    }`}
  >
    {person.following ? "Following" : "Follow"}
  </button>
    </div>
  )
}

export default UserCard