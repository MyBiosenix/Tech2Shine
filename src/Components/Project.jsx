import React from 'react'
import ProjectProp from '../Props/ProjectProp'
import '../Styles/project.css'

function Project() {
  return (
    <div className='myproject'>
        <h3 data-aos="fade-right">Project Details</h3>
        <div className='projs' data-aos="fade-left">
            <ProjectProp 
                title="DATA CONVERSION PROJECT"
                description={[
                    "Work remotely and earn from home.",
                    "Excellent income opportunities with flexible schedules.",
                    "No advanced qualifications required.",
                    "Perfect for self-motivated individuals seeking reliable online work."
                ]}
                buybtn="Know more...."
                link="#data-conversion"
            />
            <ProjectProp
                title="DATA SEGREGATION PROJECT"
                description={[
                    "Offered by TECH2SHINE LABS",
                    "Online form-filling jobs that support global businesses.",
                    "Reduce office workload, improve efficiency.",
                    "1B+ forms processed daily worldwide — start contributing today!",
                ]}
                buybtn="Know more...."
                link="#data-segregation"
            />

            <ProjectProp
                title="BANK CAPTCHA VERIFIER"
                description={[
                    "Safeguards banking platforms from bots and spam.",
                    "Uses quick human-verification tests for secure access.",
                    "Prevents misuse of data through automation or spam attacks.",
                    "Employs advanced behavior-based algorithms for enhanced accuracy."
                ]}
                buybtn="Know more...."
                link="#bank-captcha"
            />
        </div>
    </div>
  )
}

export default Project
