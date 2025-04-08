import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigators">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
        eCommerce Website Description (General & Professional):

Welcome to our eCommerce platform – your ultimate online destination for a seamless and enjoyable shopping experience. We offer a wide selection of high-quality products across various categories including electronics, fashion, home & kitchen, beauty, and more – all at competitive prices.

Our website is designed to be user-friendly, fast, and secure, ensuring that you can browse, compare, and purchase products effortlessly. With powerful search and filtering tools, detailed product descriptions, secure payment gateways, and real-time order tracking, we make online shopping easier than ever.

Whether you're shopping for everyday essentials or something special, we’re committed to providing exceptional customer service, timely delivery, and a smooth return process to guarantee your satisfaction..
        </p>
        <p>
          E-commerce websites typically display products or services along with
          detailed descriptions, images, prices, and any available variations
          (e.g., sizes, colors). Each product usually has its own dedicated page
          with relevant information.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
