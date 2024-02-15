import '../styles/HomeIntro.css';
import logofull from '../assets/logofull.png';

export default function HomePageIntro() {

  return (
    <div className='home-page-intro'>
      <div className='intro-text'>
        <span id='name'>UAMG</span>
        <span id='text'>Play with your friends in online browser game, choose themes, invite friends, play, enjoy</span>
      </div>
      <div className='buttons'>
        <button id='play-now'>Play now &gt;</button>
        <button id='how-to-play'>How to play</button>
      </div>
      <img src={logofull} alt="" id='full-home-page-logo'/>
    </div>
  )
}
