"use client";

import React, { useState, useEffect, useRef, useContext } from "react";
import { TextField, MenuItem } from "@mui/material";
import classes from "./tabBar.module.css";
import Button from "../Ui/Button";
import { TAB_BAR, WORK_AREA } from "../../utils/constants";
import { store } from "@/app/context/context";

const TabBar = (): JSX.Element => {
  const [clickL, setClickL] = useState(true);
  const [clickR, setClickR] = useState(false);
  const [nameL, setNameL] = useState("");
  const [phoneNumberL, setPhoneNumberL] = useState("");
  const [emailL, setEmailL] = useState("");
  const [message, setMessage] = useState("");
  const [nameR, setNameR] = useState("");
  const [phoneNumberR, setPhoneNumberR] = useState("");
  const [emailR, setEmailR] = useState("");
  const [workArea, setWorkArea] = useState("");
  const [cvLoaded, setCvLoaded] = useState(false);
  const [cvName, setCvName] = useState("");
  const [cv, setCv] = useState<Buffer | string>("");
  const [messageSubmitted, setMessageSubmitted] = useState(false);
  const [cvSubmitted, setCvSubmitted] = useState(false);
  const cvRef = useRef<HTMLInputElement>(null);
  const { language }: any = useContext(store);
  const [width, setWidth] = useState(0);

  const handleResolution = () => setWidth(window.innerWidth);

  useEffect(() => {
    if (typeof window !== "undefined") {
      handleResolution();
      window.addEventListener("resize", handleResolution);

      return () => {
        window.removeEventListener("resize", handleResolution);
      };
    }
  }, []);

  const handleClickL = () => {
    if (!clickL) {
      setClickL(true);
      setClickR(false);
      setNameL("");
      setPhoneNumberL("");
      setEmailL("");
      setMessage("");
    }
  };

  const handleClickR = () => {
    if (!clickR) {
      setClickL(false);
      setClickR(true);
      setNameR("");
      setPhoneNumberR("");
      setEmailR("");
      setWorkArea("");
    }
  };

  const validateName = (name: string): boolean => {
    return /^[A-Za-z\s]+$/.test(name);
  };

  const validatePhone = (phone: string): boolean => {
    return phone !== "" && /^\d+$/.test(phone);
  };

  const validateEmail = (email: string): boolean => {
    return email !== "" && /^\S+@\S+\.\S+$/.test(email);
  };

  const validateMessage = (message: string): boolean => {
    return message !== "";
  };

  const handleSendClick = async () => {
    if (
      validateName(nameL) &&
      validatePhone(phoneNumberL) &&
      validateEmail(emailL) &&
      validateMessage(message)
    ) {
      try {
        const response = await fetch("/api/sendMessageEmail", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: emailL,
            to: "jefatura.rrhh@bencen.com.ar", // Real Email: jefatura.rrhh@bencen.com.ar / Test Email: webcraftersok@gmail.com
            subject: "New message from your website",
            text: `Hello Analía, you have a message from Bencen website,\n\nName: ${nameL}\nPhone Number: ${phoneNumberL}\nMessage: \n${message}`,
          }),
        });

        if (response.ok) {
          setMessageSubmitted(true);
        } else {
          alert("Failed to send the email.");
        }
      } catch (error) {
        console.error("Error:", error);
        alert("Failed to send the email.");
      }
    } else {
      // Alert for incorrect values:
      if (!validateName(nameL)) alert("Please enter a valid Full Name.");
      if (!validatePhone(phoneNumberL))
        alert("Please enter a valid Phone Number.");
      if (!validateEmail(emailL)) alert("Please enter a valid Email.");
      if (!validateMessage(message)) alert("Please enter a message.");
    }
  };

  const handleApplyClick = async () => {
    if (
      validateName(nameR) &&
      validatePhone(phoneNumberR) &&
      validateEmail(emailR) &&
      validateMessage(workArea) &&
      cvLoaded
    ) {
      try {
        const response = await fetch("/api/sendCvEmail", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: emailR,
            to: "jefatura.rrhh@bencen.com.ar", // Real Email: jefatura.rrhh@bencen.com.ar / Test Email: webcraftersok@gmail.com
            subject: `CV - ${nameR} - ${workArea}`,
            text: `Hello Analía, you have a new CV attached from Bencen website,\n\nName: ${nameR}\nPhone Number: ${phoneNumberR}\nWork Area: ${workArea}`,
            attachments: [
              {
                filename: `CV - ${nameR} - ${workArea}.pdf`,
                content: Buffer.from(cv).toString("base64"),
              },
            ],
          }),
        });

        if (response.ok) {
          setCvSubmitted(true);
        } else {
          alert("Failed to send the email.");
        }
      } catch (error) {
        console.error("Error:", error);
        alert("Failed to send the email.");
      }
    } else {
      // Alert for incorrect values:
      if (!validateName(nameR)) alert("Please enter a valid Full Name.");
      if (!validatePhone(phoneNumberR))
        alert("Please enter a valid Phone Number.");
      if (!validateEmail(emailR)) alert("Please enter a valid Email.");
      if (!validateMessage(workArea)) alert("Please select a Work Area.");
      if (!cvLoaded) alert("Please upload your CV.");
    }
  };

  const handleSelectClick = () => {
    // Programmatically trigger file input click:
    if (cvRef.current) {
      cvRef.current.click();
    }
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setCvLoaded(true);
      setCvName(e.target.files?.[0].name);

      try {
        const dataBuffer = await e.target.files?.[0].arrayBuffer();
        if (dataBuffer) {
          // Convert Uint8Array to Buffer:
          const data = Buffer.from(new Uint8Array(dataBuffer));
          setCv(data);
        }
      } catch (error) {
        console.error("Error reading PDF file:", error);
      }
    }
  };

  const handleCancelCvClick = () => {
    setCvLoaded(false);
    setCvName("");
    setCv("");
  };

  const renderTextField = (item: any) => (
    <TextField
      value={item.value}
      label={item.label}
      onChange={(e) => item.onChange(e.target.value)}
      fullWidth={true}
      margin="normal"
      required={true}
      multiline={item.multiline || false}
      rows={item.rows || 1}
    />
  );

  const renderSelectField = (item: any) => (
    <TextField
      select
      value={item.value}
      label={item.label}
      onChange={(e) => item.onChange(e.target.value)}
      fullWidth={true}
      margin="normal"
      required={true}
    >
      {item.options.map((value: string, index: number) => (
        <MenuItem key={index} value={value}>
          {value}
        </MenuItem>
      ))}
    </TextField>
  );

  type TabItem = {
    key: number;
    content: React.ReactNode;
  };

  const messageItems: TabItem[] = [
    {
      key: 1,
      content: renderTextField({
        value: nameL,
        label: TAB_BAR[language][2],
        onChange: setNameL,
      }),
    },
    {
      key: 2,
      content: renderTextField({
        value: phoneNumberL,
        label: TAB_BAR[language][3],
        onChange: setPhoneNumberL,
      }),
    },
    {
      key: 3,
      content: renderTextField({
        value: emailL,
        label: TAB_BAR[language][4],
        onChange: setEmailL,
      }),
    },
    {
      key: 4,
      content: renderTextField({
        value: message,
        label: TAB_BAR[language][5],
        onChange: setMessage,
        multiline: true,
        rows: 8,
      }),
    },
    {
      key: 5,
      content: messageSubmitted ? (
        <div className={classes.successMessage}>{TAB_BAR[language][7]}</div>
      ) : (
        <Button
          href=""
          classNameButton={classes.button}
          text={TAB_BAR[language][6]}
          onClick={handleSendClick}
        />
      ),
    },
  ];

  const workWithUsItems = [
    {
      key: 1,
      content: renderTextField({
        value: nameR,
        label: TAB_BAR[language][2],
        onChange: setNameR,
      }),
    },
    {
      key: 2,
      content: renderTextField({
        value: phoneNumberR,
        label: TAB_BAR[language][3],
        onChange: setPhoneNumberR,
      }),
    },
    {
      key: 3,
      content: renderTextField({
        value: emailR,
        label: TAB_BAR[language][4],
        onChange: setEmailR,
      }),
    },
    {
      key: 4,
      content: renderSelectField({
        value: workArea,
        label: TAB_BAR[language][10],
        onChange: setWorkArea,
        options: WORK_AREA[language],
      }),
    },
    {
      key: 5,
      content: (
        <div
          className={cvLoaded ? classes.buttonSelectHide : classes.buttonSelect}
        >
          {TAB_BAR[language][11]}
        </div>
      ),
    },
    {
      key: 6,
      content: !cvSubmitted ? (
        cvLoaded ? (
          <ul className={classes.cvNameContainer}>
            <div className={classes.cvName}>{cvName}</div>
            <div
              className={classes.cvName}
              onClick={handleCancelCvClick}
              style={{ cursor: "pointer" }}
            >
              X
            </div>
          </ul>
        ) : (
          <div>
            <Button
              href=""
              classNameButton={classes.buttonSelect}
              text={TAB_BAR[language][12]}
              onClick={handleSelectClick}
            />
            <input
              type="file"
              ref={cvRef}
              style={{ display: "none" }}
              accept=".pdf"
              onChange={handleFileChange}
            />
          </div>
        )
      ) : (
        <div></div>
      ),
    },
    {
      key: 7,
      content: cvSubmitted ? (
        <div className={classes.successCv}>{TAB_BAR[language][14]}</div>
      ) : (
        <Button
          href=""
          classNameButton={classes.buttonApply}
          text={TAB_BAR[language][13]}
          onClick={handleApplyClick}
        />
      ),
    },
  ];

  return (
    <div>
      <div
        className={classes.tab}
        style={{ top: (((width * 1) / 6) * 4) / 15 + 32 + "px" }}
      >
        {width > 1100 ? (
          <>
            <div className={classes.tabLeft}>
              <div
                className={`${classes.boxLeftClick} ${
                  clickL ? "" : classes.boxLeft
                }`}
                onClick={handleClickL}
              >
                <div
                  className={`${classes.headerLeftClick} ${
                    clickL ? "" : classes.headerLeft
                  }`}
                >
                  {TAB_BAR[language][0]}
                </div>
              </div>
              <ul
                className={`${classes.ul} ${clickL ? "" : classes.ulBoxLeft}`}
              >
                <li>
                  <div>{TAB_BAR[language][1]}</div>
                </li>
                {messageItems.map((item: any) => (
                  <li key={item.key}>{item.content}</li>
                ))}
              </ul>
            </div>
            <div className={classes.tabRight}>
              <div
                className={`${classes.boxRight} ${
                  clickR ? classes.boxRightClick : ""
                }`}
                onClick={handleClickR}
              >
                <div
                  className={`${classes.headerRight} ${
                    clickR ? classes.headerRightClick : ""
                  }`}
                >
                  {TAB_BAR[language][8]}
                </div>
              </div>
              <ul
                className={`${classes.ul} ${clickR ? "" : classes.ulBoxRight}`}
              >
                <li>
                  <div>{TAB_BAR[language][9]}</div>
                </li>
                {workWithUsItems.map((item) => (
                  <li key={item.key}>{item.content}</li>
                ))}
              </ul>
            </div>
          </>
        ) : (
          <>
            <div>
              <div className={classes.responsiveTab}>
                <div
                  className={`${classes.boxLeftClick} ${
                    clickL ? "" : classes.boxLeft
                  }`}
                  onClick={handleClickL}
                >
                  <div
                    className={`${classes.headerLeftClick} ${
                      clickL ? "" : classes.headerLeft
                    }`}
                  >
                    {TAB_BAR[language][0]}
                  </div>
                </div>
                <div
                  className={`${classes.boxRight} ${
                    clickR ? classes.boxRightClick : ""
                  }`}
                  onClick={handleClickR}
                >
                  <div
                    className={`${classes.headerRight} ${
                      clickR ? classes.headerRightClick : ""
                    }`}
                  >
                    {TAB_BAR[language][8]}
                  </div>
                </div>
              </div>
              <ul
                className={`${classes.ul} ${clickL ? "" : classes.ulBoxLeft}`}
              >
                <li>
                  <div>{TAB_BAR[language][1]}</div>
                </li>
                {messageItems.map((item: any) => (
                  <li key={item.key}>{item.content}</li>
                ))}
              </ul>
              <ul
                className={`${classes.ul} ${clickR ? "" : classes.ulBoxRight}`}
              >
                <li>
                  <div>{TAB_BAR[language][9]}</div>
                </li>
                {workWithUsItems.map((item) => (
                  <li key={item.key}>{item.content}</li>
                ))}
              </ul>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default TabBar;
