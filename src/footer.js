/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { CloudDownloadOutlined } from "@ant-design/icons";
import { Tooltip } from "antd";
export const Footer = (props) => {
  return (
    <div className="footer">
      Powered by{" "}
      <img
        className="footer-image"
        src={
          "data:image/png;base64,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"
        }
      />{" "}
      <a
        href="https://funnelai.com"
        target={"_blank"}
        style={{ cursor: "pointer", color: "rgb(142, 11, 97)" }}
        rel="noreferrer"
      >
        {" "}
        SocialMiningAi
      </a>
      <p style={{ marginTop: "2px", fontSize: "10px" }}>
        Terms and Conditions Apply
      </p>
      <p
        style={{
          fontSize: "10px",
          color: "rgb(142, 11, 97)",
          cursor: "pointer",
          marginTop: "-8px",
        }}
        onClick={props.DownloadMessages}
      >
        Download Messages{" "}
        <CloudDownloadOutlined
          onClick={props.DownloadMessages}
          style={{
            marginLeft: "0.5em",
            color: "rgb(142, 11, 97)",
            cursor: "pointer",
          }}
        />
      </p>
    </div>
  );
};
