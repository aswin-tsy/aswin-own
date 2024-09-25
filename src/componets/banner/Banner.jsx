import './baner.scss';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import DoneOutlinedIcon from '@mui/icons-material/DoneOutlined';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';
import Countdown from 'react-countdown';


const Banner = () => {
  return (
    <div className='banner'>
        <div className="left">
            <h1>Everything you need to create a website</h1>
            <p className='off'>Up to <span>78%</span> off hosting + website builder</p>
            <div className="servWrap">
                <div className="service">
                    <DoneOutlinedIcon style={{color:"green", fontWeight:"bold"}}/>
                    <span>Free Domain Registration</span>
                    <HelpOutlineOutlinedIcon/>
                </div>
                <div className="service">
                    <DoneOutlinedIcon style={{color:"green", fontSize:"20px"}}/>
                    <span>Free website migration</span>
                    <HelpOutlineOutlinedIcon/>
                </div>
                <div className="service">
                    <DoneOutlinedIcon style={{color:"green", fontWeight:"bold"}}/>
                    <span>24/7 customer support</span>
                
                </div>
            </div>
            <span className='price'>£<span>2.59</span>/mo</span>
            <span className='free'>+3 months free</span>
            <div className="timer">
                <button>Claim deal</button>
                <div className="box"><Countdown date={Date.now() + 10000000} /></div>
            </div>
            <div className="protection">
                <VerifiedUserOutlinedIcon style={{color:"blue"}}/>
                <span>30-day money-back guarantee</span>
            </div>
        </div>

        <div className="right">
            <img src='assests/main.png' alt="#" />
        </div>
      
    </div>
  )
}

export default Banner
