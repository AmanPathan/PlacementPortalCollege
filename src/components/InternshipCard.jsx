import "../Styles/InternshipCard.css";

export default function InternshipCard({ data, index, status }) {
  const dateObj = new Date(data.deadline);
  const month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  const currDeadline = dateObj.getDate()+ " " + month[dateObj.getUTCMonth()] + " " + dateObj.getFullYear();
  return (
    <div key={index} className="InternshipCard">
      <div className={status==="Closed"?"status_div status_closed":"status_div status_open"}>{status} </div>
      <a href={data.link}>
        <div className="title">{data.company}</div>
        <div className="details">
          <ul>
            <li>
              Role: <p>{data.role}</p>
            </li>
            <li>
              Duration: <p>{data.duration}</p>
            </li>
            <li>
              Location: <p>{data.location}</p>
            </li>
            <li style={{ color: "#eb5757" }}>
              Deadline: <p>{currDeadline}</p>
            </li>
          </ul>
        </div>
      </a>
    </div>
  );
}