import React, { useEffect, useState } from "react";
import axios from "axios";

interface Price {
    id: number;
    corte: string;
    precio: string;
}

const AdminPage: React.FC = () => {
  const [prices, setPrices] = useState<Price[]>([]);
  const [editing, setEditing] = useState<{ [key: number]: string }>({});

  useEffect(() => {
    axios.get("http://localhost:5000/precios").then((res) => {
      setPrices(res.data);
    });
  }, []);

  const handleUpdate = async (id: number) => {
    if (!editing[id]) return;

    await axios.put(`http://localhost:5000/precios/${id}`, { precio: editing[id] });
    setPrices((prev) =>
      prev.map((price) => (price.id === id ? { ...price, precio: editing[id] } : price))
    );
    setEditing(prev => ({ ...prev, [id]: "" }));
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Editar Precios</h1>
      {prices.map(({ id, corte, precio }) => (
        <div key={id} className="flex gap-3 mb-2">
          <span className="w-40">{corte}</span>
          <input
            type="text"
            value={editing[id] ?? precio}
            onChange={(e) => setEditing((prev) => ({ ...prev, [id]: e.target.value }))}
            className="border p-1"
          />
          <button
            onClick={() => handleUpdate(id)}
            className="bg-blue-500 text-white px-3 py-1 rounded"
          >
            Guardar
          </button>
        </div>
      ))}
    </div>
  );
};

export default AdminPage;