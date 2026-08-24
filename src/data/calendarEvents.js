export const eventTypeStyles = {
  grooming: { bg: '#F9D9A0', label: 'Grooming' },
  vet: { bg: '#D4C9FF', label: 'Vet' },
  walk: { bg: '#C7ECD9', label: 'Walk' },
};

export const weekDays = [
  { day: 'Sun', date: 3 },
  { day: 'Mon', date: 4 },
  { day: 'Tue', date: 5 },
  { day: 'Wed', date: 6 },
  { day: 'Thu', date: 7 },
  { day: 'Fri', date: 8 },
  { day: 'Sat', date: 9 },
];

export const dayEvents = [
  { id: 1, date: 3, type: 'grooming', title: 'Nail Trimming for Lucy', time: '2:00-3:00 PM', start: 2 },
  { id: 2, date: 3, type: 'vet', title: 'Vaccination for Max', time: '4:00-5:00 PM', start: 4 },
  { id: 3, date: 3, type: 'walk', title: 'Walk Max', time: '6:00-6:30 PM', start: 6, done: true },
  { id: 4, date: 5, type: 'grooming', title: 'Nail Trimming for Lucy', time: '2:00-3:00 PM', start: 2 },
  { id: 5, date: 6, type: 'vet', title: 'Vaccination for Max', time: '4:00-5:00 PM', start: 4 },
];

export const monthTags = [
  { date: 2, type: 'grooming' },
  { date: 4, type: 'grooming' },
  { date: 4, type: 'walk' },
  { date: 4, type: 'vet' },
  { date: 7, type: 'walk' },
  { date: 11, type: 'grooming' },
  { date: 11, type: 'walk' },
  { date: 15, type: 'vet' },
  { date: 16, type: 'walk' },
  { date: 18, type: 'grooming' },
  { date: 19, type: 'walk' },
  { date: 22, type: 'walk' },
  { date: 25, type: 'grooming' },
  { date: 25, type: 'walk' },
  { date: 28, type: 'vet' },
  { date: 29, type: 'walk' },
];
