import react,{useState} from 'react';
import './script'
import Img from '../Img';
import '../Contact/contact.css';
import $ from 'jquery';


// $(document).ready(function () {
    
//     // Validate Username
//     $('#usercheck').hide();
//     let usernameError = true;
//     $('#username').keyup(function () {
//         validateUsername();
//     });
     
//     function validateUsername() {
//         let usernameValue = $('#username').val();
//         if (usernameValue.length == '') {
//             $('#usercheck').show();
//             usernameError = false;
//             return false;
//         }
//         else if ((usernameValue.length < 3) ||
//             (usernameValue.length > 10)) {
//             $('#usercheck').show();
//             $('#usercheck').html
//                 ("**length of username must be between 3 and 10");
//             usernameError = false;
//             return false;
//         }
//         else {
//             $('#usercheck').hide();
//         }
//     }
 
//     //validate email
//     $('#emailcheck').hide();
//     let emailError = true;
//     $('#email').keyup(function () {
//         validateUserEmail();
//     });
     
//     function validateUserEmail() {
//         let emailValue = $('#email').val();
//         if (emailValue.length == '') {
//             $('#emailcheck').show();
//             emailError = false;
//             return false;
//         }
//         // else if (!isEmail(emailValue)) {
//         //     $('#emailcheck').show();
//         //     $('#emailcheck').html
//         //         ("Enter valid email");
//         //     emailError = false;
//         //     return false;
//         // }
//         else {
//             $('#emailcheck').hide();
//         }
//     }

    
//     // function isEmail(email) {
//     //     return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
//     // }
//     // return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
    


// })



const Contact = () => {
    const [userData, setUserdata] = useState({
        username: '',
        mobileNo: '',
        email: '',
        message: '',
    });

    function setInput(e) {
        const val = e.target.value;
        const name = e.target.name;

        setUserdata({...userData,[name]:val})
    }
    

// firebase
    
    const submitData = async (e) => {
        e.preventDefault();

        const { username, mobileNo, email, message } = userData;

        if (username  && mobileNo && email && message) {
            const res = await fetch('https://reactgym-6157b-default-rtdb.firebaseio.com/',
                {
                    method: 'POST',
                    Headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        username, mobileNo, email, message
                    }),
                }
            );
            if (res) {
                alert('Data Stored');
                setUserdata({
                    username: '',
                    mobileNo: '',
                    email: '',
                    message: ''
                })
            }else {
            alert('plz fill the data')
            }
        } else {
            alert('plz fill the data')
        }
    };
    return (
        <>
            <div className="contact_container">
                <span className="big-circle" />
                <img src={Img.shape} className="square" alt />
                <div className="form">
                    <div className="contact-info">
                    <h3 className="title">Get in touch</h3>
                    <p className="text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                        dolorum adipisci recusandae praesentium dicta!
                    </p>
                    <div className="info">
                        <div className="information">
                        <img src={Img.location} className="icon" alt />
                        <p>22 katargam, Surat 391212</p>
                        </div>
                        <div className="information">
                        <img src={Img.email} className="icon" alt />
                        <p className='email'>yash@v.com</p>

                        </div>
                        <div className="information">
                        <img src={ Img.phone}className="icon" alt />
                        <p>+91 123-456-789</p>
                        </div>
                    </div>
                    <div className="social-media">
                        <p>Connect with us :</p>
                        <div className="social-icons">
                        <a href="#">
                            <i className="fab fa-facebook-f" />
                        </a>
                        <a href="#">
                            <i className="fab fa-twitter" />
                        </a>
                        <a href="#">
                            <i className="fab fa-instagram" />
                        </a>
                        <a href="#">
                            <i className="fab fa-linkedin-in" />
                        </a>
                        </div>
                    </div>
                    </div>
                    <div className="contact-form">
                    <span className="circle one" />
                    <span className="circle two" />
                <form method='POST' id='Form'  autoComplete="off">
                        <h3 className="title">Contact us</h3>
                            
                        <div className="input-container ">
                                <input onChange={setInput}
                                    type="text"
                                    value={userData.username}
                                    id='username'
                                    name="usename" className="input"
                                    required
                                    placeholder='Enter Your Name' />
                            {/* <label htmlFor>Username</label> */}
                                {/* <span>Username</span>
                                <h6 id="usercheck" style={{ color: 'red' }} >

                                </h6> */}
                        </div>
                            
                        <div className="input-container ">
                                <input
                                    onChange={setInput}
                                    value={userData.email} type="email"
                                    id='email'
                                    name="email" className="input"
                                    required placeholder='name12@gmail.com' />
                            {/* <label htmlFor>Email</label> */}
                            {/* <span>Email</span>
                            <h6 id="emailcheck" style={{ color: 'red' }} >

                            </h6> */}
                        </div>
                        
                        <div className="input-container ">
                                <input
                                    onChange={setInput}
                                    value={userData.mobileNo}
                                    type="tel"
                                    name="phone" className="input"
                                    required
                                    placeholder='+00 777 7777 777' />
                            {/* <label htmlFor>Phone</label> */}
                                {/* <span>Phone</span> */}
                                
                        </div>
                        
                        <div className="input-container textarea">
                                <textarea onChange={setInput}
                                    value={userData.message} name="message" className="input" placeholder='Leave Message' />
                            {/* <label htmlFor>Message</label> */}
                            <span>Message</span>
                        </div>
                            
                        <input onClick={submitData} type="submit" id='submitbtn' value="Submit" className="btn" />
                            
                    </form>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Contact;