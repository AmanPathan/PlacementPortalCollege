import "../Styles/InternshipCard.css";

export default function InternshipCard({ data, index }) {
  return (
    <div key={index} className="InternshipCard">
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
            <li style={{ color: "red" }}>
              Deadline: <p>{data.deadline}</p>
            </li>
          </ul>
        </div>
      </a>
    </div>
  );
}
