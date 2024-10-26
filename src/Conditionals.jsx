// How to add conditions in React components 
import './Conditionals.css'; 


function Item({ isRequired, name }) {
    if(isRequired) {
        return <li className='item'>{name} ✅</li>
    }
    return <li className='item'>{name} ❌</li>
}


function Conditionals() {

    return (
        <>
        <div>
            <ul>
            <Item 
                isRequired={true}
                name= "Sugar"
            />
            <Item 
                isRequired={true}
                name= "Wheat"
            />
            <Item 
                isRequired={true}
                name= "Rice"
            />
            <Item 
                isRequired={false}
                name= "Radish"
            />
            </ul>
        </div>
        </>
    )
}; 

export default Conditionals;

// isRequired & name function parameters: - showing warning (their types is not defined Hint: - TypeScript)