export interface ModalType {
  isShowing: boolean;
  toggle: () => void;
  content: React.ReactElement | string;
}