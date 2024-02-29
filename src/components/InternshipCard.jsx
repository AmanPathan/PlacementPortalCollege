import "../Styles/InternshipCard.css";

export default function InternshipCard({ data, key }) {
  return (
    <div key={key} className="InternshipCard">
      <a href={data.link}>
        <div className="title">{data.company}</div>
        <div className="details">
          <ul>
            <li>
              Role: <p>{data.role}</p>
            </li>
            <li>
              Batch: <p>{data.batch}</p>
            </li>
            <li>
              Deadline: <p>{data.deadline}</p>
            </li>
            <li>
              Duration: <p>{data.duration}</p>
            </li>
            <li>
              Stipend: <p>{data.stipend}</p>
            </li>
            <li>
              Location: <p>{data.location}</p>
            </li>
            {data.description && (
              <li>
                Description: <p>{data.description}</p>
              </li>
            )}
          </ul>
        </div>
      </a>
    </div>
  );
}
