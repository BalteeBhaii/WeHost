import React from 'react';
import { Link } from "react-router-dom";
// import LocationModal from '../../LocationModal/LocationModal';
// import './.css'
import FilterModal from '../Utilities/Filter/filter';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { useState, useEffect } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import axios from 'axios';
import { baseUrl } from '../../config';

const More = () => {
  const [showModal, setShowModal] = useState(false);
  const [Categories, setCategories] = useState([]);
  const [categoryId, setCategoryId] = useState(1);
  const [categoryListing, setCategoryListing] = useState([]);

  const options = {
    items: 1,
    margin: 0,
    nav: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  };

  const getCategoryListing = async () => {
    var config = {
      headers: {
        Accept: 'application/json'
      }
    }
    await axios.get(`${baseUrl}listings/?category_id=${categoryId}`, { config })
      .then(res => {
        console.log(res.data.data);
        setCategoryListing(res.data.data);
      })
      .catch(err => {
        console.log(err)
      })
  }

  const getCategories = async () => {
    var config = {
      headers: {
        Accept: 'application/json'
      }
    }
    await axios.get(`${baseUrl}categories`, { config })
      .then(res => {
        console.log(res.data.data)
        setCategories(res.data.data);
      })
      .catch(err => {
        console.log(err)
      })
  }
  useEffect(() => {
    getCategories();
    getCategoryListing()
    setTimeout(() => {
      let title = document.getElementsByClassName("desired-hotel-title")[0];

    }, 1000);
  }, [categoryId]);

  const loadedHandler = (event) => {
    setTimeout(() => {
        let notLoaded1 = event.target.parentNode;
        let imgLoaded = event.target.parentNode;
    
        if(imgLoaded){
            imgLoaded.classList.remove("not-loaded");
        }

        if(notLoaded1 && notLoaded1.classList.contains("not-loaded")){
            notLoaded1.classList.remove("not-loaded")
        }
    }, 500);
  }

const textLoadedHandler = (event) => {
    setTimeout(() => {
        let parent = event.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
        let textsLoaded = parent.querySelectorAll(".not-loaded");

        if(textsLoaded){
            for(let item of textsLoaded){
            item.classList.remove("not-loaded");
            }
        }
    }, 500);
}

  return (
    <>
      <div className='container mt-4 mb-3 position-relative'>
        <div>
          <OwlCarousel className='owl-carousel owl-theme' margin={10} autoWidth={true} nav>
            {Categories.map(category => {
              return (
                <div key={category.id} className='text-center category-list' onClick={e => setCategoryId(category.id)}>
                  <div className='m-3' style={{ cursor: 'pointer' }}>
                    <i className="bi bi-house-door"></i>
                    <h4 style={{}}>{category.name}</h4>
                  </div>
                </div>
              )
            }

            )}
          </OwlCarousel>
        </div>
        
        <div className='row'>
          <div className='col-sm-11 col-md-6 col-lg-4 col-xl-3 mb-3'>
            <div className="card hotel-card-style border-0" >
              <div className=''>
                <Carousel showThumbs={false} showArrows={false} swipeable={true}>
                  <div className='image-div not-loaded'>
                      <img alt="" src="https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3dpdHplcmxhbmR8ZW58MHx8MHx8&w=1000&q=80" onLoad={textLoadedHandler} width={'100%'} height={'100%'} />
                  </div>
                  <div className='image-div  not-loaded'>
                      <img alt="" src="https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3dpdHplcmxhbmR8ZW58MHx8MHx8&w=1000&q=80" width={'100%'} height={'100%'}/>

                  </div>
                  <div className='image-div  not-loaded'>
                    <img className='imgSizeStyle' src="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1600" width={'100%'} height={'100%'} alt="..." />
                  </div>
                </Carousel>
              </div>
              <div className=''>
                <div className="card-body p-1">
                
                  <div className='mt-2 d-flex flex-column'>
                    <div className='d-flex justify-content-between w-100 not-loaded'>
                      <p className='fw-bold hatyouwant-description mb-1'>Ko Samui, Thailand</p>
                      <p className='mb-1'><i className="bi bi-star-fill"></i> 4.5</p>
                    </div>
                    <span className='fw-light not-loaded mt-1'>1,786 kilometers away</span>
                    <span className='fw-light mb-1 not-loaded mt-1'>March 1 - 6</span>
                    <span className='fw-light not-loaded'>$1,876 <span className='fw-light mx-2'>night</span></span>
                  </div>
                  <div className='d-flex justify-content-between w-100 not-loaded mt-1' style={{ fontSize: '0.8rem' }}>
                    <p className='fw-semibold'><i className="bi bi-geo-alt me-1 fw-semibold"></i>Lima City</p>
                    <p><Link className='link-text-color' to='/listing/detail/12'><ins>Know More</ins></Link></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-sm-11 col-md-6 col-lg-4 col-xl-3 mb-3'>
            <div className="card hotel-card-style border-0" >
              <div className=''>
                <Carousel showThumbs={false} showArrows={false} swipeable={true}>
                  <div className='image-div not-loaded'>
                      <img alt="" src="https://t3.ftcdn.net/jpg/01/58/43/24/360_F_158432445_ZLFZj8siBCGEZJ2kTpJtJzCYRDckIHjh.jpg" onLoad={textLoadedHandler} width={'100%'} height={'100%'} />
                  </div>
                  <div className='image-div  not-loaded'>
                      <img alt="" src="https://images.pexels.com/photos/1172064/pexels-photo-1172064.jpeg?auto=compress&cs=tinysrgb&w=1600" width={'100%'} height={'100%'}/>

                  </div>
                  <div className='image-div  not-loaded'>
                    <img className='imgSizeStyle' src="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1600" width={'100%'} height={'100%'} alt="..." />
                  </div>
                </Carousel>
              </div>
              <div className=''>
                <div className="card-body p-1">
             
                  <div className='mt-2 d-flex flex-column'>
                    <div className='d-flex justify-content-between w-100 not-loaded'>
                      <p className='fw-bold hatyouwant-description mb-1'>Thagas</p>
                      <p className='mb-1'><i className="bi bi-star-fill"></i> 4.2</p>
                    </div>
                    <span className='fw-light not-loaded mt-1'>186 kilometers away</span>
                    <span className='fw-light mb-1 not-loaded mt-1'>March 1 - 10</span>
                    <span className='fw-light not-loaded'>$176 <span className='fw-light mx-2'>day</span></span>
                  </div>
                  <div className='d-flex justify-content-between w-100 not-loaded mt-1' style={{ fontSize: '0.8rem' }}>
                    <p className='fw-semibold'><i className="bi bi-geo-alt me-1 fw-semibold"></i>Thagas City</p>
                    <p><Link className='link-text-color' to='/listing/detail/12'><ins>Know More</ins></Link></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-sm-11 col-md-6 col-lg-4 col-xl-3 mb-3'>
            <div className="card hotel-card-style border-0" >
              <div className=''>
                <Carousel showThumbs={false} showArrows={false} swipeable={true}>
                  <div className='image-div not-loaded'>
                      <img alt="" src="https://images.pexels.com/photos/2444403/pexels-photo-2444403.jpeg?cs=srgb&dl=pexels-chris-czermak-2444403.jpg&fm=jpg" onLoad={textLoadedHandler} width={'100%'} height={'100%'} />
                  </div>
                  <div className='image-div  not-loaded'>
                      <img alt="" src="https://images.pexels.com/photos/1172064/pexels-photo-1172064.jpeg?auto=compress&cs=tinysrgb&w=1600" width={'100%'} height={'100%'}/>

                  </div>
                  <div className='image-div  not-loaded'>
                    <img className='imgSizeStyle' src="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1600" width={'100%'} height={'100%'} alt="..." />
                  </div>
                </Carousel>
              </div>
              <div className=''>
                <div className="card-body p-1">
              
                  <div className='mt-2 d-flex flex-column'>
                    <div className='d-flex justify-content-between w-100 not-loaded'>
                      <p className='fw-bold hatyouwant-description mb-1'>Sino</p>
                      <p className='mb-1'><i className="bi bi-star-fill"></i> 2.2</p>
                    </div>
                    <span className='fw-light not-loaded mt-1'>16 kilometers away</span>
                    <span className='fw-light mb-1 not-loaded mt-1'>March 5</span>
                    <span className='fw-light not-loaded'>$136 <span className='fw-light mx-2'>Morning</span></span>
                  </div>
                  <div className='d-flex justify-content-between w-100 not-loaded mt-1' style={{ fontSize: '0.8rem' }}>
                    <p className='fw-semibold'><i className="bi bi-geo-alt me-1 fw-semibold"></i>Sino</p>
                    <p><Link className='link-text-color' to='/listing/detail/12'><ins>Know More</ins></Link></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-sm-11 col-md-6 col-lg-4 col-xl-3 mb-3'>
            <div className="card hotel-card-style border-0" >
              <div className=''>
                <Carousel showThumbs={false} showArrows={false} swipeable={true}>
                  <div className='image-div not-loaded'>
                      <img alt="" src="https://media.gettyimages.com/id/1075663766/photo/gornergrat-railway-station-switzerland-in-winter.jpg?s=612x612&w=gi&k=20&c=kdFXhI5J8mK_lX6MBJ72o15toPsZBogUvzebZJUFWkU=" onLoad={textLoadedHandler} width={'100%'} height={'100%'} />
                  </div>
                  <div className='image-div  not-loaded'>
                      <img alt="" src="https://images.pexels.com/photos/1172064/pexels-photo-1172064.jpeg?auto=compress&cs=tinysrgb&w=1600" width={'100%'} height={'100%'}/>

                  </div>
                  <div className='image-div  not-loaded'>
                    <img className='imgSizeStyle' src="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1600" width={'100%'} height={'100%'} alt="..." />
                  </div>
                </Carousel>
              </div>
              <div className=''>
                <div className="card-body p-1">
                  
              
                  <div className='mt-2 d-flex flex-column'>
                    <div className='d-flex justify-content-between w-100 not-loaded'>
                      <p className='fw-bold hatyouwant-description mb-1'>Khaplu</p>
                      <p className='mb-1'><i className="bi bi-star-fill"></i> 4.5</p>
                    </div>
                    <span className='fw-light not-loaded mt-1'>2,786 kilometers away</span>
                    <span className='fw-light mb-1 not-loaded mt-1'>May 1 - 6</span>
                    <span className='fw-light not-loaded'>$2276 <span className='fw-light mx-2'>night</span></span>
                  </div>
                  <div className='d-flex justify-content-between w-100 not-loaded mt-1' style={{ fontSize: '0.8rem' }}>
                    <p className='fw-semibold'><i className="bi bi-geo-alt me-1 fw-semibold"></i>Khaplu</p>
                    <p><Link className='link-text-color' to='/listing/detail/12'><ins>Know More</ins></Link></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-sm-11 col-md-6 col-lg-4 col-xl-3 mb-3'>
            <div className="card hotel-card-style border-0" >
              <div className=''>
                <Carousel showThumbs={false} showArrows={false} swipeable={true}>
                  <div className='image-div not-loaded'>
                      <img alt="" src="https://thumbs.dreamstime.com/b/zermatt-switzerland-zermatt-switzerland-gornergrat-tourist-train-waterfall-bridge-matterhorn-valais-region-98823419.jpg" onLoad={textLoadedHandler} width={'100%'} height={'100%'} />
                  </div>
                  <div className='image-div  not-loaded'>
                      <img alt="" src="https://images.pexels.com/photos/1172064/pexels-photo-1172064.jpeg?auto=compress&cs=tinysrgb&w=1600" width={'100%'} height={'100%'}/>

                  </div>
                  <div className='image-div  not-loaded'>
                    <img className='imgSizeStyle' src="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1600" width={'100%'} height={'100%'} alt="..." />
                  </div>
                </Carousel>
              </div>
              <div className=''>
                <div className="card-body p-1">
            
                  <div className='mt-2 d-flex flex-column'>
                    <div className='d-flex justify-content-between w-100 not-loaded'>
                      <p className='fw-bold hatyouwant-description mb-1'>Skardu</p>
                      <p className='mb-1'><i className="bi bi-star-fill"></i>5</p>
                    </div>
                    <span className='fw-light not-loaded mt-1'>116 kilometers away</span>
                    <span className='fw-light mb-1 not-loaded mt-1'>June 1 - 6</span>
                    <span className='fw-light not-loaded'>$220 <span className='fw-light mx-2'>Day</span></span>
                  </div>
                  <div className='d-flex justify-content-between w-100 not-loaded mt-1' style={{ fontSize: '0.8rem' }}>
                    <p className='fw-semibold'><i className="bi bi-geo-alt me-1 fw-semibold"></i>Skardu</p>
                    <p><Link className='link-text-color' to='/listing/detail/12'><ins>Know More</ins></Link></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-sm-11 col-md-6 col-lg-4 col-xl-3 mb-3'>
            <div className="card hotel-card-style border-0" >
              <div className=''>
                <Carousel showThumbs={false} showArrows={false} swipeable={true}>
                  <div className='image-div not-loaded'>
                      <img alt="" src="https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=1600" onLoad={textLoadedHandler} width={'100%'} height={'100%'} />
                  </div>
                  <div className='image-div  not-loaded'>
                      <img alt="" src="https://images.pexels.com/photos/1172064/pexels-photo-1172064.jpeg?auto=compress&cs=tinysrgb&w=1600" width={'100%'} height={'100%'}/>

                  </div>
                  <div className='image-div  not-loaded'>
                    <img className='imgSizeStyle' src="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1600" width={'100%'} height={'100%'} alt="..." />
                  </div>
                </Carousel>
              </div>
              <div className=''>
                <div className="card-body p-1">
               
                  <div className='mt-2 d-flex flex-column'>
                    <div className='d-flex justify-content-between w-100 not-loaded'>
                      <p className='fw-bold hatyouwant-description mb-1'>Shangrila</p>
                      <p className='mb-1'><i className="bi bi-star-fill"></i> 4.5</p>
                    </div>
                    <span className='fw-light not-loaded mt-1'>3,786 kilometers away</span>
                    <span className='fw-light mb-1 not-loaded mt-1'>January 1 - 6</span>
                    <span className='fw-light not-loaded'>$986 <span className='fw-light mx-2'>Day</span></span>
                  </div>
                  <div className='d-flex justify-content-between w-100 not-loaded mt-1' style={{ fontSize: '0.8rem' }}>
                    <p className='fw-semibold'><i className="bi bi-geo-alt me-1 fw-semibold"></i>Shangrila</p>
                    <p><Link className='link-text-color' to='/listing/detail/12'><ins>Know More</ins></Link></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>



        <div className='w-100 d-flex justify-content-between align-items-center main-text-size-style'>

          <button className='btn filter-button-size-style text-white btn-md px-3 position-fixed'
            onClick={(ev) => setShowModal(!showModal)}>
            <i className="bi bi-funnel me-1"></i>
            Filters
          </button>
          <FilterModal show={showModal} setShowModal={setShowModal} />
        </div>
        <div className='row mt-4'>
          {categoryListing.map(list => {
            return (
              <div className='col-sm-11 col-md-6 col-lg-4 col-xl-3 mb-3'>
                <div className="card hotel-card-style border-0" >
                  <div className=''>
                    <Carousel showThumbs={false} showArrows={false} swipeable={true}>
                      <div className='image-div '>
                        <img alt="" src={`${baseUrl}../storage/${list.cover_image}`} onLoad={textLoadedHandler} width={'100%'} height={'100%'} />
                      </div>
                      <div className='image-div  '>
                        <img alt="" src="https://images.pexels.com/photos/1172064/pexels-photo-1172064.jpeg?auto=compress&cs=tinysrgb&w=1600" width={'100%'} height={'100%'} />

                      </div>
                      <div className='image-div  '>
                        <img className='imgSizeStyle' src="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1600" width={'100%'} height={'100%'} alt="..." />
                      </div>
                    </Carousel>
                  </div>
                  <div className=''>
                    <div className="card-body p-1">
                      <div className='mt-2 d-flex flex-column'>
                        <div className='d-flex justify-content-between w-100 '>
                          <p className='fw-bold hatyouwant-description mb-1'>{list.title}</p>
                          <p className='mb-1'><i className="bi bi-star-fill"></i> 4.5</p>
                        </div>
                        <span className='fw-light mb-1  mt-1'>March 1 - 6</span>
                        <span className='fw-light '>{list.currency_symbol}{list.price} <span className='fw-light mx-2'>night</span></span>
                      </div>
                      <div className='d-flex justify-content-between w-100  mt-1' style={{ fontSize: '0.8rem' }}>
                        <p className='fw-semibold'><i className="bi bi-geo-alt me-1 fw-semibold"></i>{list.city}</p>
                        <p><Link className='link-text-color' to='/hotel/12'><ins>Know More</ins></Link></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
          {/* <div className='col-sm-11 col-md-6 col-lg-4 col-xl-3 mb-3'>
            <div className="card hotel-card-style border-0" >
              <div className=''>
                <Carousel showThumbs={false} showArrows={false} swipeable={true}>
                  <div className='image-div '>
                    <img alt="" src="https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=1600" onLoad={textLoadedHandler} width={'100%'} height={'100%'} />
                  </div>
                  <div className='image-div  '>
                    <img alt="" src="https://images.pexels.com/photos/1172064/pexels-photo-1172064.jpeg?auto=compress&cs=tinysrgb&w=1600" width={'100%'} height={'100%'} />

                  </div>
                  <div className='image-div  '>
                    <img className='imgSizeStyle' src="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1600" width={'100%'} height={'100%'} alt="..." />
                  </div>
                </Carousel>
              </div>
              <div className=''>
                <div className="card-body p-1">
                  <div className='mt-2 d-flex flex-column'>
                    <div className='d-flex justify-content-between w-100 '>
                      <p className='fw-bold hatyouwant-description mb-1'>Ko Samui, Thailand</p>
                      <p className='mb-1'><i className="bi bi-star-fill"></i> 4.5</p>
                    </div>
                    <span className='fw-light  mt-1'>1,786 kilometers away</span>
                    <span className='fw-light mb-1  mt-1'>March 1 - 6</span>
                    <span className='fw-light '>$1,876 <span className='fw-light mx-2'>night</span></span>
                  </div>
                  <div className='d-flex justify-content-between w-100  mt-1' style={{ fontSize: '0.8rem' }}>
                    <p className='fw-semibold'><i className="bi bi-geo-alt me-1 fw-semibold"></i>Lima City</p>
                    <p><Link className='link-text-color' to='/hotel/12'><ins>Know More</ins></Link></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-sm-11 col-md-6 col-lg-4 col-xl-3 mb-3'>
            <div className="card hotel-card-style border-0" >
              <div className=''>
                <Carousel showThumbs={false} showArrows={false} swipeable={true}>
                  <div className='image-div '>
                    <img alt="" src="https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=1600" onLoad={textLoadedHandler} width={'100%'} height={'100%'} />
                  </div>
                  <div className='image-div  '>
                    <img alt="" src="https://images.pexels.com/photos/1172064/pexels-photo-1172064.jpeg?auto=compress&cs=tinysrgb&w=1600" width={'100%'} height={'100%'} />

                  </div>
                  <div className='image-div  '>
                    <img className='imgSizeStyle' src="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1600" width={'100%'} height={'100%'} alt="..." />
                  </div>
                </Carousel>
              </div>
              <div className=''>
                <div className="card-body p-1">
                  <div className='mt-2 d-flex flex-column'>
                    <div className='d-flex justify-content-between w-100 '>
                      <p className='fw-bold hatyouwant-description mb-1'>Ko Samui, Thailand</p>
                      <p className='mb-1'><i className="bi bi-star-fill"></i> 4.5</p>
                    </div>
                    <span className='fw-light  mt-1'>1,786 kilometers away</span>
                    <span className='fw-light mb-1  mt-1'>March 1 - 6</span>
                    <span className='fw-light '>$1,876 <span className='fw-light mx-2'>night</span></span>
                  </div>
                  <div className='d-flex justify-content-between w-100  mt-1' style={{ fontSize: '0.8rem' }}>
                    <p className='fw-semibold'><i className="bi bi-geo-alt me-1 fw-semibold"></i>Lima City</p>
                    <p><Link className='link-text-color' to='/hotel/12'><ins>Know More</ins></Link></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-sm-11 col-md-6 col-lg-4 col-xl-3 mb-3'>
            <div className="card hotel-card-style border-0" >
              <div className=''>
                <Carousel showThumbs={false} showArrows={false} swipeable={true}>
                  <div className='image-div '>
                    <img alt="" src="https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=1600" onLoad={textLoadedHandler} width={'100%'} height={'100%'} />
                  </div>
                  <div className='image-div  '>
                    <img alt="" src="https://images.pexels.com/photos/1172064/pexels-photo-1172064.jpeg?auto=compress&cs=tinysrgb&w=1600" width={'100%'} height={'100%'} />

                  </div>
                  <div className='image-div  '>
                    <img className='imgSizeStyle' src="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1600" width={'100%'} height={'100%'} alt="..." />
                  </div>
                </Carousel>
              </div>
              <div className=''>
                <div className="card-body p-1">
                  <div className='mt-2 d-flex flex-column'>
                    <div className='d-flex justify-content-between w-100 '>
                      <p className='fw-bold hatyouwant-description mb-1'>Ko Samui, Thailand</p>
                      <p className='mb-1'><i className="bi bi-star-fill"></i> 4.5</p>
                    </div>
                    <span className='fw-light  mt-1'>1,786 kilometers away</span>
                    <span className='fw-light mb-1  mt-1'>March 1 - 6</span>
                    <span className='fw-light '>$1,876 <span className='fw-light mx-2'>night</span></span>
                  </div>
                  <div className='d-flex justify-content-between w-100  mt-1' style={{ fontSize: '0.8rem' }}>
                    <p className='fw-semibold'><i className="bi bi-geo-alt me-1 fw-semibold"></i>Lima City</p>
                    <p><Link className='link-text-color' to='/hotel/12'><ins>Know More</ins></Link></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-sm-11 col-md-6 col-lg-4 col-xl-3 mb-3'>
            <div className="card hotel-card-style border-0" >
              <div className=''>
                <Carousel showThumbs={false} showArrows={false} swipeable={true}>
                  <div className='image-div '>
                    <img alt="" src="https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=1600" onLoad={textLoadedHandler} width={'100%'} height={'100%'} />
                  </div>
                  <div className='image-div  '>
                    <img alt="" src="https://images.pexels.com/photos/1172064/pexels-photo-1172064.jpeg?auto=compress&cs=tinysrgb&w=1600" width={'100%'} height={'100%'} />

                  </div>
                  <div className='image-div  '>
                    <img className='imgSizeStyle' src="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1600" width={'100%'} height={'100%'} alt="..." />
                  </div>
                </Carousel>
              </div>
              <div className=''>
                <div className="card-body p-1">
                  <div className='mt-2 d-flex flex-column'>
                    <div className='d-flex justify-content-between w-100 '>
                      <p className='fw-bold hatyouwant-description mb-1'>Ko Samui, Thailand</p>
                      <p className='mb-1'><i className="bi bi-star-fill"></i> 4.5</p>
                    </div>
                    <span className='fw-light  mt-1'>1,786 kilometers away</span>
                    <span className='fw-light mb-1  mt-1'>March 1 - 6</span>
                    <span className='fw-light '>$1,876 <span className='fw-light mx-2'>night</span></span>
                  </div>
                  <div className='d-flex justify-content-between w-100  mt-1' style={{ fontSize: '0.8rem' }}>
                    <p className='fw-semibold'><i className="bi bi-geo-alt me-1 fw-semibold"></i>Lima City</p>
                    <p><Link className='link-text-color' to='/hotel/12'><ins>Know More</ins></Link></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-sm-11 col-md-6 col-lg-4 col-xl-3 mb-3'>
            <div className="card hotel-card-style border-0" >
              <div className=''>
                <Carousel showThumbs={false} showArrows={false} swipeable={true}>
                  <div className='image-div '>
                    <img alt="" src="https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=1600" onLoad={textLoadedHandler} width={'100%'} height={'100%'} />
                  </div>
                  <div className='image-div  '>
                    <img alt="" src="https://images.pexels.com/photos/1172064/pexels-photo-1172064.jpeg?auto=compress&cs=tinysrgb&w=1600" width={'100%'} height={'100%'} />

                  </div>
                  <div className='image-div  '>
                    <img className='imgSizeStyle' src="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1600" width={'100%'} height={'100%'} alt="..." />
                  </div>
                </Carousel>
              </div>
              <div className=''>
                <div className="card-body p-1">
                  <div className='mt-2 d-flex flex-column'>
                    <div className='d-flex justify-content-between w-100 '>
                      <p className='fw-bold hatyouwant-description mb-1'>Ko Samui, Thailand</p>
                      <p className='mb-1'><i className="bi bi-star-fill"></i> 4.5</p>
                    </div>
                    <span className='fw-light  mt-1'>1,786 kilometers away</span>
                    <span className='fw-light mb-1  mt-1'>March 1 - 6</span>
                    <span className='fw-light '>$1,876 <span className='fw-light mx-2'>night</span></span>
                  </div>
                  <div className='d-flex justify-content-between w-100  mt-1' style={{ fontSize: '0.8rem' }}>
                    <p className='fw-semibold'><i className="bi bi-geo-alt me-1 fw-semibold"></i>Lima City</p>
                    <p><Link className='link-text-color' to='/hotel/12'><ins>Know More</ins></Link></p>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default More;