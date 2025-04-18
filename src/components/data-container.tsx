export default function DataContainer(props: { className: string }) {
    return (
        <div className={"flex flex-col bg-gray-50 rounded-lg text-black" + " " + props.className}>
            <div className="flex flex-row w-full border-2 border-black border-l-0 border-r-0 border-t-0">
                <div className="w-1/3 text-center py-1">
                    <h2>Ouvertures</h2>
                </div>
                <div className="w-1/3 text-center border-2 border-black border-t-0 border-b-0 py-1">
                    <h2>Risques</h2>
                </div>

                <div className="w-1/3 text-center py-1">
                    <h2>Moyens de prévention</h2>
                </div>
            </div>

            <div className="w-1/3 self-center h-full border-2 border-black border-t-0 border-b-0"></div>
        </div>
    )
}