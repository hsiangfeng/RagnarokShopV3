export default function (value) {
  const dateTime = new Date(value);
  const year = dateTime.getFullYear();
  const month = dateTime.getMonth() + 1;
  const date = dateTime.getDate();
  const dataFull = `${year}/${month}/${date}`;
  return dataFull;
}
