import Tool from "./tool";

export default function ToolBox(props: {className: string}) {
    return (
        <div className={"flex flex-col border-2 p-5 items-center justify-around border-black bg-gray-100 rounded-2xl "+props.className}>
            <Tool href="/tools/cursor.png"></Tool>
            <Tool href="/tools/point-drawer.png"></Tool>
            <Tool href="/tools/square.png"></Tool>
            <Tool href="/tools/rubber.png"></Tool>
        </div>
    )
}