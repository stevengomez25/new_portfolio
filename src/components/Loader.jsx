import { useEffect, useState } from "react";

export default function Loader() {
  const [visible, setVisible] = useState(true);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      // Espera a que termine la transición de opacidad (700ms)
      setTimeout(() => setHidden(true), 700);
    }, 700);

    return () => clearTimeout(timer);
  }, []);

  if (hidden) return null;

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-gray-900 transition-opacity duration-700 ${
        visible ? "opacity-100 z-50" : "opacity-0 z-50"
      }`}
    >
      <div className="animate-spin rounded-full h-20 w-20 border-t-4 border-blue-500 border-solid"></div>
    </div>
  );
}
