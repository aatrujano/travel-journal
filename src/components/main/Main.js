// STYLE
import './Main.style.css';

// COMPONENTS
import Location from '../location/Location';

const Main = () => {
    return(
        <main className='main'>
            <div className='locations'>
                <Location />
            </div>
        </main>
    )
}

export default Main;