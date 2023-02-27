import React, {useState} from 'react';
// React Date Range import
import { DateRangePicker } from 'react-date-range';
import { DateRange } from 'react-date-range';

// date-fns format imports
import format from 'date-fns/format'
import { addDays } from 'date-fns'

const Hotel = () => {
    const [showModal, setShowModal] = useState(false);
    const [filterModal, setFilterModal] = useState(false);
    const [open, setOpen] = useState(false);
    const [checkinPlaceholder, setcheckinPlaceholder] = useState(`Check-In`)
    const [checkoutPlaceholder, setcheckoutPlaceholder] = useState(`Check-Out`)
    const [range, setRange] = useState([
      {
        startDate: new Date(),
        endDate: addDays(new Date(), 7),
        key: 'selection'
      }
    ]);
    const handleDateChange = (item) => {
        setRange([item.selection]);
        setcheckinPlaceholder(`${format(range[0].startDate, "MM/dd/yyyy")}`);
        setcheckoutPlaceholder(`${format(range[0].endDate, "MM/dd/yyyy")}`);
      }
    return ( 
        <div className='divBackgroundImage text-light z-0'>
            <div className='center'>
                <div className='container-xxl container-xl container-lg position-relative pt-5' >
                    <h1 className='fw-bold text-center destination-main-title'>Choose the best hotels</h1>
                    <div className=''>
                        <div className='row rowPaddingStyle justify-content-center'>
                            <div className='col-12 col-md-5 search-col p-0 m-1'>
                            <div className="input-group mb-3 border border border-secondary rounded destination-input border-color ">
                    <span className="input-group-text border-0" id="basic-addon1">
                      <i class="bi bi-calendar-date"></i>
                    </span>
                    <input type="text" class="form-control border-0 shadow-none p-1 searchfeildtxt datapicker-input-field" placeholder={checkinPlaceholder} readOnly onClick={() => {setOpen(open => !open)}} />
                    <span className='destination-arrow-icon'></span>
                    <input type="text" class="form-control border-0 shadow-none ps-2 searchfeildtxt datapicker-input-field" placeholder={checkoutPlaceholder} readOnly onClick={() => {setOpen(open => !open)}} />
                  </div>
                  <div className='datepicker-display'>
                    {open &&
                      <div className='position-absolute d-flex flex-column '>
                        <DateRangePicker
                          onChange={item => handleDateChange(item)}
                          editableDateInputs={true}
                          moveRangeOnFirstSelection={false}
                          months={2}
                          direction="horizontal"
                          ranges={range}
                        />
                        <a className='btn date-range-btn my-1' onClick={() => setOpen(open => !open)}>close</a>
                      </div>
                    }
                  </div>
                  <div className='daterange-display'>
                    {open &&
                      <div className='position-absolute d-flex flex-column date-range-picker'>
                        <DateRange
                          onChange={item => handleDateChange(item)}
                          editableDateInputs={true}
                          moveRangeOnFirstSelection={false}
                          ranges={range}
                        />
                        <a className='btn date-range-btn my-1' onClick={() => setOpen(open => !open)}>close</a>
                      </div>
                    }
                  </div>
                            </div>
                            <div className='col-12 col-md-4 search-col p-0 m-1'>
                                <div className="input-group destination-input">
                                    <span className="input-group-text border-0">
                                        <i className="bi bi-person-circle"></i>
                                    </span>
                                    <input className='form-control border-0 shadow-none' type="text" placeholder='Guest'/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Hotel;