
import Customer from './components/Customer';


function App() {

  const customer = [{
    id : 1,
    img : "http://placeimg.com/64/64/1",
    name: "나동빈",
    birthday: "961221",
    gender: '남자',
    job : "대학생"
  },
    {id : 2,
    img : "http://placeimg.com/64/64/2",
    name: "박경우",
    birthday: "961027",
    gender: '남자',
    job : "대학생"
  },
  {id : 3,
    img : "http://placeimg.com/64/64/3",
    name: "김정원",
    birthday: "981223",
    gender: '여자',
    job : "대학생"
  },
]


  return (
    <div className="App">
      <h2>고객관리 프로그램 만들기</h2>
      {
        customer.map(c=>{
          return(
            <Customer
            key={c.id}
            id={c.id}
            img={c.img}
            name={c.name}
            birthday={c.birthday}
            gender={c.gender}
            job={c.job}
            />
          )
        })
      }
    </div>
  );
}

export default App;
