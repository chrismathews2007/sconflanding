import React from "react";

export default function Text({
  h1,
  h2,
  h3,
  h4,
  h5,
  subTitle,
  small,
  align,
  color,
  mb,
  size,
  gradient,
  children,
}) {
  const renderText = h1 ? (
    <h1
      className={`text__h1 ${gradient ? gradient : ""} ${mb ? mb : "mb-20"} ${
        align ? align : "text-left"
      } ${color ? color : "text-dark"}`}
    >
      {children}
    </h1>
  ) : h2 ? (
    <h2
      className={`text__h2 ${gradient ? gradient : ""} ${mb ? mb : "mb-20"} ${
        align ? align : "text-left"
      } ${color ? color : "text-dark"} `}
    >
      {children}
    </h2>
  ) : h3 ? (
    <h3
      className={`text__h3 ${gradient ? gradient : ""} ${mb ? mb : "mb-20"} ${
        align ? align : "text-left"
      } ${color ? color : "text-dark"} `}
    >
      {children}
    </h3>
  ) : h4 ? (
    <h4
      className={`text__h4 ${gradient ? gradient : ""} ${mb ? mb : "mb-20"} ${
        align ? align : "text-left"
      } ${color ? color : "text-dark"}  `}
    >
      {children}
    </h4>
  ) : h5 ? (
    <h5
      className={`text__h5 ${gradient ? gradient : ""} ${mb ? mb : "mb-20"} ${
        align ? align : "text-left"
      }`}
    >
      {children}
    </h5>
  ) : subTitle ? (
    <span
      className={`text__sub-heading ${gradient ? gradient : ""} ${
        mb ? mb : "mb-20"
      }  ${color ? color : "text-dark"}`}
    >
      {children}
    </span>
  ) : small ? (
    <span
      className={`text__small ${gradient ? gradient : ""} ${mb ? mb : "mb-0"} ${
        color ? color : "text-dark"
      }`}
    >
      {children}
    </span>
  ) : (
    <p
      className={`text__p ${gradient ? gradient : ""} ${mb ? mb : "mb-0"}  ${
        color ? color : "text-dark"
      } 
			} `}
      style={{
        fontSize: size ? size : 16,
        lineHeight: size ? `${size + 15}px` : "20px",
      }}
    >
      {children}
    </p>
  );

  return renderText;
}
