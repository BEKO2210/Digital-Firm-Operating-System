import { FC } from 'react';

type Props = { label: string };

export const Example: FC<Props> = ({ label }) => (
  <button type="button" aria-label={label}>{label}</button>
);
