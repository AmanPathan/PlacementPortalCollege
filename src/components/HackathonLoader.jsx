import "../Styles/HackathonLoader.css";
export default function HackathonLoader() {
  return (
    <div className="hackathon_loader">
      <span id="one" style={{ "--i": "-1;" }}></span>
      <span id="two" style={{ "--i": "1;" }}></span>
      <span id="three" style={{ "--i": "1;" }}></span>
      <span id="four" style={{ "--i": "1;" }}></span>
    </div>
  );
}