const options: any = {
    hour: '2-digit',
    minute: '2-digit',
    day: '2-digit',
    month: 'short',
    year: 'numeric'
};

export const formattedDate = (inputDate: number | Date | undefined | any) => {
    const dateNew = new Date(inputDate);
    const formatter = new Intl.DateTimeFormat('en-US', options);
    const formattedDate = formatter.format(dateNew);

    const dateParts = formattedDate.split(' ');
    const day = dateParts[0];
    const month = dateParts[1];
    let year = dateParts[2]

    const formattedMonth = month.charAt(0).toUpperCase() + month.slice(1);

    const time = dateNew.toLocaleTimeString('en-US', {hour12: false});

    return `${time}, ${day}-${formattedMonth} ${year}`;
}
