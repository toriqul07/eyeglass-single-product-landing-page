
import image1 from '../../assets/images/image1.png';
const AboutUs = () => {
    return (
        <div className="mb-30 lg:flex lg:ml-10 lg:absolute lg:top-[2372px] lg:w-[1800px] lg: h-[416px]">
            <div className='bg-[#FED29C] lg:w-1/2 lg:flex items-center justify-center'>
                <div>
                    <h3 className="pb-2 lg:pb-2 font-jost lg:font-bold text-xl lg:text-2xl leading-[48px]">Experience clear vision with <br /> OptiChroma Vision Frames</h3>
                    <h6 className="pb-2 lg:pb-2 font-jost lg:font-normal lg:text-xl lg:leading-[30px]">At OptiChroma, we believe that everyone deserves clear <br />  vision and stylish eyewear. That's why we ve designed a collection of <br /> frames that prioritize both form and function.</h6>
                    <h6 className="pb-2 lg:pb-2 font-jost lg:font-normal lg:text-xl lg:leading-[30px]">Our team of experts is dedicated to helping you find <br /> the perfect pair of glasses.</h6>
                    <button className="btn btn-active btn-neutral mb-2">About us</button>
                </div>
            </div>
            <div className='mb-30'>
                <img className='lg:w-1/2' src={image1} alt="" />
            </div>
        </div>
    );
};

export default AboutUs;