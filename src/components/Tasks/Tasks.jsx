import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import AddTask from "../AddTask/AddTask";
import ToDo from './../ToDo/ToDo';
import Doing from './../Doing/Doing';
import Done from './../Done/Done';
import TaskColumn from '../TaskColumn/TaskColumn';


export default function Tasks() {
    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    return (
        <div className='flex flex-col items-center justify-center'>
            {/* <h1 className="text-6xl">
                Tasks
            </h1> */}
            <div className='mt-10'>
                <button
                    type="button"
                    onClick={openModal}
                >
                    <div
                        className="w-96 h-20 relative grid mb-4 -mt-6 overflow-hidden text-white shadow-lg  place-items-center rounded-xl bg-gradient-to-tr from-blue-800  to-blue-950 bg-clip-border shadow-gray-900/20">
                        <h3 className="block font-sans text-3xl antialiased font-semibold leading-snug tracking-normal text-white ">
                            Add Task
                        </h3>
                    </div>
                </button>
                <Transition appear show={isOpen} as={Fragment}>
                    <Dialog as="div" className="relative z-10" onClose={closeModal}>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className="fixed inset-0 bg-black/25" />
                        </Transition.Child>

                        <AddTask closeModal={closeModal} />
                    </Dialog>
                </Transition>

            </div>
            <div className="grid grid-cols-3 mx-auto">
                <TaskColumn />
                <TaskColumn />
                <TaskColumn />
            </div>
            {/* <div className="grid grid-cols-3 mx-auto">
                <ToDo />
                <Doing />
                <Done />
            </div> */}
        </div>
    )
}
