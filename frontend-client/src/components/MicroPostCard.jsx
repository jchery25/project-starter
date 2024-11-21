import {Link} from "react-router-dom";
import { formatDistanceToNow, toDate } from "date-fns";


function MicroPostCard({ content, createdAt, id }) {

  const result = toDate(createdAt)

  // const estDate = utcToZonedTime(parseISO(createdAt), "America/New_York");
  const relativeTime = formatDistanceToNow(result, { addSuffix: true });

  return (
    <div className="col-10 col-md-8 col-lg-7">
      <div className="card mb-4 shadow">
        <div className="card-body card-text">
          <Link to={"/posts/" + id}>{content}</Link>
        </div>
        <div className="card-footer small text-muted text-end">{relativeTime}</div>
      </div>
    </div>
  );
}

export default MicroPostCard;