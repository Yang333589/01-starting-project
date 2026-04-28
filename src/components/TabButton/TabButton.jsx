import "./TabButton.css";



export default function TabButton({ children, isSelected, ...props }) {
    function handleClick() {
        console.log("Hello World");
    }
    //closure
    return (
        <li>
            <button className={isSelected ? 'active' : ''} {...props}>
                {children}
            </button>
        </li>
    )
}