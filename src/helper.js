const choice = (arr) => {
  const rand = Math.floor(Math.random() * arr.length);
  return arr[rand];
};

const remove = (arr, el) => {
  return arr.find((element) => element === el)
    ? arr.filter((element) => element !== el)
    : undefined;
};

export { choice, remove };
