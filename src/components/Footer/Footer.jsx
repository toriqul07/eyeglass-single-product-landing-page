import linkedin from '../../assets/images/linkdin.png';
import instagram from '../../assets/images/Instagram.png';
import twitter from '../../assets/images/twitter.png';

const Footer = () => {
    return (
        <div className='lg:ml-60'>
            <div className="top-[6440px] lg:flex lg:gap-20  absolute  lg:top-[3936px] lg:left-[30px] lg:w-[1804px] h-[3000px] lg:h-[368px] lg:pl-10 pt-5">
                <div className='pb-4'>
                    <h1 className="pt-3 pb-3 font-bold text-3xl"><span className="text-black">Eye</span><span className="text-yellow-400">Glass</span></h1>
                    <h6 className=" pb-3 font-jost font-normal text-xs leading-[26px]">Latin literature from 45 BC, making it over 2000 <br />years old. Richard McClintock, at <br /> Latin professor at Hampde</h6>
                    <div className='flex gap-3 pb-3'>
                        <img src={linkedin} alt="" />
                        <img src={instagram} alt="" />
                        <img src={twitter} alt="" />
                    </div>
                </div>
                <div className='lg:ml-60 lg:flex lg:gap-20'>
                    <div className='pb-4 pl-4'>
                        <h3 className='font-jost font-bold text-xl leading-[30px]'>Support</h3>
                        <p className='font-jost font-normal text-xs leading-[26px]'>Privacy Policy</p>
                        <p className='font-jost font-normal text-xs leading-[26px]'>Terms & Conditions</p>
                        <p className='font-jost font-normal text-xs leading-[26px]'>Product FAQs</p>
                        <p className='font-jost font-normal text-xs leading-[26px]'>Company Support</p>
                        <p className='font-jost font-normal text-xs leading-[26px]'>Manage Account</p>
                    </div>
                    <div className='pb-4 pl-4'>
                        <h3 className='font-jost font-bold text-xl leading-[30px]'>Quick Links</h3>
                        <p className='font-jost font-normal text-xs leading-[26px]'>About Us</p>
                        <p className='font-jost font-normal text-xs leading-[26px]'>Blog Post</p>
                        <p className='font-jost font-normal text-xs leading-[26px]'>Product Features</p>
                        <p className='font-jost font-normal text-xs leading-[26px]'>Company Info</p>
                        <p className='font-jost font-normal text-xs leading-[26px]'>Company Info</p>
                    </div>
                    <div className='pb-4 pl-4'>
                        <h3 className='font-jost font-bold text-xl leading-[30px]'>Communnity</h3>
                        <p className='font-jost font-normal text-xs leading-[26px]'>Help Center</p>
                        <p className='font-jost font-normal text-xs leading-[26px]'>Become an affiliate</p>
                        <p className='font-jost font-normal text-xs leading-[26px]'>Product FAQs</p>
                        <p className='font-jost font-normal text-xs leading-[26px]'>Our Fourms</p>
                        <p className='font-jost font-normal text-xs leading-[26px]'>Product API</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;