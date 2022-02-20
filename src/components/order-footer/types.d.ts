export interface Action {
  id: number;
  name: string;
  modalContent: React.ReactElement | string;
};

export interface OrderFooterType {
  cartActions: Array<Action>;
  canEdit?: boolean;
  handleSaveChanges?: () => void;
};
