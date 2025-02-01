import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";

interface Price {
  id: number;
  corte: string;
  precio: string;
}

const AdminPage: React.FC = () => {
  const [prices, setPrices] = useState<Price[]>([]);
  const [editing, setEditing] = useState<{ [key: number]: string }>({});
  const [saving, setSaving] = useState<{ [key: number]: boolean }>({});
  const [saved, setSaved] = useState<{ [key: number]: boolean }>({});
  const [fading, setFading] = useState<{ [key: number]: boolean }>({}); // Nuevo estado para animación

  const API_URL = "https://ellocomazur.com/dylanmz/barberia";
  const ALLOWED_IDS = [7, 8, 9, 10];

  const fetchPrices = useCallback(() => {
    axios
      .get(`${API_URL}/getListaPrecios2.php?user=DyMz&modo=all`, {
        responseType: "text",
      })
      .then((res) => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(res.data, "text/html");
        const rows = Array.from(doc.querySelectorAll("tr"))
          .map((row) => {
            const columns = row.querySelectorAll("td");
            const id = parseInt(columns[0].textContent || "0", 10);

            return {
              id: id,
              corte: columns[1].textContent || "",
              precio: columns[2].textContent || "",
            };
          })
          .filter((price) => ALLOWED_IDS.includes(price.id));

        setPrices(rows);
      })
      .catch((err) => console.error("Error al obtener los precios:", err));
  }, [API_URL]);

  const handleUpdate = async (id: number) => {
    const nuevoPrecio = editing[id];
    if (!nuevoPrecio) return;

    setSaving((prev) => ({ ...prev, [id]: true }));
    setSaved((prev) => ({ ...prev, [id]: false }));

    const updateUrl = `${API_URL}/updateImporte.php?id=${id}&importe=${nuevoPrecio}`;

    try {
      const res = await axios.get(updateUrl);
      if (res.data === "-1") {
        console.error("Error al actualizar el precio.");
      } else {
        console.log(`Precio actualizado para ID: ${id}`);
        fetchPrices();
        setSaved((prev) => ({ ...prev, [id]: true }));

        // Iniciar fade-out después de 3 segundos
        setTimeout(() => {
          setFading((prev) => ({ ...prev, [id]: true }));
          setTimeout(() => {
            setSaved((prev) => ({ ...prev, [id]: false }));
            setFading((prev) => ({ ...prev, [id]: false })); // Resetear estado de fade
          }, 500); // Duración de la animación (500ms)
        }, 3000); // Esperar 3 segundos antes de iniciar el fade-out
      }
    } catch (err) {
      console.error("Error al actualizar el precio:", err);
    } finally {
      setSaving((prev) => ({ ...prev, [id]: false }));
    }
  };

  useEffect(() => {
    fetchPrices();
  }, [fetchPrices]);

  return (
    <div className="p-6 h-screen flex flex-col align-center justify-center">
      <h3 className="text-xl font-bold mb-4">Editar Precios</h3>
      {prices.length === 0 ? (
        <p>Cargando precios...</p>
      ) : (
        prices.map(({ id, corte, precio }) => (
          <div key={id} className="flex items-center gap-3 mb-4">
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
              disabled={saving[id]}
              className={`px-3 py-1 rounded ${
                saving[id]
                  ? "bg-gray-500 text-white cursor-not-allowed"
                  : "bg-blue-500 text-white"
              }`}
            >
              {saving[id] ? "Guardando..." : "Guardar"}
            </button>
            {/* Mensaje "Cambio Guardado" */}
            {saved[id] && (
              <span
                className={`text-green-500 text-sm flex items-center gap-1 transition-opacity duration-500 ${
                  fading[id] ? "opacity-0" : "opacity-100"
                }`}
              >
                Cambio Guardado <span>✔</span>
              </span>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default AdminPage;
