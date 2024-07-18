function calculateDaysBetweenDates(begin, end) {
    const oneDay = 24 * 60 * 60 * 1000; // Number of milliseconds in a day
    const startDate = new Date(begin);
    const endDate = new Date(end);
    const diffInDays = Math.round(Math.abs((startDate - endDate) / oneDay));
    return diffInDays;
}

print(calculateDaysBetweenDates(3,5))