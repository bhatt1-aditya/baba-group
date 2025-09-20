import React from "react";
import UserNavbar from "../../components/common/UserNavbar";
import UserFooter from "../../components/common/UserFooter";

const UserLayout = (props) => {
  return (
    <React.Fragment>
      <UserNavbar />
      {props.children}
      <UserFooter />
    </React.Fragment>
  );
};

export default UserLayout;
