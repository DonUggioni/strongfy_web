import React from 'react';
import useAppContext from '../../context/Context';

function ProjectedMaxes() {
  const { projectedMaxes } = useAppContext();

  const squat = projectedMaxes?.squat?.slice(-1);
  const bench = projectedMaxes?.bench?.slice(-1);
  const deadlift = projectedMaxes?.deadlift?.slice(-1);

  return (
    <div className='flex flex-col items-center gap-6 w-full'>
      <p className='text-grey300 text-xl md:text-lg sm:text-base font-mont'>
        Projected Maxes
      </p>
      <div className='flex items-center justify-around w-full'>
        <div className='flex flex-col items-center gap-2'>
          <span className='text-grey300 text-xl md:text-base'>Squat</span>
          <span className='text-3xl text-primary500 md:text-2xl'>
            {!squat ? 0 : squat[0].value}kg
          </span>
        </div>
        <div className='flex flex-col items-center gap-2'>
          <span className='text-grey300 text-xl md:text-base'>Bench</span>
          <span className='text-3xl text-primary500 md:text-2xl'>
            {!bench ? 0 : bench[0].value}kg
          </span>
        </div>
        <div className='flex flex-col items-center gap-2'>
          <span className='text-grey300 text-xl md:text-base'>Deadlift</span>
          <span className='text-3xl text-primary500 md:text-2xl'>
            {!deadlift ? 0 : deadlift[0].value}kg
          </span>
        </div>
      </div>
    </div>
  );
}

export default ProjectedMaxes;
