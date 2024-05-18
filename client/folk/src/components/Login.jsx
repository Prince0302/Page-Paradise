import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"

function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => console.log(data)
    return (
        <div>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box bg-white dark:text-black">
                    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 hover:bg-slate-400">✕</Link>

                        <h3 className="font-bold text-lg">Login</h3>
                        <div className="mt-4 space-y-2">
                            <span>email</span>
                            <br />
                            <input type="email" placeholder="Enter your email" className="w-80 border px-2 rounded-md outline-none"  {...register("email", { required: true })} />
                            <br />
                            {errors.email && <span className="text-sm text-red-500 ">This field is required</span>}
                        </div>

                        <div className="mt-8 space-y-2">
                            <span>password</span>
                            <br />
                            <input type="password" placeholder="Enter your password" className="w-80 border px-2 rounded-md outline-none"  {...register("password", { required: true })} />
                            <br />
                            {errors.password && <span className="text-sm text-red-500">This field is required</span>}
                        </div>
                        <div className="mt-4 flex justify-around">
                            <button className="bg-pink-500 border rounded-md px-3 py-1 text-white hover:bg-slate-700">Login</button>
                            <p>
                                Not registered? {" "} <Link to="/signup" className="underline text-blue-500 cursor-pointer ">Signup</Link> {" "}
                            </p>

                        </div>
                    </form>
                </div>
            </dialog>
        </div>
    )
}

export default Login