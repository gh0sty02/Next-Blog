import ReactDOM from "react-dom";
import classes from "./notification.module.css";

interface IProps {
  title: string;
  message: string;
  status: string;
}

function Notification(props: IProps) {
  const { title, message, status } = props;

  let statusClasses = "";

  if (status === "success") {
    statusClasses = classes.success;
  }

  if (status === "error") {
    statusClasses = classes.error;
  }

  const cssClasses = `${classes.notification} ${statusClasses}`;

  const portalDiv = document.getElementById("notifications");

  if (portalDiv) {
    return ReactDOM.createPortal(
      <div className={cssClasses}>
        <h2>{title}</h2>
        <p>{message}</p>
      </div>,
      portalDiv
    );
  } else {
    return <p>loading...</p>;
  }
}

export default Notification;
