import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import Card from "./Card";
import useModalContext from "../context/modal-context";
import "./modal.css";

type Props = {
  className?: string;
  children: React.ReactNode;
};

const Modal = (props: Props) => {
  const { showModal, closeModalHandler } = useModalContext();

  return (
  <Fragment>
    {
        showModal && ReactDOM.createPortal(
            <Fragment>
            <section id="backdrop" onClick={closeModalHandler}>

            </section>
            <Card className={props.className}>
                {props.children}
            </Card>
            </Fragment>,
            document.getElementById("overlays") as HTMLElement
        )
    }
  </Fragment>);
};

export default Modal;
