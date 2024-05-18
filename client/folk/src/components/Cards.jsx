import React from 'react'

function Cards({ item }) {
    return (
        <>
            <div className="mt-4 mb-3 p-3">
                <div className="card w-92 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:border">
                    <figure><img src={item.image} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            {item.name}
                            <div className="badge badge-secondary bg-purple-600 text-white">{item.category}</div>
                        </h2>
                        <p>{item.title}</p>
                        <div className="card-actions justify-between">
                            <div className="badge badge-outline hover:bg-green-500 cursor-pointer hover:text-white">${item.price}</div>
                            <div className="cursor-pointer p-3 badge badge-outline hover:bg-purple-600 hover:text-white">Buy Now</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards