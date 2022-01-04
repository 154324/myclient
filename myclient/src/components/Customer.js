
export default function Customer(props){
    return (
        <div>
            <h2>({props.id}) {props.name}</h2>
            <p><img src={props.img} alt="profile"></img></p>
            <p>{props.birthday}</p>
            <p>{props.gender}</p>
            <p>{props.job}</p>
        </div>
    )
}

