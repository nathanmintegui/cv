interface Props {
  children: React.ReactNode;
}

export const Container: React.FC<Props> = ({ children }: Props) => {
  return <div className="w-9/12">{children}</div>;
};
