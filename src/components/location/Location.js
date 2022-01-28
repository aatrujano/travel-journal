// STYLE
import './Location.style.css';

// IMAGES
import fuji from '../../images/mountFuji.png';
import sydney from '../../images/sydneyOpera.png';
import norway from '../../images/geirangerfjord.png';
import icon from '../../images/locationIcon.png';

const imgArr = [fuji, sydney, norway];

const Location = ({locationData, index}) => {
  return (
    <div className='location__container'>
      <div className='location__container-imgCont'>
        <img src={imgArr[index]} alt='' />
      </div>
      <div className='location__container-info'>
        <div className='locationInfo'>
          <img className='locationIcon' src={icon} alt='' />
          <span className='country'>{locationData.location.toUpperCase()}</span>
          <span className='googleMapsLink'>
            <a href={locationData.googleMapsUrl}>View on Google Maps</a>
          </span>
        </div>
        <h2 className='locationName'>{locationData.title}</h2>
        <span className='locationDate startdate'>{locationData.startDate} - </span><span className='locationDate enddate'>{locationData.endDate}</span>
        <p className='locationDescription'>{locationData.description}</p>
      </div>
    </div>
  );
};

export default Location;
