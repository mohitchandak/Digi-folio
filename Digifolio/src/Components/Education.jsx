import React from 'react'
import Timeline from './Timeline';

function Education() {
    return (
        <div>
            <div className="TimelineCon">
                <Timeline name={'June, 1994'} text={'Shri Ramdeobaba College Of Engineerng and Management,Nagpur'} qualification={'Bachelors Science in computer Science'} />
                <Timeline name={'August, 1990'} text={'Hull City School'} qualification={'High School Diploma'} />
                <Timeline name={'January, 2006'} text={'University of Manchester'} qualification={'Masters in Mathematics'} />
            </div>
        </div>
    )
}

export default Education;
