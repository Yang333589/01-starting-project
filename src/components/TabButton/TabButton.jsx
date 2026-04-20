import "./TabButton.css";



export default function TabButton({ children, onSelect }) {
    function handleClick() {
        console.log("Hello World");
    }
    //closure
    return (
        <li>
            <button onClick = {onSelect}>{children}</button>
        </li>
    )
}