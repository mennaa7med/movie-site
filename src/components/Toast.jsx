import { useApp } from '../context/AppContext';

export default function Toast() {
  const { toast } = useApp();
  if (!toast) return null;

  return (
    <div className="toast" role="status" aria-live="polite">
      <i className="fa-solid fa-circle-check" aria-hidden="true" />
      {toast}
    </div>
  );
}
