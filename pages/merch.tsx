import React from 'react'
export default function events() {
    return (
        <div className=' flex flex-col items-center mt-5 '>
            <h1 className='text-white text-center text-3xl mb-5 font-bold'>⚡️Top Merchandies⚡️</h1>
            <div className='gap-5 flex flex-col place-content-center'>
                    <div className="card w-96 bg-neutral-900	 shadow-xl">
                        <figure className="px-10 pt-10 ">
                            <img src="/ts1.png" alt="Shoes" className="rounded-xl " />
                        </figure>
                        <div className="card-body items-center text-center">
                        <div className="badge badge-secondary">399/-</div>
                            <h2 className="card-title">Move On!</h2>
                            <a href='https://rzp.io/l/hm1lhFaZ' target="_blank">
                            <div className="card-actions">
                                <button className="btn bg-emerald-500 text-white">Buy Now</button>
                            </div>
                            </a>
                        </div>
                    </div>

                    <div className="card w-96 bg-neutral-900	 shadow-xl">
                        <figure className="px-10 pt-10 ">
                            <img src="/ts2.png" alt="Shoes" className="rounded-xl " />
                        </figure>
                        <div className="card-body items-center text-center">
                        <div className="badge badge-secondary">399/-</div>
                            <h2 className="card-title">Positivity!</h2>
                            <a href='https://rzp.io/l/hm1lhFaZ' target="_blank">
                            <div className="card-actions">
                                <button className="btn bg-emerald-500 text-white">Buy Now</button>
                            </div>
                            </a>
                        </div>
                    </div>

            </div>
        </div>
    )
}
