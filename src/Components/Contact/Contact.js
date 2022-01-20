import React from 'react';
import "./Contact.css";

const Contact = () => {
    return (
      <div className="pt-5 ">
        <h3>Contact Us</h3>
        <p>
          Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
          gentrify.
            </p>
           <div className="container pd-5 d-flex justify-content-center">
  <form style={{"width": "70%"}} action="/action_page.php">
    <label htmlFor="fname"><span>First Name</span></label>
    <input type="text" id="fname" name="firstname" placeholder="Your name.."/>

    <label htmlFor="lname">Last Name</label>
    <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>

    <label htmlFor="country">Country</label>
    <select id="country" name="country">
      <option value="australia">Australia</option>
      <option value="canada">Canada</option>
      <option value="usa">USA</option>
    </select>

    <label htmlFor="subject">Subject</label>
                    <textarea id="subject" name="subject" placeholder="Write something.." style={{ "height": "200px" }}></textarea>

    <input type="submit" value="Submit"/>
  </form>
</div>
      </div>
    );
};

export default Contact;