import InternshipCard from "./InternshipCard";
import "../Styles/InternshipList.css";

export default function InternshipList({ internshipData }) {
  return (
    <div className="wrapper">
      <h1 className="upcoming_internships_title">Upcoming Internships...</h1>
      <div className="InternshipList">
        {internshipData.map((data, index) => {
          return <InternshipCard data={data} key={index} />;
        })}
      </div>
    </div>
  );
}
