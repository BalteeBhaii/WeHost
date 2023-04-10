import React from "react";
import Header from "../../components/Partials/header/header";
import Footer from "../../components/Partials/footer/footer";

const WeCover = () => {
  return (
    <>
      <Header />
      <div className="container mt-5">
        <h1 className="text-center mb-5">
          WeCover provides four protections <br/>for every guest on every stay
        </h1>
        <div className="row d-flex justify-content-center">
          <div className="col-md-9">
            <div className="row align-content-stretch">
              <div className="col-md-6">
                  <h3 className="h4">Booking Protection Guarantee</h3>
                  <p>
                    In the unlikely event a Host needs to cancel your booking
                    within 30 days of check-in, we’ll find you a similar or
                    better home, or we’ll refund you
                  </p>
                  <hr/>
              </div>

              <div className="col-md-6">
                  <h3 className="h4">Check-In Guarantee</h3>
                  <p>
                  If you can’t check into your home and the Host cannot resolve the issue, we’ll find you a similar or better home for the length of your original stay, or we’ll refund you.
                  </p>
                  <hr/>
              </div>

              <div className="col-md-6">
                <h3 className="h4">Get-What-You-Booked Guarantee</h3>
                <p>If at any time during your stay you find your listing isn't as advertised—for example, the refrigerator stops working and your Host can’t easily fix it, or it has fewer bedrooms than listed—you'll have three days to report it and we’ll find you a similar or better home, or we’ll refund you.</p>
                <hr/>
              </div>

              <div className="col-md-6 position-relative">
                <h3 className="h4">24-hour Safety Line</h3>
                <p>If you ever feel unsafe, you’ll get priority access to specially-trained safety agents, day or night.</p>
                <hr className="flex-end"/>
                
              </div>
            </div>
          </div>
        </div>


        <div className="text-center mt-5">
<h1>Only Airbnb gives you AirCover</h1>

<div className="row d-flex justify-content-center">
<div className="col-md-6">
<div className="row">
<div className="col-md-12">
<table class="table text-start">
<thead>
    <tr>
        <th></th>
        <th className="text-end">We Host</th>
        <th className="text-end">Competitors</th>
    </tr>
</thead>
<tbody>
    <tr>
        <td>Booking Protection Guarantee</td>
        <td className="text-end"><i class="bi bi-check2"></i></td>
        <td  className="text-end"><i class="bi bi-x"></i></td>
    </tr>
    <tr>
        <td>Check-In Guarantee</td>
        <td  className="text-end"><i class="bi bi-check2"></i></td>
        <td  className="text-end"><i class="bi bi-x"></i></td>
    </tr>
    <tr>
        <td>Get-What-You-Booked Guarantee</td>
        <td  className="text-end"><i class="bi bi-check2"></i></td>
        <td  className="text-end"><i class="bi bi-x"></i></td>
    </tr>
    <tr>
        <td>24-hour Safety Line</td>
        <td  className="text-end"><i class="bi bi-check2"></i></td>
        <td  className="text-end"><i class="bi bi-x"></i></td>
    </tr>
</tbody>
</table>
</div>
</div>
</div>
</div>



        </div>

      </div>

      <Footer />
    </>
  );
};

export default WeCover;
