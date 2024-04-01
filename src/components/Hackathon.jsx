import React from 'react';
import '../Styles/Common.css';
import Sidebar from './Sidebar';
import HackathonCard from './HackathonCard';
import user from '../Assets/user_profile.png';
import search from '../Assets/search.png';
import '../Styles/Hackathon.css';
import HackathonLoader from './HackathonLoader';



const Hackathon = (props) => {

  let hackathons = props.hackathons;
  let loading = props.loading;
  let setLoading = props.setLoading;

  // const [loading, setLoading] = useState(true);

  return (
    <div className='student_div'>
      <Sidebar param={'hackathons'} />
      <div className="student_div_center">
        <div className="dashboard_top student_searchbar">
          <div className="search_bar_div">
            <input className='search_bar' type='text' placeholder='Seach Companies, Internships, Hackathons, or Students...' />
            <div className="search_icon_div">
              <img src={search} alt="pic" className="search_icon" />
            </div>
          </div>

        </div>
        <div className="dashboard_bottom">
          <div className='hackathon_title_up'>
            <h3 className='heading_ text-white font-extrabold text-3xl'>Upcoming Hackathons...</h3>
          </div>
          <div className="hackthon_class card-container flex flex-wrap">
          {loading ?<HackathonLoader />: <HackathonCard hackathons = {hackathons} />}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hackathon;