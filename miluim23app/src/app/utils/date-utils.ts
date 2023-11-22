export const substractDaysFromDate = function(amountOfDays: number, date: Date): Date {
    const d = new Date();
    const dayInMs = 1000 * 3600 * 24;
    d.setTime(date.getTime() - dayInMs * amountOfDays);
    return d;
}

export const addDaysToDate = function(amountOfDays: number, date: Date): Date {
    const d = new Date();
    const dayInMs = 1000 * 3600 * 24;
    d.setTime(date.getTime() + dayInMs * amountOfDays);
    return d;
}