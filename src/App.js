import "./styles.css";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App(props) {
  return (
    <div className="App">
      <p>Themba Ntimane </p>
      <FriendsList />
    </div>
  );
}

function FriendsList(props) {
  return (
    <>
      <div className="FriendsList">
        <ul>
          <li>
            <Friend />
          </li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </>
  );
}

function Friend(props) {
  return (
    <div>
      <img src={props.image} />
      <h1>{props.name}</h1>
      <p>{props.message}</p>
      <button>Select</button>
    </div>
  );
}
