// STYLE
import './Main.style.css';

// LOCATION DATA OBJ
import { locationData } from '../../locationData';

// COMPONENTS
import Location from '../location/Location';

const Main = () => {
  return (
    <main className='main'>
      <div className='locations'>
        {locationData.map((locationObj, index) => (
          <Location key={index} index={index} locationData={locationObj} />
        ))}
      </div>
    </main>
  );
};

export default Main;
