export function formatDate(dateString) {
  const date = new Date(dateString);  // Convert the ISO string to a Date object

  // Define month abbreviations
  const monthAbbreviations = [
      'JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'
  ];

  // Get the day, month, and year
  const day = date.getDate().toString().padStart(2, '0');  // Ensure 2-digit day
  const month = monthAbbreviations[date.getMonth()];       // Get the abbreviated month
  const year = date.getFullYear();                         // Get the full year

  return `${day} ${month} ${year}`;  // Return the formatted string
}

