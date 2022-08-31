import "./TopBar.css";

export default function TopBar() {
  return (
    <div className="top">
      <div className="topLeft">
        <i className="fa-brands fa-linkedin"></i>

        <i className="fa-brands fa-github"></i>
        <i className="fa-brands fa-medium"></i>
      </div>
      <div className="topRight">
        <img src="" alt="" />
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">HOME</li>
          <li className="topListItem">ABOUT</li>
          <li className="topListItem">LOGOUT</li>
        </ul>
      </div>
    </div>
  );
}
