import React, { useState } from 'react';
import { FaRegAddressBook, FaRegEnvelope, FaRegUser, FaRegMap } from 'react-icons/fa';
import './contact.css';
import { MdEmail } from 'react-icons/md';
import axios from 'axios';
import ShapeOne from '../../assets/shape-1.png';

const Contact = () => {
    const [form, setForm] = useState({
        name:'',
        email:'',
        subject:'',
        message:'',
    });
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setForm({ ...form, [name]: value });
    };
    const handleSubmit = (e) => {
      e.preventDefault();
      axios.post('https://api.sheetbest.com/sheets/bb1106d0-555d-4497-80e4-83ba940d1b89',
        form
      )
      .then((response) => {
        console.log(response);
        // Clearing Form Fields
        setForm({ name: '', email: '', subject:'', message:'' });
      });
    }
  return (
    <section className='contact section' id='contact'>
      <h2 className="section__title text-cs">CONTACT ME</h2>
      <p className='section__subtitle'>
        I'm <span> Open to Opportunities</span>
      </p>
      <div className="contact__container container grid">
        {/* LEFT COLUMN - Contact Info */}
        <div className="contact__info">
          <div className="contact__card">
            <span className="contact__card-icon"><FaRegMap /></span>
            <div>
              <h3 className="contact__card-title">Address</h3>
              <p className="contact__card-data">Sivaganga, Tamil Nadu</p>
            </div>
          </div>
          <div className="contact__card">
            <span className="contact__card-icon"><FaRegUser /></span>
            <div>
              <h3 className="contact__card-title">Availability</h3>
              <p className="contact__card-data">Actively Seeking New Opportunities</p>
            </div>
          </div>
          <div className="contact__card">
            <span className="contact__card-icon"><FaRegEnvelope /></span>
            <div>
              <h3 className="contact__card-title">Email</h3>
              <p className="contact__card-data">krishnavenimohan0102@gmail.com</p>
            </div>
          </div>
          <div className="contact__card">
            <span className="contact__card-icon"><FaRegAddressBook /></span>
            <div>
              <h3 className="contact__card-title">Phone</h3>
              <p className="contact__card-data">+91 79048 03767</p>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN - Contact Form */}
        <div className="contact__content">
          <form className='contact__form' onSubmit={handleSubmit}>
            <div className="contact__form-group grid">
              <div className="contact__form-div">
                <label className="contact__form-tag text-cs">Your Full Name <b>*</b></label>
                <input 
                type="text" 
                name='name' 
                onChange={handleChange}
                value={form.name} 
                className='contact__form-input' required />
              </div>
              <div className="contact__form-div">
                <label className="contact__form-tag text-cs">Your Email Address <b>*</b></label>
                <input 
                type="email"
                name='email' 
                onChange={handleChange}
                value={form.email} 
                className='contact__form-input' required />
              </div>
              <div className="contact__form-div contact__form-subject">
                <label className="contact__form-tag text-cs">Your Subject <b>*</b></label>
                <input 
                type="text" 
                name='subject' 
                onChange={handleChange}
                value={form.subject} 
                className='contact__form-input' required />
              </div>
              <div className="contact__form-div contact__form-area">
                <label className="contact__form-tag text-cs">Your Message <b>*</b></label>
                <textarea 
                name='message'
                onChange={handleChange}
                value={form.message}
                className='contact__form-input' required>
                </textarea>
              </div>
            </div>
            <div className="contact__submit">
                <p>* Accept the terms and conditions</p>
                <button type='submit' className='btn text-cs'>
                    Send Message
                </button>
            </div>
          </form>
        </div>
      </div>
          <div className="section__deco deco__left">
               <img src={ShapeOne} alt="" className='shape' />
             </div>
             <div className="section__bg-wrapper">
      <span className="bg__title">Contact Me</span>
    </div>
    </section>
  );
};

export default Contact;
