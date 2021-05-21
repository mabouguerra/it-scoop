import { format } from "date-fns";
import ar from "date-fns/locale/ar-DZ";

export default function DateFormatter({ dateString }) {
  const date = new Date(dateString);
  return (
    <time dateTime={dateString}>
      {format(date, "dd MMMM yyyy", { locale: ar })}
    </time>
  );
}
