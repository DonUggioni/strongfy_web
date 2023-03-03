import React from 'react';
import useAppContext from '../../context/Context';

function ProjectedMaxes() {
  const { projectedMaxes } = useAppContext();

  const squat = projectedMaxes?.squat[0].value;
  const bench = projectedMaxes?.bench[0].value;
  const deadlift = projectedMaxes?.deadlift[0].value;

  return (
    <div className='flex flex-col items-center gap-6 w-full'>
      <p className='text-grey300 text-xl md:text-lg sm:text-base font-mont'>
        Projected Maxes
      </p>
      <div className='flex items-center justify-around w-full'>
        <div className='flex flex-col items-center gap-2'>
          <span className='text-grey300 text-xl md:text-base'>Squat</span>
          <span className='text-3xl text-primary500 md:text-2xl'>
            {squat ? squat : '0'}kg
          </span>
        </div>
        <div className='flex flex-col items-center gap-2'>
          <span className='text-grey300 text-xl md:text-base'>Bench</span>
          <span className='text-3xl text-primary500 md:text-2xl'>
            {bench ? bench : '0'}kg
          </span>
        </div>
        <div className='flex flex-col items-center gap-2'>
          <span className='text-grey300 text-xl md:text-base'>Deadlift</span>
          <span className='text-3xl text-primary500 md:text-2xl'>
            {deadlift ? deadlift : '0'}kg
          </span>
        </div>
      </div>
    </div>
  );
}

export default ProjectedMaxes;
