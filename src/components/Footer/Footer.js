import React from "react";
import css from "./Footer.module.css";
import Logo from "../../assets/logo.png";
import {
  InboxIcon,
  PhoneIcon,
  LocationMarkerIcon,
  LoginIcon,
  UsersIcon,
  LinkIcon,
} from "@heroicons/react/outline";
const Footer = () => {
  return (
    <div className={css.cFooterWrapper}>
      <hr />
      <div className={css.cFooter}>
        <div className={css.logo}>
          <img src={Logo} />
          <span>florence</span>
        </div>

        <div className={css.block}>
          <div className={css.detail}>
            <span>Contact Us</span>
            <span className={css.pngLine}>
              <LocationMarkerIcon className={css.Icon} />
              <span>111 north avenue Orlando ,FL 32801</span>
            </span>
            <span className={css.pngLine}>
              <PhoneIcon className={css.Icon} />
              <span>352-890-987</span>
            </span>
            <span className={css.pngLine}>
              <InboxIcon className={css.Icon} />
              <span>support@amazon.com</span>
            </span>
          </div>
        </div>

        <div className={css.block}>
          <div className={css.detail}>
            <span>Account</span>
            <span className={css.pngLine}>
              <LoginIcon className={css.Icon} />
              <span>Sign In</span>
            </span>
          </div>
        </div>

        <div className={css.block}>
          <div className={css.detail}>
            <span>Company</span>
            <span className={css.pngLine}>
              <UsersIcon className={css.Icon} />
              <span>About Us</span>
            </span>
          </div>
        </div>

        <div className={css.block}>
          <div className={css.detail}>
            <span>Resources</span>
            <span className={css.pngLine}>
              <LinkIcon className={css.Icon} />
              <span>Safety Privacy & Terms</span>
            </span>
          </div>
        </div>
 </div>

 <div className={css.copyRight}>
    <span>copyRight &#169; 2023 by Amazon , Inc.</span>
    <span>All rights reserved </span>
 </div>
    </div>
  );
};

export default Footer;
