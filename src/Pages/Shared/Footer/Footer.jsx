import React from 'react';

const Footer = () => {
    return (
<footer className="footer footer-center p-10 bg-base-300 text-base-content rounded">
  <div className="grid grid-flow-col gap-4">
    <a className="link link-hover">Home</a> 
    <a className="link link-hover">Contact</a> 
    <a className="link link-hover">About us</a> 
    <a className="link link-hover">Classes</a>
  </div> 
  <div>
    <div className="">
      <h2 className='text-xl font-bold'>Sports club</h2>
      <h2>+8801733439812 </h2>
      <h3 className='font-semibold'>Tangail</h3>
      <p className='font-semibold'>Dhaka Bangladesh</p>
    </div>
  </div> 
  <div>
    <p>Copyright © 2023 - All right reserved by Sazzad <br/> Sports Club, XYZ institution</p>
  </div>
</footer>
    );
};

export default Footer;