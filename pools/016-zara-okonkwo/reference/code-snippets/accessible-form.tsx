import { FC, FormEvent } from 'react';

export const AccessibleForm: FC = () => {
  function onSubmit(e: FormEvent) { e.preventDefault(); }
  return (
    <form onSubmit={onSubmit} noValidate>
      <label htmlFor="email">Email</label>
      <input id="email" name="email" type="email" required aria-describedby="email-help" />
      <p id="email-help">We never share your address.</p>
      <button type="submit">Submit</button>
    </form>
  );
};
