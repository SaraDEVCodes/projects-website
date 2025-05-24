// format the date to a string
function formatDate(date: Date): string {
  const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long', year: 'numeric' };

  return new Date(date).toLocaleDateString('en-GB', options);
}

// capitalise the first letter
function captialise(str: string): string {
  if(typeof str !== 'string' || str.length === 0){
    return str;
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export { formatDate, captialise }