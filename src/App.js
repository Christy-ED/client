import React, {useState} from 'react';
import './App.css';
import BottomRow from './BottomRow';

// A functional App that has eventListener and button
// Logic area
function App() {
  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0)

  const resetScore = () => {
    setHomeScore(0);
    setAwayScore(0);

  }
  //JSX 
  return (
    <div className="container">
      <div className='soreBoard'>
        <div className='topRow'>

          <div className='home'>
            <h2 className='homeTeam_ name'>Lions</h2>
            <div className='homeTeam_score'>{homeScore}</div>
          </div>

          <div className='timer'>00:45</div>

          <div className='away'>
            <h2 className='awayTeam_name'>Tigers</h2>
            <div className='awayTeam_scrore'>{awayScore}</div>
          </div>

        </div>
        <BottomRow/>
      </div>
      <div className='buttons'>
        <div className='homeBtns'></div>
         {/* eventHandle */}
         <button onClick={() => setHomeScore(homeScore + 6)}
         className='homeBtns_touchdown'>Home Touchdown</button>
         <button onClick={() => setHomeScore(homeScore + 3)} 
         className='homeBtns_fieldGoal'>Home Field Goal</button>
         <button onClick={() => setHomeScore(homeScore + 1)} 
         className='homeBtns_exraPoint'>Home Extra Point</button>
         <button  onClick={() => setHomeScore( homeScore + 2)} className='homeBtns_twoPointConversion'> 2 Point Conversion</button>

         <div className='awayBtns'>
         <button onClick={() => setAwayScore(awayScore + 6)}
         className='awayBtns_touchdown'>Away Touchdown</button>
         <button onClick={() => setAwayScore(awayScore + 3)} 
         className='awayBtns_fieldGoal'>Away Field Goal</button>
         <button onClick={() => setAwayScore(awayScore + 1)} 
         className='AwayBtns_exraPoint'>Away Extra Point</button>
         <button  onClick={() => setAwayScore( awayScore + 2)} className='AwayBtns_twoPointConversion'> 2 Point Conversion</button>
         </div>

         <div className='resetBtn'>
          <button onClick={resetScore} className='resetBtns_reset'>Reset</button>
          </div>

      </div>
    </div>
  );
}

export default App;
