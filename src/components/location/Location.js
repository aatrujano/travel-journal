// STYLE
import './Location.style.css';

const Location = () => {
    return(
        <div className='location__container'>
            <div className='location__container-imgCont'>
                <img src="" alt="" />
            </div>
            <div className='location__container-info'>
                <div className='locationInfo'>
                    <img className='locationIcon' src="" alt="" />
                    <span className='country'></span>
                    <span className='googleMapsLink'></span>
                </div>
                <h2 className='locationName'>.</h2>
                <p className='locationDate'></p>
                <p className='locationDescription'></p>
            </div>
        </div>
    )
}

export default Location;