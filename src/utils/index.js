export const formatPrice = (value) => {
  return (value / 100).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
}

export const getLocalStorage = (key, initial) => {
  try {
    const value = JSON.parse(localStorage.getItem(key));

    if (!value) return 0;

    return value;
  } catch (error) {
    return initial;
  }
}