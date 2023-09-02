import React from 'react'

export default function events() {
    return (
        <div className='align-center justify-center mt-5 '>
            <h1 className='text-white text-center text-3xl mb-5 font-bold'>🎉Globle Upcoming Events🎉</h1>
            <div className='gap-5 flex flex-col px-10'>
                <a href='https://developers.google.com/community/gdsc' target="_blank">
                    <div className="card m-w-24 bg-base-100 shadow-xl">
                        <figure><img src="/1.png" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                GDSC Hackathon!
                                <div className="badge badge-secondary">NEW</div>
                            </h2>
                            <p>A major hackathon presented by GDSC</p>
                        </div>
                    </div>
                </a>
                <a href='https://mlh.io' target="_blank">
                    <div className="card m-w-24 bg-base-100 shadow-xl">
                        <figure><img src="/2.png" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                MLH Globle Hack Week!
                                <div className="badge badge-secondary">NEW</div>
                            </h2>
                            <p>Hack week presented by MLH</p>
                        </div>
                    </div>
                </a>
                <a href='https://hacktoberfest.com' target="_blank">
                    <div className="card m-w-24 bg-base-100 shadow-xl">
                        <figure><img src="/3.png" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                Hacktober Fest!
                                <div className="badge badge-secondary">NEW</div>
                            </h2>
                            <p>Fest of tasks presented by Hactober fest</p>
                        </div>
                    </div>
                </a>
                <a href='https://ignite.microsoft.com/en-US/home' target="_blank">
                    <div className="card m-w-24 bg-base-100 shadow-xl">
                        <figure><img src="/4.png" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                Microsoft Ignite!
                                <div className="badge badge-secondary">NEW</div>
                            </h2>
                            <p>A feature driven event for Microsoft Ignite</p>
                        </div>
                    </div>
                </a>

            </div>
        </div>
    )
}
