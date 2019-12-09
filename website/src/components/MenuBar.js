import React, { useState } from "react";
import { Menu, Input } from "semantic-ui-react";
import { Link } from "react-router-dom";

function MenuBar() {
  const pathname = window.location.pathname;
  const path = pathname === "/" ? "Movies" : pathname.substr(1) || pathname ==="tvshows" ? "TV Shows" : pathname.substr(1);

  const [activeItem, setActiveItem] = useState(path);

  const handleItemClick = (e, { name }) => {
    setActiveItem(name);
  }

  return (
      <Menu pointing secondary size="large" color="orange">
      <Menu.Item>
        <img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/21/sailboat_26f5.png" />
      </Menu.Item>
      <Menu.Item
        name="Movies"
        active={activeItem === "Movies"}
        onClick={handleItemClick}
        as={Link}
        to=""
      />
      <Menu.Item
        name="TV Shows"
        active={activeItem === "TV Shows"}
        onClick={handleItemClick}
        as={Link}
        to="/tvshows"
      />
      <Menu.Menu position="right">
      <Menu.Item>
            <Input
              transparent
              icon={{ name: "search", link: true }}
              placeholder="Search..."
            />
          </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
}

export default MenuBar;