import React from "react";

const NotificationContext = React.createContext({
  status: "",
  message: "",
  time: 0,
});

export default NotificationContext;
