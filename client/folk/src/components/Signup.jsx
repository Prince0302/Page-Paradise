import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'
import { useForm } from "react-hook-form"
function Signup() {
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
                       
                        <h3 className="font-bold text-lg">Signup</h3>

                        <div className="mt-4 space-y-2">
                            <span>Name</span>
                            <br />
                            <input type="text" placeholder="Enter your name" className="w-80 border px-2 rounded-md outline-none" {...register("name", { required: true })} />
                            <br />
                            {errors.name && <span className="text-sm text-red-500 ">This field is required</span>}
                        </div>

                        <div className="mt-4 space-y-2">
                            <span>Email</span>
                            <br />
                            <input type="email" placeholder="Enter your email" className="w-80 border px-2 rounded-md outline-none" {...register("email", { required: true })} />
                            <br />
                            {errors.email && <span className="text-sm text-red-500 ">This field is required</span>}
                        </div>

                        <div className="mt-6 space-y-2">
                            <span>Password</span>
                            <br />
                            <input type="password" placeholder="Enter your password" className="w-80 border px-2 rounded-md outline-none" {...register("password", { required: true })} />
                            <br />
                            {errors.password && <span className="text-sm text-red-500 ">This field is required</span>}
                        </div>
                        <div className="mt-4 flex justify-around text-xl">
                            <button className="bg-pink-500 border rounded-md px-3 py-1 text-white hover:bg-slate-700">Register</button>
                            <p>
                                Have account? {" "} <span className="underline text-blue-500 cursor-pointer" onClick={() => document.getElementById("my_modal_3").showModal()}>login</span> {" "}
                                <Login />
                            </p>

                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup