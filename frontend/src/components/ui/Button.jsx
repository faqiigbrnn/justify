// Kerangka Komponen Reusable Button
export default function Button({ children, onClick, type = 'button', variant = 'primary', ...props }) {
  return (
    <button type={type} onClick={onClick} className={`btn btn-${variant}`} {...props}>
      {children}
    </button>
  );
}
