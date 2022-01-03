import './App.css';
import Customer from './components/Customer';
function App() {


  const customer = {
    id : 1,
    name: "나동빈",
    birthday: "961221",
    gender: '남자',
    job : "대학생"
  }

  return (
    <div className="App">

      <h2>고객관리 프로그램 만들기</h2>
      <Customer/>
      
 

    </div>
  );
}

export default App;
