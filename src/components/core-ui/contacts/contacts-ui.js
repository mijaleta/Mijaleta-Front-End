import { IconButton, Snackbar, SnackbarContent } from "@mui/material";
import React, { useContext } from "react";
import { FiAtSign, FiPhone } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { ThemeContext } from "../../../contexts/theme-context";
import { contactsData } from "../../../data/contactsData";

import {
  FaFacebook,
  FaGithub,
  FaLinkedinIn,
  FaMediumM,
  FaStackOverflow,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import "./contacts.css";
const ContactUI = ({
  handleClose,
  classes,
}) => {
   
  const [errMsg, setErrMsg] = React.useState('');
  const [open, setOpen] = React.useState(false);
  const { theme } = useContext(ThemeContext);

 
  return (
    <div
      className="contacts"
      id="contacts"
      style={{ backgroundColor: theme.secondary }}
    >
      <div className="contacts--container">
        <div className="contacts-body">
          <div className="contacts-form">
            <div className="contact-form-image">
              <img src="/MIRETU.jpg" alt="Contact Form" style={{ maxWidth: '800px', maxHeight: '600px', width: '100%', height: 'auto' }} />
            </div>
            <Snackbar
              anchorOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
              open={open}
              autoHideDuration={4000}
              onClose={handleClose}
            >
              <SnackbarContent
                action={
                  <React.Fragment>
                    <IconButton
                      size="small"
                      aria-label="close"
                      color="inherit"
                      onClick={handleClose}
                    >
                      <IoClose fontSize="small" />
                    </IconButton>
                  </React.Fragment>
                }
                style={{
                  backgroundColor: theme.primary,
                  color: theme.secondary,
                  fontFamily: "var(--primaryFont)",
                }}
                message={errMsg}
              />
            </Snackbar>
          </div>

          <div className="contacts-details">
            <a
              href={`mailto:${contactsData.email}`}
              className="personal-details"
            >
              <div className={classes.detailsIcon}>
                <FiAtSign />
              </div>
              <p style={{ color: theme.tertiary }}>{contactsData.email}</p>
            </a>
            <a href={`tel:${contactsData.phone}`} className="personal-details">
              <div className={classes.detailsIcon}>
                <FiPhone />
              </div>
              <p style={{ color: theme.tertiary }}>{contactsData.phone}</p>
            </a>
            <div className="personal-details">
              <div className={classes.detailsIcon}>
                <HiOutlineLocationMarker />
              </div>
              <p style={{ color: theme.tertiary }}>{contactsData.address}</p>
            </div>

            <div className="socialmedia-icons">
              {contactsData.twitter && (
                <a
                  href={contactsData.twitter}
                  target="_blank"
                  rel="noreferrer"
                  className={classes.socialIcon}
                >
                  <FaTwitter aria-label="Twitter" />
                </a>
              )}
              {contactsData.github && (
                <a
                  href={contactsData.github}
                  target="_blank"
                  rel="noreferrer"
                  className={classes.socialIcon}
                >
                  <FaGithub aria-label="GitHub" />
                </a>
              )}
              {contactsData.linkedIn && (
                <a
                  href={contactsData.linkedIn}
                  target="_blank"
                  rel="noreferrer"
                  className={classes.socialIcon}
                >
                  <FaLinkedinIn aria-label="LinkedIn" />
                </a>
              )}

              {contactsData.medium && (
                <a
                  href={contactsData.medium}
                  target="_blank"
                  rel="noreferrer"
                  className={classes.socialIcon}
                >
                  <FaMediumM aria-label="Medium" />
                </a>
              )}

              {contactsData.youtube && (
                <a
                  href={contactsData.youtube}
                  target="_blank"
                  rel="noreferrer"
                  className={classes.socialIcon}
                >
                  <FaYoutube aria-label="YouTube" />
                </a>
              )}

              {contactsData.stackOverflow && (
                <a
                  href={contactsData.stackOverflow}
                  target="_blank"
                  rel="noreferrer"
                  className={classes.socialIcon}
                >
                  <FaStackOverflow aria-label="Stack Overflow" />
                </a>
              )}
              {contactsData.facebook && (
                <a
                  href={contactsData.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className={classes.socialIcon}
                >
                  <FaFacebook aria-label="facebook" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
      <img src={theme.contactsimg} alt="contacts" className="contacts--img" />
    </div>
  );
};

export default ContactUI;
