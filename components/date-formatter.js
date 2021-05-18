import { format } from "date-fns";
import ar from "date-fns/locale/ar-DZ";

export default function DateFormatter({ dateString }) {
  const date = new Date(dateString);
  return (
    <time
      dateTime={dateString}
      className="text-xs font-medium text-gray-500 dark:text-gray-400 sm:text-sm"
    >
      {format(date, "dd MMMM yyyy", { locale: ar })}
    </time>
  );
}
