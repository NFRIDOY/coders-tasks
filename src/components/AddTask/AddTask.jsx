import { useForm } from "react-hook-form"
import useAxios from './../../hooks/useAxios';
import useAuth from './../../hooks/useAuth';


// eslint-disable-next-line react/prop-types
export default function AddTask({ closeModal }) {
    const axios = useAxios();
    const { user } = useAuth();
    const {
        register,
        handleSubmit,
    } = useForm()

    const onSubmit = (taskData) => {
        const taskObj = {
            ...taskData,
            name: user?.displayName,
            email: user?.email,
            status: "todo"
        }
        console.log(taskObj);
        axios.post(`/tasks`, taskObj)
            .then((res) => {
                console.log(res.data);
            })
        console.log(taskData)

    }

    // console.log(watch("example")) // watch input value by passing the name of it

    return (
        <div className="flex justify-center">

            <form onSubmit={handleSubmit(onSubmit)}
                className="relative flex flex-col text-gray-700 bg-white shadow-md w-96 rounded-xl bg-clip-border border-2 border-gray-400">

                <div className="flex flex-col gap-4 p-6">
                    <div className="relative h-11 w-full min-w-[200px]">
                        <input
                            id='title'
                            name='title'
                            className="w-full h-full px-3 py-3 font-sans text-sm font-normal transition-all bg-transparent border rounded-md peer border-blue-gray-200 border-t-transparent text-blue-gray-700 outline outline-0 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                            placeholder=" "
                            {...register("title", { required: true })}
                        />
                        <label
                            className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                            Title
                        </label>
                    </div>
                    <div className="relative h-11 w-full min-w-[200px]">
                        <input
                            id='description'
                            name='description'
                            type="text"
                            className="w-full h-full px-3 py-3 font-sans text-sm font-normal transition-all bg-transparent border rounded-md peer border-blue-gray-200 border-t-transparent text-blue-gray-700 outline outline-0 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                            placeholder=" "
                            {...register("description", { required: true })}
                        />
                        <label
                            className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                            Description
                        </label>
                    </div>
                </div>
                <div className="p-6 pt-0">
                    <div className="space-y-3">
                        <button
                            // onClick={hangleGoogleSignIn}
                            className="block w-full select-none rounded-lg bg-gradient-to-tr from-blue-700  to-zinc-800 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none btn btn-info"
                            type="submit"
                            onClick={closeModal}
                        >
                            Add
                        </button>
                    </div>
                    {/* <p className="flex justify-center mt-6 font-sans text-sm antialiased font-light leading-normal text-inherit">
                        Don&apos;t have an account?
                        <Link to={"/reg"}
                            className="block ml-1 font-sans text-sm antialiased font-bold leading-normal text-blue-gray-900 text-info">
                            Sign up
                        </Link>
                    </p> */}
                </div>
            </form>
        </div>
    )
}
