import { parseISO, format } from "date-fns";

export default function Date({ dateString }) {
    const date = parseISO(dateString);
    return <time className="!text-2xl text-dark/75 dark:text-light/75" dateTime={dateString}>{format(date, "LLLL d, yyyy")}</time>;
}
