interface Props {
  children: React.ReactNode;
}

export const Container: React.FC<Props> = ({ children }: Props) => {
  return <div className="w-9/12 border-2 border-red-950">{children}</div>;
};
