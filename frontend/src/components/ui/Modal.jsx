// Kerangka Komponen Reusable Modal
export default function Modal({ isOpen, onClose, title, children }) {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {title && <h2>{title}</h2>}
        <div>{children}</div>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}
