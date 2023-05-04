export function getYears(timestamp: number) {
  const date = new Date(timestamp);
  const today = new Date();
  const years = today.getFullYear() - date.getFullYear();
  const months = today.getMonth() - date.getMonth();

  if (months < 0 || (months === 0 && today.getDate() < date.getDate())) {
    return `${years}+`;
  } else {
    return years;
  }
}
