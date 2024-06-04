import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { CardIconProps } from "./interface";

const CardIcon: React.FC<CardIconProps> = ({ icon, theme }) => {
  return (
    <>
      <Ionicons name={icon} size={40} color={theme.colors.tertiary} />
    </>
  );
};

export default CardIcon;
