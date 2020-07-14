import React, { useState, useEffect } from "react";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import MoreVertIcon from "@material-ui/icons/MoreVert";

import "./UserInfoBar.scss";

type Props = {
  name: string;
  company: string;
  portrait?: string;
};

const UserInfoBar: React.FC<Props> = (props): JSX.Element => {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [portraitSrc, setPortraitSrc] = useState(undefined as string);

  useEffect(() => {
    setName(props.name);
    setCompany(props.company);

    if (props.portrait !== undefined) {
      setPortraitSrc(props.portrait);
    }
  }, [props]);

  return (
    <div className="userInfoBarContainer">
      <div className="userInfoBarPortrait">
        {portraitSrc === undefined ? (
          <AccountCircleIcon fontSize="large" />
        ) : (
          <img src={portraitSrc} alt="portrait" width={30} height={30} />
        )}
      </div>
      <div className="userInfoBarName">{name}</div>
      <div className="userInfoBarCompany">{company}</div>
      <div className="userInfoBarSettingsImg">
        <MoreVertIcon />
      </div>
    </div>
  );
};

export default UserInfoBar;
