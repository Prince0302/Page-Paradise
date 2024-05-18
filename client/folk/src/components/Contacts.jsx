import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"

function Contacts() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => console.log(data)
    return (
        <>
            <div className=" bg-slate-300 flex h-screen justify-center items-center">
                <div className="w-[600px]">
                    <div className="modal-box bg-white">
                        <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 hover:bg-slate-400">✕</Link>


                            <h2 className="font-bold text-lg">Contacts</h2>
                            <div className="mt-4 space-y-2">
                                <span>Name</span>
                                <br />
                                <input type="text" placeholder="Enter your name" className="w-80 border px-2 rounded-md outline-none " {...register("name", { required: true })} />
                                <br />
                                {errors.name && <span className="text-sm text-red-500 ">This field is required</span>}
                            </div>

                            <div className="mt-4 space-y-2">
                                <span>Phone</span>
                                <br />
                                <input type="tel" placeholder="Phone no" className="w-80 border px-2 rounded-md outline-none " {...register("phone", { required: true })} />
                                <br />
                                {errors.phone && <span className="text-sm text-red-500 ">This field is required</span>}
                            </div>

                            <div className="mt-4 space-y-2">
                                <span>Message</span>
                                <br />
                                <textarea className="w-80 border px-2 rounded-md h-40 outline-none border-slate-300"{...register("message", { required: true })}>

                                </textarea >
                                <br />
                                {errors.message && <span className="text-sm text-red-500 ">This field is required</span>}
                            </div>
                            <div className="mt-4 ">
                                <button className="bg-pink-500 border rounded-md px-3 py-1 text-white hover:bg-slate-700">Submit</button>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contacts