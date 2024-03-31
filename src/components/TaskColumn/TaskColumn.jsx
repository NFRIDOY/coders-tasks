

// eslint-disable-next-line react/prop-types
export default function TaskColumn({ sectionName="SECTION", sectionTasks = [] }) {
    return (
        <div className="border-2 ">
            <div className="bg-info text-white w-96 flex justify-between text-3xl px-4 py-3">
                <h1>
                    {sectionName}
                </h1>
                <h2>
                    {sectionTasks?.length}
                </h2>
            </div>
        </div>
    )
}
