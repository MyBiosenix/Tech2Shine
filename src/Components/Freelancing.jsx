import React from 'react'
import FreeProp from '../Props/FreeProp'
import '../Styles/freelancing.css'
import spreadsheet from '../assets/spreadsheet-icon.webp'
import innovation from '../assets/innovation-icon.webp'
import earning from '../assets/earning-icon.webp'



function Freelancing() {
  return (
    <div className='myfree'>
        <h3 data-aos="fade-left">Turn your free time into income with our easy-to-start online projects.</h3>
        <div className='gofree' data-aos="fade-right">
            <FreeProp Icon={spreadsheet}
                title="Do Freelancing"
                desc="Get started in freelancing quickly — simple steps, real results."
            />

            <FreeProp Icon={innovation}
                title="No Skills Required"
                desc="No skills needed; we’ll help you get started and certify you."
            />

            <FreeProp Icon={earning}
                title="Earn Money Online"
                desc="Explore easy data entry opportunities that fit your schedule."
            />
        </div>
    </div>
  )
}

export default Freelancing
