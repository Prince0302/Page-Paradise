import React from 'react'
import list from "../../public/list.json"
import Cards from './Cards'
import {Link} from "react-router-dom";

function Course() {
    return (
        <>
            <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
                <div className='pt-28 items-center justify-center text-center'>
                    <h1 className='text-2xl  md:text-4xl'>We're Delighted to have you <span className='text-pink-500'>Here! :)</span> </h1>
                    <p className='mt-10'>Step into the captivating world of literature
                        with our online book store, where every page holds the promise of adventure,
                        knowledge, and inspiration. From timeless classics to contemporary bestsellers,
                        our diverse collection caters to every taste and interest. Immerse yourself
                        in gripping narratives, delve into thought-provoking non-fiction, or escape
                        to distant lands through our selection of fiction from around the globe.
                        Whether you seek to expand your horizons, unwind with a thrilling story,
                        or simply indulge in the joy of reading, our curated selection
                        ensures there's something for everyone. </p>

                    <Link to="/">
                    <button className='bg-pink-500 px-4 py-2 rounded-md hover:bg-pink-700 duration-200 mt-6 text-white'>Back</button>
                    </Link>

                </div>
                <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
                    {
                        list.map((item) => (
                            <Cards item={item} key={item.id} />
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Course