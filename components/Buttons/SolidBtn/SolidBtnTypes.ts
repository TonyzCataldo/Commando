export type SolidLinkBtnProps = {
  href: string;
  className?: string;
  text: string;
};

export type SolidBtnProps = {
  className?: string;
  children: React.ReactNode;
  onClick: () => void;
};
