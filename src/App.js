import logo from './logo.svg';
import TDT_FuncDemo from './component/TDT_FuncDemo';
import TDT_ClassComp from './component/TDT_ClassComp';

function App() {
  const users = {
    usersName:"k22cnt3",
    password:"123456@",
    fistName:"Truong Dinh",
    lastName:"Tuyen"
  }

  function formatName(users){
    return <h2> xin chao,{users.fistName} {users.lastName} </h2>;
  }

  return (
    <div className="App">
      <div>
        <p>fullName: {users.fistName} {users.lastName}</p>
        {formatName(users)}
      </div>
      <div>
        <TDT_FuncDemo/>
        <TDT_FuncDemo usersName="TDT" fullName="Truong Dinh Tuyen" age="20" />
      </div>
      <div>
        <TDT_ClassComp />
        <TDT_ClassComp company="fit-NTU - K22cnt3" course="ReactJS"/>
        <TDT_ClassComp company="fit-NTU - K22cnt1" course="ReactJS 1"/>
        <TDT_ClassComp company="fit-NTU - K22cnt4" course="ReactJS 2"/>
        <TDT_ClassComp company="fit-NTU - K22cnt2" course="ReactJS 3"/>
      </div>
    </div>
  );
}

export default App;