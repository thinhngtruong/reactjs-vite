import React from "react";
import ReactDOM from "react-dom";
import './index.scss'
import { ModalType } from "./types";

export const Modal = ({ isShowing, toggle, content }: ModalType) =>
  isShowing
    ? ReactDOM.createPortal(
        <React.Fragment>
          <div className="modal-overlay" />
          <div
            className="modal-wrapper"
            aria-modal
            aria-hidden
            tabIndex={-1}
            role="dialog"
          >
            <div className="modal" id="modal">
              <div className="modal-header">
                <button
                  type="button"
                  className="modal-close-button"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={toggle}
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              {content}
            </div>
          </div>
        </React.Fragment>,
        document.body
      )
    : null;
