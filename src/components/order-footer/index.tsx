import React from "react";
import { Button, Modal } from "src/components/common";
import { ActionContent } from "src/components/action-content";
import { useModal } from "src/hooks";
import { OrderFooterType } from "./types";
import "./index.scss";

export const OrderFooter = (props: OrderFooterType) => {
  const { cartActions, canEdit, handleSaveChanges } = props;
  const { isShowing, toggle, modalContent, setModalContent } = useModal();

  const handleToggleModal = (modalContent: any) => {
    toggle();
    setModalContent(modalContent);
  };

  return (
    <section className="cart-actions">
      {cartActions.map((action) => (
        <Button
          key={action.id}
          ariaLabel={action.name}
          onClick={() =>
            handleToggleModal(
              <ActionContent
                content={action.modalContent}
                toggle={handleToggleModal}
              />
            )
          }
        >
          {action.name}
        </Button>
      ))}
      {canEdit ? (
        <Button
          ariaLabel="Save changes"
          onClick={handleSaveChanges}
          type="primary"
          className="btn-save-changes"
        >
          Save changes
        </Button>
      ) : null}
      <Modal isShowing={isShowing} toggle={toggle} content={modalContent} />
    </section>
  );
};
