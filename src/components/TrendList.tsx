// import React from 'react'
const trends = [
    { title: "To Kill a Mockingbird and the Struggles of Justice in the Deep South", author: "Harper Lee" },
    { title: "The Great Gatsby and the Illusions of the American Dream in the Jazz Age", author: "F. Scott Fitzgerald" },
    { title: "Moby Dick and the Obsession of Captain Ahab with the Elusive White Whale", author: "Herman Melville" }
  ];

const TrendList = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow mt-8 " >
        <h3 className="font-semibold text-lg mb-4" >Todays top Trends</h3>
        <ul className="space-y-4" >
            {trends.map((trend,index)=>(
                <li key={index} className="flex flex-col" >
                    <span className="font-medium" >{trend.title}</span>
                    <span className="text-sm text-gray-500">By {trend.author} </span>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default TrendList