import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import LoginGoogle from "./LoginGoogle";

const Navbar = ({ authenticate, setAuthenticate }) => {
  const menuList = [
    "여성",
    "Divided",
    "남성",
    "신생아/유아",
    "아동",
    "H&M HOME",
    "Sale",
    "지속가능성",
  ];
  const navigate = useNavigate();
  const search = (event) => {
    if (event.key == "Enter") {
      let keyword = event.target.value;
      event.target.value = "";

      navigate(`/?q=${keyword}`);
    }
  };
  return (
    <div>
      <div>
        <LoginGoogle setAuthenticate={setAuthenticate}/>
      </div>
      <div className="logo-image mb-4" onClick={()=>navigate(`/`)}>
        <img
          src="https://logos-world.net/wp-content/uploads/2020/04/HM-Logo-1999-present.jpg"
          width="120px"
        />
      </div>
      <div>
        <ul className="menu-list">
          {menuList.map((menu, index) => (
            <li key={index}>{menu}</li>
          ))}
        </ul>
        <div className="input-area">
          <FontAwesomeIcon icon={faMagnifyingGlass} color="gray" />
          <input
            type="text"
            placeholder="제품 검색"
            className="input-box"
            onKeyPress={(event) => search(event)}
          />
          <div className="under-line"></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
