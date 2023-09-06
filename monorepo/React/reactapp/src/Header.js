import './App.css';

function Header(prop) {
  return (
    <div className="Header">
      <h3>{prop.title}</h3>
      <p>{prop.part}</p>
    </div>
  );
}

export default Header;
