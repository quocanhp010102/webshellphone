import React from 'react'

const CountDownTimer = ({hoursMinSecs}) => {
   
    const { hours = 0, minutes = 0, seconds = 60 } = hoursMinSecs;
    const [[hrs, mins, secs], setTime] = React.useState([hours, minutes, seconds]);
    

    const tick = () => {
   
        if (hrs === 0 && mins === 0 && secs === 0) 
            reset()
        else if (mins === 0 && secs === 0) {
            setTime([hrs - 1, 59, 59]);
        } else if (secs === 0) {
            setTime([hrs, mins - 1, 59]);
        } else {
            setTime([hrs, mins, secs - 1]);
        }
    };


    const reset = () => setTime([parseInt(hours), parseInt(minutes), parseInt(seconds)]);

    
    React.useEffect(() => {
        const timerId = setInterval(() => tick(), 1000);
        return () => clearInterval(timerId);
    });

    
    return (
        <div>
            
            <p><span  className='viendo p-1'>{`${hrs.toString().padStart(2, '0')}`}</span> : 
            <span className='viendo p-1'>{`${mins
            .toString()
            .padStart(2, '0')}`}</span> :
             <span className='viendo p-1'> {`${secs.toString().padStart(2, '0')}`}</span></p> 
        </div>
    );
}

export default CountDownTimer