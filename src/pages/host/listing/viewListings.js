import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { baseUrl } from '../../../config.js';
import moment from 'moment/moment.js';


const ViewListings = () => {
    const [listings, setListings] = useState([]);

    //const user = JSON.parse(localStorage.user);

    const loadListings = async () => {
        const res = await axios.get(baseUrl + "listings/?user_id=" + JSON.parse(localStorage.getItem('user')).id);
        setListings(res.data.data);
    }

    useEffect(() => {
        loadListings();
    }, []);

    return (
        <>
            <div className='container my-5 mb-0'>
                <div className='d-flex justify-content-between'>
                    <h3 className=''>Listings</h3>
                    <div className=''>

                        <button className="btn btn-search-listing add-listing" type="button" id="dropdownMenuButton"  >
                            <i className="bi bi-plus-lg"></i><Link className='text-white' to='/property'><span className='d-none d-md-block'>Add listing</span>
                            </Link>
                        </button>
                    </div>
                </div>
                <div className='mt-3 d-flex gap-4 flex-wrap'>
                    <div className="input-group w-auto">
                        <div id="search-autocomplete" className="form-outline">
                            <input type="search" id="form1" className="form-control" placeholder='Search listing' />
                        </div>
                        <button type="button" className="btn btn-search-listing  add-listing">
                            <i className="bi bi-search"></i>
                        </button>
                    </div>

                    <div className='d-flex gap-4 flex-wrap'>
                        <div className="dropdown">
                            <button className="btn btn-search-listing dropdown-toggle w-auto add-listing" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Rooms and Bedroom
                            </button>
                        </div>
                        <div className="dropdown">
                            <button className="btn btn-search-listing dropdown-toggle w-auto add-listing" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Amenities
                            </button>
                        </div>
                        <div className="dropdown">
                            <button className="btn btn-search-listing dropdown-toggle w-auto add-listing" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Listing Status
                            </button>
                        </div>
                    </div>



                </div>

            </div>

            <div className='container-fluid p-5'>
                <div className='table-responsive'>
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">
                                    <label className="form-check-label" for="flexCheckDefault">
                                        listing
                                    </label>
                                </th>
                                <th scope="col">Status</th>
                                <th scope="col">Instant Book</th>
                                <th scope="col">Rooms and bedroom</th>
                                <th scope="col">Last Modified</th>
                                <th scope="col">Edit</th>
                            </tr>
                        </thead>
                        <tbody>
                            {listings && listings.map(listing => {
                                return (
                                    <tr key={listing.id}>
                                        {/* <th scope="row" className='field-check-listing'>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            </div>
                                        </th> */}
                                        <td>
                                            <div className='d-flex gap-2 '>
                                                <div style={{ height: 200 }}>
                                                    <img className='image-listing' src={baseUrl + '../storage/' + listing.cover_image} width={'100%'} height={'100%'} alt="..." />
                                                </div>
                                                <div>
                                                    <h3 className='listing-property-text mt-3'>{listing.title}</h3>
                                                    <div className='d-flex '>
                                                        <i className="bi bi-geo-fill"></i>
                                                        <p className='m-0 listing-text'>{listing.city}, {listing.country_code}</p>
                                                    </div>
                                                    <p className='m-0 mt-1 listing-text'>{listing.currency_symbol}{listing.price}</p>


                                                </div>
                                            </div>

                                        </td>
                                        <td>
                                            <div className='d-flex gap-1'>
                                                <i className="listing-property-done bi bi-check-lg"></i>
                                                <p>{listing.status}</p>
                                            </div>
                                        </td>
                                        <td>
                                            <div className='d-flex gap-1 instant-book-table'>
                                                <i className="listing-property-done bi bi-check-square-fill"></i>
                                                <p>Yes</p>
                                            </div>
                                        </td>
                                        <td>
                                            <div className='d-flex flex-wrap gap-1'>
                                                <p>{listing.no_of_guests} Guests</p>
                                                <p>{listing.no_of_bedrooms} Bedrooms</p>
                                                <p>{listing.no_of_bathrooms} Bathrooms</p>
                                            </div>
                                        </td>
                                        <td>
                                            <div className='instant-book-table'>
                                                <p>{moment(listing.created_at).format("MMM Do YY")}</p>
                                            </div>


                                        </td>
                                        <td>
                                            <div className='d-flex gap-1 '>
                                                <i className="edit-listing-icon bi bi-gear-fill"></i>
                                                <p className='edit-listing-text'>Edit</p>
                                            </div>


                                        </td>
                                    </tr>
                                )
                            })}

                            {/* <tr>
                            <th scope="row" className='field-check-listing'><div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                
                            </div></th>
                            <td>
                            <div className='d-flex gap-2 '>                                
                            <img className='image-listing' src="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1600" width={'100%'} height={'100%'} alt="..."/>
                            <div>
                            <h3 className='listing-property-text mt-3'>Washiston House</h3>
                            <div className='d-flex '>
                            <i className="bi bi-geo-fill"></i>
                            <p className='m-0 listing-text'>Islamabad,Pakistan</p>
                            </div>
                            <p className='m-0 mt-1 listing-text'>$ 500</p>


                            </div>
                             </div>

                            </td>
                            <td>
                                <div className='d-flex gap-1'>
                                <i className="listing-property-done bi bi-check-lg"></i>
                                <p>Published</p>
                                </div>
                            </td>
                            <td>
                                <div className='d-flex gap-1 instant-book-table'>
                                <i className="listing-property-done bi bi-check-square-fill"></i>
                                <p>YES</p>
                                </div>
                            </td>
                            <td>
                                <div className='d-flex gap-1'>
                               <p>2 bedroom</p>
                               <p>1 bedroom</p>
                                <p>2 baths</p>
                                </div>
                            </td>
                            <td>
                                <div className='instant-book-table'>
                                <p>2 days ago</p>
                                </div>
                                
                                
                            </td>
                            <td>
                                <div className='d-flex gap-1 '>
                                <i className="edit-listing-icon bi bi-gear-fill"></i>
                                <p className='edit-listing-text'>Edit</p>
                                </div>
                                
                                
                            </td>
                        </tr> */}


                        </tbody>
                    </table>
                </div>

            </div>




        </>
    );
}

export default ViewListings;