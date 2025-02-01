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

  const API_URL = "https://ellocomazur.com/dylanmz/barberia";

  // IDs permitidos
  const ALLOWED_IDS = [7, 8, 9, 10];

  // Obtener el listado completo de precios
  const fetchPrices = () => {
    axios
      .get(`${API_URL}/getListaPrecios2.php?user=DyMz&modo=all`, { responseType: "text" })
      .then((res) => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(res.data, "text/html");
        const rows = Array.from(doc.querySelectorAll("tr"))
          .map((row) => {
            const columns = row.querySelectorAll("td");
            const id = parseInt(columns[0].textContent || "0", 10); // ID desde la primera columna

            return {
              id: id,
              corte: columns[1].textContent || "", // Nombre del corte
              precio: columns[2].textContent || "", // Precio
            };
          })
          .filter((price) => ALLOWED_IDS.includes(price.id)); // 🔥 Filtrar solo IDs permitidos

        setPrices(rows);
      })
      .catch((err) => console.error("Error al obtener los precios:", err));
  };

  // Actualizar un precio
  const handleUpdate = (id: number) => {
    const nuevoPrecio = editing[id];
    if (!nuevoPrecio) return;

    const updateUrl = `${API_URL}/updateImporte.php?id=${id}&importe=${nuevoPrecio}`;

    axios
      .get(updateUrl)
      .then((res) => {
        if (res.data === "-1") {
          console.error("Error al actualizar el precio.");
        } else {
          console.log(`Precio actualizado para ID: ${id}`);
          fetchPrices(); // Recargar los precios después de actualizar
        }
      })
      .catch((err) => console.error("Error al actualizar el precio:", err));
  };

  useEffect(() => {
    fetchPrices();
  }, []);

  return (
    <div className="p-6 h-screen flex flex-col align-center justify-center">
      <h3 className="text-xl font-bold mb-4">Editar Precios</h3>
      {prices.length === 0 ? (
        <p>Cargando precios...</p>
      ) : (
        prices.map(({ id, corte, precio }) => (
          <div key={id} className="flex gap-3 mb-2">
            <span className="w-40">{corte}</span>
            <input
              type="text"
              value={editing[id] ?? precio}
              onChange={(e) =>
                setEditing((prev) => ({ ...prev, [id]: e.target.value }))
              }
              className="border p-1"
            />
            <button
              onClick={() => handleUpdate(id)}
              className="bg-blue-500 text-white px-3 py-1 rounded"
            >
              Guardar
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default AdminPage;