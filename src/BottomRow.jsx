import React from 'react';
import './App.css';

const BottomRow = () => {
  return (
<div className='bottomRow'>BottomRow
    <div className='down'>
        <h3 className='down_title'>Down</h3>
        <div className= 'down_value'>3</div>
        </div>

    <div className='toGo'>
        <h3 className='toGo_title'>To Go</h3>
        <div className='toGo_value'>4</div>
    </div>

    <div className='ballOn'>
    <h3 className='ballOn_title'> Ball On</h3>
    <div className='ballon_value'>33</div>
    </div>

    <div className='quarter'>
        <h3 className='quarter_title'>Quarter</h3>
        <div className='quarter_value'>4</div>
    </div>
</div>

  );
}

export default BottomRow