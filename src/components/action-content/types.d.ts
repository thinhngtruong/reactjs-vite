export interface ActionContentType {
  content: React.ReactElement | string;
  toggle: (modalContent: React.ReactElement | string) => void;
}