import React, { useState, useEffect } from 'react'
import '../Styles/plans.css'
import PlanProp from '../Props/PlanProp'
import EnquiryModal from '../Modals/EnquiryModal';
import {useLocation} from 'react-router-dom'

function Plans() {

  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState("");
  const [selectedPlan, setSelectedPlan] = useState("");

  const openModal = (planName,projectName) => {
    setSelectedPlan(planName);
    setSelectedProject(projectName);
    setShowModal(true);
  }

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const section = document.querySelector(location.hash);
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: "smooth" });
        }, 200);
      }
    }
  }, [location]);

  return (
    <div className='myplans'>
      <h3>PLANS & PRICING</h3>
      <h4 id='data-conversion'>DATA CONVERSION</h4>
      <div className='in-myplans'>
        <PlanProp 
          name="Gold"
          price="₹ 1999/-"
          descri={[
            "Pages: 100 Pages",
            "Accuracy Required: 85.00%",
            "Max Errors Accepted: 15.00%",
            "Earning Per Page: Rs. 150.00/-",
            "Contract Duration: 06 Month",
            "Freelancer Fee: Rs. 1,999/-",
            "Minimum Submission: 75 Pages",
            "Work Duration: 15 Days",
            "Payment : Rs. 15,000/-"
          ]}
          btn="Buy Now"
          project="Data Conversion"
          onBuy={openModal}
        />

        <PlanProp
          popular="MOST POPULAR"
          name="Diamond"
          price="₹ 3999/-"
          descri={[
            "Pages: 200 Pages",
            "Accuracy Required: 50.00%",
            "Max Errors Accepted: 50.00%",
            "Earning Per Page: Rs. 240.00/-",
            "Contract Duration: 33 Months",
            "Freelancer Fee: Rs. 3,999/-",
            "Minimum Submission: 170 Pages",
            "Work Duration: 30 Days",
            "Payment: Rs. 48,000/-"
          ]}
          btn="Buy Now"
          project="Data Conversion"
          onBuy={openModal}
        />

        <PlanProp 
          name="VIP"
          price="₹ 2999/-"
          descri={[
            "Pages: 200 Pages",
            "Accuracy Required: 60.00%",
            "Max Errors Accepted: 40.00%",
            "Earning Per Page: Rs. 180.00/-",
            "Contract Duration: 12 Months",
            "Freelancer Fee: Rs. 2,999/-",
            "Minimum Submission: 150 Pages",
            "Work Duration: 30 Days",
            "Payment: Rs. 36,000/-"
          ]}
          btn="Buy Now"
          project="Data Conversion"
          onBuy={openModal}
        />


      </div>
      <h4 id='data-segregation'>DATA SEGREGATION</h4>
      <div className='in-myplans'>
        <PlanProp 
          name="Gold"
          price="₹ 1999/-"
          descri={[
            "Total Forms: 2000",
            "Accuracy Required: 85.00%",
            "Max Errors Accepted: 15.00%",
            "Earning Per Form: Rs. 8.00/-",
            "Contract Duration: 06 Month",
            "Freelancer Fee: Rs. 1,999/-",
            "Minimum Submission: 1500 Forms",
            "Work Duration: 15 Days",
            "Payment : Rs. 16,000/-"
          ]}
          btn="Buy Now"
          project="Data Segregation"
          onBuy={openModal}
        />

        <PlanProp
          popular="MOST POPULAR"
          name="Diamond"
          price="₹ 3999/-"
          descri={[
            "Total Forms: 3000",
            "Accuracy Required 50.00%",
            "Max Errors Accepted: 50.00%",
            "Earning Per Form: Rs. 16.00/-",
            "Contract Duration: 33 Months",
            "Freelancer Fee: Rs. 3,999/-",
            "Minimum Submission: 2100 Forms",
            "Work Duration: 30 Days",
            "Payment: Rs. 48,000/-"
          ]}
          btn="Buy Now"
          project="Data Segregation"
          onBuy={openModal}
        />

        <PlanProp 
          name="VIP"
          price="₹ 2999/-"
          descri={[
            "Total Forms: 3000",
            "Accuracy Required: 60.00%",
            "Max Errors Accepted: 40.00%",
            "Earning Per Form: Rs. 10.00/-",
            "Contract Duration: 12 Months",
            "Freelancer Fee: Rs. 2,999/-",
            "Minimum Submission: 2000 Forms",
            "Work Duration: 30 Days",
            "Payment: Rs. 30,000/-"
          ]}
          btn="Buy Now"
          project="Data Segregation"
          onBuy={openModal}
        />


      </div>

      <h4 id='bank-captcha'>BANK CAPTCHA VERIFIER</h4>
      <div className='in-myplans'>
        <PlanProp 
          name="Gold"
          price="₹ 1999/-"
          descri={[
            "Captcha Count: 16000",
            "Skip Accuracy: 0%",
            "Per Captcha Amount: Rs 1/-",
            "Contract Duration: 06 Month",
            "Freelancer Fee: Rs. 1,999/-",
            "Work Duration: 1 Month",
            "Payment : Rs. 16,000/-",
            "System: Smart Phone Or Pc"
          ]}
          btn="Buy Now"
          project="Bank Captcha Verifier"
          onBuy={openModal}
        />

        <PlanProp
          popular="MOST POPULAR"
          name="Diamond"
          price="₹ 3999/-"
          descri={[
            "Captcha Count: 16000",
            "Skip Accuracy: 0%",
            "Per Captcha Amount: Rs 3/-",
            "Contract Duration: 33 Months",
            "Freelancer Fee: Rs. 3,999/-",
            "Work Duration: 1 Month",
            "Payment : Rs. 48,000/-",
            "System: Smart Phone Or Pc"
          ]}
          btn="Buy Now"
          project="Bank Captcha Verifier"
          onBuy={openModal}
        />

        <PlanProp 
          name="VIP"
          price="₹ 1999/-"
          descri={[
            "Captcha Count: 16000",
            "Skip Accuracy: 0%",
            "Per Captcha Amount: Rs 1.5/-",
            "Contract Duration: 12 Months",
            "Freelancer Fee: Rs. 2,999/-",
            "Work Duration: 1 Month",
            "Payment : Rs. 24,000/-",
            "System: Smart Phone Or Pc"
          ]}
          btn="Buy Now"
          project="Bank Captcha Verifier"
          onBuy={openModal}
        />


      </div>
      <EnquiryModal
        show={showModal}
        onClose={()=>setShowModal(false)}
        planName={selectedPlan}
        projectName={selectedProject}
      />
    </div>
  )
}

export default Plans
