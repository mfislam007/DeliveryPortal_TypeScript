import React, { useState, useEffect } from "react";

import moreOptions from "../../assets/images/commonicons/options-icon.png";
import defaultPortrait from "../../assets/images/commonicons/portrait-icon.png";
import "./UserInfoBar.css";

type Props = {
  name: string;
  company: string;
  portrait?: string;
};

const UserInfoBar: React.FC<Props> = (props): JSX.Element => {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [portrait, setPortrait] = useState(undefined as string);

  useEffect(() => {
    setName(props.name);
    setCompany(props.company);
    if (props.portrait !== undefined) {
      setPortrait(props.portrait);
    }
  }, [props]);

  return (
    <div className="userInfoBarContainer">
      <div className="userInfoBarPortrait">
        <img
          src={portrait === undefined ? defaultPortrait : portrait}
          alt="portrait"
          width={30}
          height={30}
        />
      </div>
      <div className="userInfoBarName">{name}</div>
      <div className="userInfoBarCompany">{company}</div>
      <div className="userInfoBarSettingsImg">
        <img src={moreOptions} alt="settings" width={25} height={25} />
      </div>
    </div>
  );
};

export default UserInfoBar;
