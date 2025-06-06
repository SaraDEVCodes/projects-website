// format the date to a string
function formatDate(date: Date): string
{
  const now = new Date();
  const diff = now.getTime() - date.getTime();
  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(months / 12);

  if (seconds < 60)
  {
    if (seconds === 1) return "1 second ago";
    return seconds + " seconds ago";
  }

  if (minutes < 60)
  {
    if (minutes === 1) return "1 minute ago";
    return minutes + " minutes ago";
  }
  if (hours < 24)
  {
    if (hours === 1) return "1 hour ago";
    return hours + " hours ago";
  }
  if (days < 30)
  {
    if (days === 1) return "1 day ago";
    return days + " days ago";
  }
  if (months < 12)
  {
    if (months === 1) return "1 month ago";
    return months + " months ago";
  }
  if (years === 1) return "1 year ago";
  return years + " years ago";
}

// capitalise the first letter
function captialise(str: string): string
{
  if (typeof str !== 'string' || str.length === 0)
  {
    return str;
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export { formatDate, captialise }