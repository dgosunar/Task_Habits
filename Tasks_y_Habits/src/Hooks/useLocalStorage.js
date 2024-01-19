import React from 'react';

// const generalStatus = ['Pendiente', 'En Proceso', 'Completado'];
// localStorage.removeItem('Task_v1');
// const defaultTask = [
//   { id: "1", text: 'Tender la cama', status: generalStatus[0] },
//   { id: "2", text: 'Ir al GyM', status: generalStatus[1] },
//   { id: "3", text: 'Tomar una ducha', status: generalStatus[1] },
//   { id: "4", text: 'Lavar la loza', status: generalStatus[2] },
//   { id: "5", text: 'Lavar el baño', status: generalStatus[2] },
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
    }, 500);
  }, []);

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };

  return { item, saveItem, loading, error };
}

export { useLocalStorage };