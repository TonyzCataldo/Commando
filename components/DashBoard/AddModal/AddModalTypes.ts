import { ReactElement } from "react";

type AddModalChildProps = {
  closeModal: () => void;
};
export type AddModalProps = {
  title: string;
  children: ReactElement<AddModalChildProps>;
};
