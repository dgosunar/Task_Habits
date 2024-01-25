import React from 'react';

const generalStatus = [
  { id: 1, name: 'Pendiente' },
  { id: 2, name: 'En Proceso' },
  { id: 3, name: 'Completado' },
];

localStorage.removeItem('Space_v1');
const spaceWork = [
  { id: 0, name: 'General' },
  { id: 1, name: 'Proyecto T&H' },
];
localStorage.setItem('Space_v1', JSON.stringify(spaceWork));

localStorage.removeItem('Task_v1');
const defaultTask = [
  { id: 1, text: 'Reparar pata de la moto', status: generalStatus[0].id, spaceWork: spaceWork[0].id, date: '' },
  { id: 2, text: 'Cambiar guardas del baul', status: generalStatus[0].id, spaceWork: spaceWork[0].id, date: '' },
  { id: 3, text: 'Verificar canciones para el viernes', status: generalStatus[1].id, spaceWork: spaceWork[0].id, date: '' },
  { id: 4, text: 'Verificar canciones para el Sábado', status: generalStatus[1].id, spaceWork: spaceWork[0].id, date: '' },

  { id: 5, text: 'Funcionalidad de botones para espacio de trabajo', status: generalStatus[0].id, spaceWork: spaceWork[1].id, date: '' },
  { id: 6, text: 'Corregir ubicación barra de busqueda', status: generalStatus[1].id, spaceWork: spaceWork[1].id, date: '' },
  { id: 7, text: 'Corregir Verificar responsive', status: generalStatus[0].id, spaceWork: spaceWork[1].id, date: '' },
  { id: 8, text: 'Verificar distribucion del contenido', status: generalStatus[0].id, spaceWork: spaceWork[1].id, date: '' },
  { id: 8, text: 'Realizar filtrado segun el espacio de trabajo', status: generalStatus[2].id, spaceWork: spaceWork[1].id, date: '' },
];
localStorage.setItem('Task_v1', JSON.stringify(defaultTask));

function useLocalStorage(itemName, inicialValue) {

  const [item, setItem] = React.useState(inicialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(inicialValue));
          parsedItem = inicialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
          setItem(parsedItem);
        }
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    }, 400);
  }, []);

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };

  return { item, saveItem, loading, error };
}

export { useLocalStorage };