import Typography from '../components/Typography';

type ChildrenProps = {
  children: React.ReactNode;
};

export const Overview = ({ children }: ChildrenProps) => (
  <Typography variant="heading6">{children}</Typography>
);

export const Regular = ({ children }: ChildrenProps) => (
  <Typography variant="subtitle1">{children}</Typography>
);
