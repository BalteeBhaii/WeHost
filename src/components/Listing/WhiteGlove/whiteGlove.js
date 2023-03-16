import React from 'react';
import { useState, useEffect } from 'react';
import { Collapse } from 'react-bootstrap';

const WhiteGlove = () => {
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);  
    const [icon1, setIcon1] = useState('bi bi-plus');
    const [icon2, setIcon2] = useState('bi bi-plus');
    const [icon3, setIcon3] = useState('bi bi-plus');
    
    useEffect(() => {
      if (open1) {
        setIcon1('bi bi-dash');
        setIcon2('bi bi-plus');
        setIcon3('bi bi-plus');
      } else if (open2) {
        setIcon1('bi bi-plus');
        setIcon2('bi bi-dash');
        setIcon3('bi bi-plus');
      } else if (open3) {
        setIcon1('bi bi-plus');
        setIcon2('bi bi-plus');
        setIcon3('bi bi-dash');
      } else {
        setIcon1('bi bi-plus');
        setIcon2('bi bi-plus');
        setIcon3('bi bi-plus');
      }
    }, [open1, open2, open3]);
    return (
        <div>
        <div className='divBackgroundImageWhiteGlove text-light z-0'>
          <div className='center'>
            <div className='container-xxl container-xl container-lg position-relative pt-5' >
              <h1 className='fw-bold text-center work-Together-text'>Welcome to our White glove concierge</h1>
            
  
            </div>
          </div>
        </div>
        <div className='container mt-5'>
          <div className='row'>
            <div className='col-12 col-md-6 d-flex justify-content-center flex-column'>
              <h2 className='work-together-title'>White Glove Concierge </h2>
              <p className='mx-2'>Having access to the finer things in life while traveling is as easy as investing in a membership with weHost.Our member-exclusive club offers discounted lodging, legal advice, help with your pets, and even White Glove Concierge services. Making use of this hotel premium allows you to get more done in less time during your trip. You’re able to enjoy yourself more because you’re not weighed down with menial tasks such as making reservations or trying to find a store that sells razors because you forgot yours at home.</p>
            </div>
            <div className='col-12 col-md-6'>
              <img className='work-together-img' src='/images/service.png' alt="" />
  
            </div>
          </div>
        </div>
        <div className='container mt-5'>
          <div className='row'>
            <div className='col-12 col-md-6'>
              <img className='w-100' src='/images/whiteservice.png' alt="" />
  
            </div>
            <div className='col-12 col-md-6 d-flex justify-content-center flex-column'>
              <h2 className='work-together-title mt-2'>Benefits Of Using Our Service </h2>
              <p className='mx-2'>More businesses recognize the need for luxury services. That’s where the concept of White Glove Concierge comes from. Making sure every single detail for guests is perfect is what the experts in hospitality do. From arranging transportation for you and your family to making sure that your room is well-stocked with snacks and beverages, there are a lot of things that the professionals provide to travelers..</p>
            </div>
          </div>
        </div>

        <div className='container-fluid work-together-host-property mt-5'>
        <div className='text-center pt-4 pb-5'>
          <h2 className='work-together-host-property-title'>
          Sit and Relax we will do everything for you 
          </h2>
          <p className='work-together-host-property-txt'>
          Avail our 24 hour service now
          </p>
          <button type="button" class="btn btn-list-property">Contact Now</button>
        </div>
      </div>

      <div className='container mt-5'>
  <h2 className='frequent-question text-center'>Things White Glove Concierge Offers</h2>
  
  <div className='mt-5'>
    <div
      onClick={() => setOpen1(!open1)}
      aria-controls="example-collapse-text"
      aria-expanded={open1}
    >
      <h3 className='question-title'> <i className={icon1}></i> The knowledge of someone familiar with the area</h3>
    </div>
    <Collapse in={open1}>
      <div id="example-collapse-text">
      The concierge that you work with knows the location that you’ve traveled to intimately. They can give you ideas of things to do as well as places to shop and eat. The professional possesses insider knowledge which will help ou navigate unfamiliar territory. That way, you can make the most of every minute of your trip without being bogged down by the details.

      </div>
    </Collapse>
    <hr/>
  </div>
  <div>
    <div
      onClick={() => setOpen2(!open2)}
      aria-controls="example-collapse-text"
      aria-expanded={open2}
    >
      <h3 className='question-title'><i className={icon2}></i>  A person who can pull strings and get you into the most popular restaurants and nightclubs as well as secure you the best seats in the house at concerts, sporting events, and theater plays</h3>
    </div>
    <Collapse in={open2}>
      <div id="example-collapse-text">
      You’ll get the VIP treatment wherever you go thanks to the relationship that the concierge has built with area businesses. You won’t get nosebleed section seating or be forced to wait hours for a free table at a restaurant or nightclub. The concierge pulls strings to make sure you’re 100% satisfied with your stay in their hotel or resort.
      </div>
    </Collapse>
    <hr/>
  </div>
  <div>
    <div
      onClick={() => setOpen3(!open3)}
      aria-controls="example-collapse-text"
      aria-expanded={open3}
    >
      <h3 className='question-title'><i className={icon3}></i> Premium room services</h3>
    </div>
    <Collapse in={open3}>
      <div id="example-collapse-text">
      Your wish is the concierge’s command. If you or your family need anything throughout your stay, simply ask for it. With White Glove Concierge service no request is too large. You’ll enjoy celebrity treatment throughout your stay and become familiar to the concierge in the event you return to the hotel or resort at a later date.
      </div>
    </Collapse>
    <hr/>
  </div>
</div>
       
       
      </div>
    );
}

export default WhiteGlove;
