import classes from './footer.module.scss';

const socialIcon = [{
    link: 'https://www.google.com/maps/place/EdYoda+(zekeLabs+Technologies+Private+Limited)/@12.9673779,77.7138924,17z/data=!3m1!4b1!4m5!3m4!1s0x3bae12256340d8a7:0xc9c6dfb48a7eeadd!8m2!3d12.9673779!4d77.7138924',
    icon: 'fa-solid fa-location-dot'
},
{
    link: 'https://twitter.com/EdYodaHQ',
    icon: 'fa-brands fa-twitter'
},
{
    link: 'https://en-gb.facebook.com/edYoda.here/',
    icon: 'fa-brands fa-facebook-f'
},
{
    link: 'https://www.linkedin.com/company/edyoda/?originalSubdomain=in',
    icon: 'fa-brands fa-linkedin-in'
},
{
    link: 'https://t.me/interviewspreparation',
    icon: 'fa-brands fa-telegram'
},
]

const social = socialIcon.map((item, i) => {
    return (
        <a href={item.link} target='_blank' rel='noreferrer' key={i}>
            <i className={item.icon}></i>
        </a>
    )
})

function Footer() {
    return (
        <div className={classes.footer}>
            <div>
                <h3>
                    Edyoda
                </h3>
                <p>About Us</p>
                <p>Career</p>
                <p>Contact Us</p>
                <p>Terms of Use</p>
                <p>Privacy Policy</p>
            </div>
            <div>
                <h3>
                    Resources
                </h3>
                <p>Learning Path</p>
                <p>Courses</p>
                <p>Learning Videos</p>
                <p>Educators</p>
                <p>Edyoda Stories</p>
                <p>University</p>

            </div>
            <div>
                <h3>
                    For Enterprises
                </h3>
                <p>Train Your Employees</p>
                <h3>
                    Quick Links
                </h3>
                <p>Learn and Earn</p>
                <p>Become a Learning-Enabler</p>
                <p>Tips for Learning-Enabler</p>
                <p>Request New Topic</p>
                <p>Certification</p>
                <p>Affiliate Program</p>
            </div>
            <div>
                <h3>
                    Connect
                </h3>
                <p>1st Floor, <br /> Gopalan Millennium Tower,<br /> ITPL Main Road, Brookefield,<br /> Bengaluru, Karnataka-5600037,<br /> India</p>
                <a href='mailto:hello@edyoda.com' className={classes.mail}>
                    <i className="fa-solid fa-envelope"></i>
                    hello@edyoda.com
                </a>
                <div className={classes.social}>
                    {social}
                </div>
                <span>&copy; 2022
                    <a href='https://a14a19.github.io/' target='_blank' rel='noreferrer'>(Anas Ahmed)</a>
                </span>
                <span>zekeLabs Technologies Private Limited</span>
            </div>
        </div>
    )
}

export default Footer;