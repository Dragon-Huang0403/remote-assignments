export default function Title({ children, ...props }) {
  return (
    <header {...props}>
      <b>{children}</b>
    </header>
  );
}
