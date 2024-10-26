import './App.css'


const userDetails = [
  {
    username: "Priyanshu", 
    email: "priyanshu@example.com", 
    password: "pass1234", 
  }, 
  {
    username: "Ramesh", 
    email: "ramesh@example.com", 
    password: "rampass123", 
  }
]; 

function Users() {
 return (
  <>
  <h4>{userDetails[0].username}</h4>
  <h4>{userDetails[0].email}</h4>
  </>
 )
}

function MyButton() {
  return(
    <div>
      <button className="btn">Submit</button>
    </div>
  )
}


function App() {
  return(
    <>
      <h1>Hello React from Priyanshu</h1>
      <MyButton/>
      <Users />
    </>
  )
}

export default App; 

// Need to understand how to create for loop to display the values for array object. 
