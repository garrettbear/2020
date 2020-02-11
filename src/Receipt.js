import React from "react";
import "./App.css";
import Codepen from "./assets/img/num26.png";
import Coupon from "./components/Coupon";

function App() {
  return (
    <div className="layout">
      <div id="showScroll" class="cvs">
        <div class="receipt">
          <h1 class="logo">GW/resume</h1>
          <div class="address">1313 Random St. Santa Monica, CA</div>
          <div class="transactionDetails">
            <div class="detail">Reg#17</div>
            <div class="detail">TRN#1313</div>
            <div class="detail">CSHR#00097655</div>
            <div class="detail">str#9852</div>
          </div>
          <div class="transactionDetails">Helped by: Garrett Whisten</div>
          <div class="centerItem bold">
            <div class="item">ExtraBear Card #: *********1875</div>
          </div>
          <div class="transactionDetails">
            <div class="detail">1</div>
            <div class="detail">Design Engineer</div>
            <div class="detail">$2b</div>
          </div>
          <div class="survey bold">
            <p>Survey ID #</p>
            <p class="surveyID">6588 4755 3256 544 21</p>
          </div>
          <div class="paymentDetails bold">
            <div class="detail">TOTAL</div>
            <div class="detail">$2B</div>
          </div>
          <div class="paymentDetails">
            <div class="detail">CHARGE</div>
            <div class="detail">$2B</div>
          </div>
          <div class="paymentDetails">
            <div class="detail">************4023</div>
            <div class="detail">CH</div>
          </div>
          <div class="creditDetails">
            <p>VISA CREDIT &nbsp;&nbsp;&nbsp;&nbsp; ****************</p>
            <p>approved# 09773B</p>
            <p>ref# 013589</p>
            <p>tran type: SALE</p>
            <p>AID: 30000000090755</p>
            <p>TC: B7A2A4044AEE380A4</p>
            <p>terminal: 69010003</p>
            <p>no signature required</p>
            <p>CVM: 1e0300</p>
            <p>TMR(95): 0080081111</p>
            <p>TS(9B): E900</p>
          </div>

          <div class="paymentDetails">
            <div class="detail">CHANGE</div>
            <div class="detail">.00</div>
          </div>
          <div class="receiptBarcode">
            <div class="barcode">HelloCVSScript</div>
            2003 0998 9000 8730 21
          </div>
          <div class="returnPolicy bold">
            Returns with receipt, subject to GW Return Policy, thru 12/31/2020.
          </div>
          <div class="returnPolicy">
            <div class="detail">January 13, 2020</div>
            <div class="detail">11:11 AM</div>
          </div>
          <div class="tripSummary">
            <div class="bold">Trip Summary:</div>
            <div class="item">
              <div>Today You Saved:</div>
              <div>.00</div>
            </div>
            <div class="item">
              <div>Savings Value</div>
              <div>0%</div>
            </div>
          </div>
          <div class="feedback">
            <div class="break">*************************************</div>
            <p class="center">
              We would love to hear your feedback on your recent experience with
              us. This survey will only take 1 minute to complete.
            </p>
            <h3 class="clickBait">Share Your Feedback</h3>
            <h4 class="web">www.GarrettBear.com/survey</h4>
            <p class="center">No Hablamos español</p>
            <div class="break">*************************************</div>
          </div>
          <div id="coupons" class="coupons">
            <div class="couponContainer">
              <h1 class="logo">GW/resume</h1>
              <div class="discount">$2.00 off</div>
              <div class="discountDetails">
                $2.00 off COLEGATE Toothbrush, Toothpaste, or Mouthwash
              </div>
              <div class="expiration">
                <div class="item bold">Expires 12/12/2020</div>
                <div class="item">Up to $2 Value</div>
              </div>
              <div class="barcode">HelloCVSMate1</div>
              <div class="barcodeID center">9007 9876 9087 7665 62</div>
              <div class="legal center">
                ExtraBear card required. Excludes lottery, money orders, postage
                stamps, milk, prescriptions, pre-paid cards, gift cards,
                pseudoephedrine products, other fees, deposits, taxes, alcohol
                and local exclusions. No cash back. Tax charged on pre-coupon
                price where required. Limit of one purchase-based coupon, i.e.,
                $4 off $20 purchase, per transaction. Not valid in specialty
                centers within CVS.
              </div>
              <div class="couponBottom">
                <p>ExtraBear Card #: *7140 00130030598777</p>
                <p>CPN#: 85887</p>
              </div>
            </div>
          </div>
          <Coupon />
        </div>
      </div>
      <div className="codpen">
        <a
          href="https://codepen.io/2019/popular/pens/8"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Codepen} loading="lazy" alt="Number 26 Codepen" />
        </a>
      </div>
    </div>
  );
}

export default App;
