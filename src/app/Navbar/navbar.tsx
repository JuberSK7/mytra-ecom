import React from "react";

import {
  ContainerHeader,
  Nav,
  NavLeft,
  NavRight,
  ItemBox,
  Profile,
  Wishlist,
  Bag,
} from "./style";

import Logo from "../../images/mynta.png";
import { FaRegUser } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import { BsBagCheck } from "react-icons/bs";
interface Props {}

export const Navbar = (props: Props) => {
  return (
    <div>
      <ContainerHeader>
        <Nav>
          <NavLeft>
            <img src={Logo} alt="logo" />
            <ul>
              <li>Men</li>
              <li>Women</li>
              <li>Kids</li>
              <li>Home</li>
              <li>Buauty</li>
              <li>Studio</li>
            </ul>
          </NavLeft>
          <NavRight>
            <input
              placeholder="Search for product, brands and more"
              value=""
              data-reactid="904"
            />
            <ItemBox>
              <Profile>
                <FaRegUser />
                Profile
              </Profile>
              <Wishlist>
                <AiOutlineHeart />
                Wishlist
              </Wishlist>
              <Bag>
                <BsBagCheck />
                Bag
              </Bag>
            </ItemBox>
          </NavRight>
        </Nav>
      </ContainerHeader>
    </div>
  );
};
