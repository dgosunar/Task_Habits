import React from 'react';

// const generalStatus = [
//   { id: 1, name: 'Pendiente' },
//   { id: 2, name: 'En Proceso' },
//   { id: 3, name: 'Completado' },
// ];
// const spaceWork = [
//   { id: 0, name: 'General' },
//   { id: 1, name: 'Casa' },
//   { id: 2, name: 'Proyecto T&H' },
//   { id: 3, name: 'Clase de Multiservicios' },
// ];
// localStorage.removeItem('Task_v1');
// const defaultTask = [
//   { id: 1, text: 'Tender la cama', status: generalStatus[0].id, spaceWork: spaceWork[0].id, date: '12/01/2024, 03:30:00' },
//   { id: 2, text: 'Ir al Gym', status: generalStatus[1].id, spaceWork: spaceWork[2].id, date: '12/01/2024, 03:30:00' },
//   { id: 3, text: 'Tomar una ducha', status: generalStatus[1].id, spaceWork: spaceWork[1].id, date: '12/01/2024, 03:30:00' },
//   { id: 4, text: 'Lavar la loza', status: generalStatus[2].id, spaceWork: spaceWork[3].id, date: '12/01/2024, 03:30:00' },
//   { id: 5, text: 'Lavar el baño', status: generalStatus[2].id, spaceWork: spaceWork[0].id, date: '12/01/2024, 03:30:00' },
// ];
// localStorage.setItem('Task_v1', JSON.stringify(defaultTask));

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