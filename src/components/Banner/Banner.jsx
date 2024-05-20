import icon from '../../assets/images/icon.png';
import image from '../../assets/images/Image.png';
import slider from '../../assets/images/Slider.png';
import icon1 from '../../assets/images/icon1.png';
import oval from '../../assets/images/Oval.png';
import icon3 from '../../assets/images/icon3.png';
import icon4 from '../../assets/images/icon4.png';

const Banner = () => {
    return (
        <div>
            <div className='bg-[#eaeaeaf3]'>
                <div className='mb-10 md:absolute md:top-[422px] md:left-[120px] md:w-[566px] md:h-[102px] md:text-3xl md:leading-[66px]'>
                    <h2 className=" font-jost font-bold text-black">Personalized Eyeglass<br />Shopping</h2>
                    <div className='flex items-center gap-6'>
                        <img src={icon} alt="" />
                        <h4 className='bg-black text-white lg:w-[76px] lg:h-[26px] font-jost font-bold lg:text-[18px] lg:leading-[26.01px]'>BuyNow</h4>
                    </div>
                </div>
                <div className='pb-4'>
                    <img className='md:absolute md:top-[105px] md:left-[444px] w-80 md:w-[568px] md:h-[660px]' src={image} alt="" />
                </div>
                <div className='pt-2 md:absolute md:top-[507px] md:left-[800px] lg:left-[1123px] w-[17px] h-[111px]'>
                    <img className='ml-5' src={slider} alt="" />
                </div>
            </div>

            <div className='ml-20 mt-30 lg:gap-6 lg:flex lg:absolute lg:top-[686.65px] lg:left-[292px] lg:w-[1006px] lg:h-[438.35px]'>
                <div className='mb-10'>
                    <img src={icon1} alt="" />
                    <h4>Search you sunglass</h4>
                    <p>Shop Stylish Eyewear Now</p>
                </div>
                <div className='mb-10'>
                    <img src={oval} alt="" />
                    <h4>Search you sunglass</h4>
                    <p>Shop Stylish Eyewear Now</p>
                </div>
                <div className='mb-10'>
                    <img src={icon3} alt="" />
                    <h4>Search you sunglass</h4>
                    <p>Shop Stylish Eyewear Now</p>
                </div>
                <div className='mb-10'>
                    <img src={icon4} alt="" />
                    <h4>Search you sunglass</h4>
                    <p>Shop Stylish Eyewear Now</p>
                </div>
            </div>
        </div>

    );
};

export default Banner;