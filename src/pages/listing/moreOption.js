import React, { useEffect, useState } from 'react';
import Hotel from '../../components/hotelscomponents/hotel/hotel';
import Footer from '../../components/Partials/footer/footer';
import Header from '../../components/Partials/header/header';
import DesiredHotels from '../../components/hotelscomponents/DesiredHotels/desiredHotels';
import { timeout } from 'react';
import axios from 'axios';
import { baseUrl } from '../../config';
import More from '../../components/MoreOption/More';

const MoreOption = () => {
  const [Categories, setCategories] = useState([]);
  const [categoryId, setCategoryId] = useState(1);
  const [categoryListing, setCategoryListing] = useState([]);

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

  const loadedHandler = (event) => {
    setTimeout(() => {
      let notLoaded1 = event.target.parentNode;
      let imgLoaded = event.target.parentNode;

      if (imgLoaded) {
        imgLoaded.classList.remove("not-loaded");
      }

      if (notLoaded1 && notLoaded1.classList.contains("not-loaded")) {
        notLoaded1.classList.remove("not-loaded")
      }
    }, 500);
  }

  const textLoadedHandler = (event) => {
    setTimeout(() => {
      let parent = event.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
      let textsLoaded = parent.querySelectorAll(".not-loaded");

      if (textsLoaded) {
        for (let item of textsLoaded) {
          item.classList.remove("not-loaded");
        }
      }
    }, 500);
  }

  console.log('categories are: ', Categories, 'id is: ', categoryId)

  useEffect(() => {
    getCategories();
    getCategoryListing()
  }, [categoryId]);

  return (
    <>
      <Header />
      <Hotel loadedHandler={loadedHandler} categoryId={categoryId} Categories={Categories} />
      <More Categories={Categories} categoryId={categoryId} categoryListing={categoryListing} setCategoryId={setCategoryId} />
      <Footer />
    </>
  );
}

export default MoreOption;