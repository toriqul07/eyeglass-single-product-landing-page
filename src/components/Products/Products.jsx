import discount from '../../assets/images/Discount.png';
import sale from '../../assets/images/Sale.png';
import image4 from '../../assets/images/image4.png';
import slider1 from '../../assets/images/Slider1.png';

const Products = () => {
    return (
        <div className="mt-60">
            <div className="lg:absolute lg:top-[2835px] lg:left-[30px] lg:w-[1321px] h-[566px] lg:h-[1200.39px]">
                <h1 className="font-jost font-bold text-3xl leading-[48px]">Our products</h1>
                <div className="lg:flex lg:items-center lg:justify-between">
                    <h6 className="font-jost font-normal lg:text-[16px] lg:leading-[26px]">Experience crystal clear vision and elevated style with our <br /> premium collection of eyeglasses.</h6>
                    <div className="lg:flex lg:items-center lg:justify-center lg:gap-3 lg:mr-10">
                        <button className="btn">Latest </button>
                        <button className="btn">Special  </button>
                        <button className="btn">Best sell </button>
                    </div>
                </div>
                <div className="lg:grid grid-cols-3 gap-5 lg:mt-5">

                    {/* 1 */}

                    <div className='lg:gap-4 bg-[#F7F7F7]'>
                        <div className='mt-4'>
                            <div className='flex gap-2 lg:flex lg:items-center lg:justify-between'>
                                <img src={discount} alt="" />
                                <img src={sale} alt="" />
                            </div>
                            <div>
                                <img src={image4} alt="" />
                            </div>
                            <img className='pl-10 lg:pl-20' src={slider1} alt="" />
                        </div>
                        <h4 className='font-jost font-normal lg:text-3xl leading-[40px]'>Bravo Sunglasses</h4>
                        <div className='flex gap-1'>
                            <h6 className='font-jost font-bold lg:text-[20px] leading-[30px]'>$100</h6>
                            <h6 className='font-jost font-bold lg:text-[20px] leading-[30px]'>$150</h6>
                        </div>
                        <h6 className='font-jost font-normal lg:text-[20px] lg:leading-[28.9px]'>Add To Cart</h6>
                    </div>


                    {/* 2 */}
                    <div className='lg:gap-4 bg-[#F7F7F7]'>
                        <div className='mt-4'>
                            <div className='flex gap-2 lg:flex lg:items-center lg:justify-between'>
                                <img src={discount} alt="" />
                                <img src={sale} alt="" />
                            </div>
                            <div>
                                <img src={image4} alt="" />
                            </div>
                            <img className='pl-10 lg:pl-20' src={slider1} alt="" />
                        </div>
                        <h4 className='font-jost font-normal lg:text-3xl leading-[40px]'>Bravo Sunglasses</h4>
                        <div className='flex gap-1'>
                            <h6 className='font-jost font-bold lg:text-[20px] leading-[30px]'>$100</h6>
                            <h6 className='font-jost font-bold lg:text-[20px] leading-[30px]'>$150</h6>
                        </div>
                        <h6 className='font-jost font-normal lg:text-[20px] lg:leading-[28.9px]'>Add To Cart</h6>
                    </div>

                    {/* 3 */}
                    <div className='lg:gap-4 bg-[#F7F7F7]'>
                        <div className='mt-4'>
                            <div className='flex gap-2 lg:flex lg:items-center lg:justify-between'>
                                <img src={discount} alt="" />
                                <img src={sale} alt="" />
                            </div>
                            <div>
                                <img src={image4} alt="" />
                            </div>
                            <img className='pl-10 lg:pl-20' src={slider1} alt="" />
                        </div>
                        <h4 className='font-jost font-normal lg:text-3xl leading-[40px]'>Bravo Sunglasses</h4>
                        <div className='flex gap-1'>
                            <h6 className='font-jost font-bold lg:text-[20px] leading-[30px]'>$100</h6>
                            <h6 className='font-jost font-bold lg:text-[20px] leading-[30px]'>$150</h6>
                        </div>
                        <h6 className='font-jost font-normal lg:text-[20px] lg:leading-[28.9px]'>Add To Cart</h6>
                    </div>

                    {/* 4 */}
                    <div className='lg:gap-4 bg-[#F7F7F7]'>
                        <div className='mt-4'>
                            <div className='flex gap-2 lg:flex lg:items-center lg:justify-between'>
                                <img src={discount} alt="" />
                                <img src={sale} alt="" />
                            </div>
                            <div>
                                <img src={image4} alt="" />
                            </div>
                            <img className='pl-10 lg:pl-20' src={slider1} alt="" />
                        </div>
                        <h4 className='font-jost font-normal lg:text-3xl leading-[40px]'>Bravo Sunglasses</h4>
                        <div className='flex gap-1'>
                            <h6 className='font-jost font-bold lg:text-[20px] leading-[30px]'>$100</h6>
                            <h6 className='font-jost font-bold lg:text-[20px] leading-[30px]'>$150</h6>
                        </div>
                        <h6 className='font-jost font-normal lg:text-[20px] lg:leading-[28.9px]'>Add To Cart</h6>
                    </div>

                    {/* 5 */}
                    <div className='lg:gap-4 bg-[#F7F7F7]'>
                        <div className='mt-4'>
                            <div className='flex gap-2 lg:flex lg:items-center lg:justify-between'>
                                <img src={discount} alt="" />
                                <img src={sale} alt="" />
                            </div>
                            <div>
                                <img src={image4} alt="" />
                            </div>
                            <img className='pl-10 lg:pl-20' src={slider1} alt="" />
                        </div>
                        <h4 className='font-jost font-normal lg:text-3xl leading-[40px]'>Bravo Sunglasses</h4>
                        <div className='flex gap-1'>
                            <h6 className='font-jost font-bold lg:text-[20px] leading-[30px]'>$100</h6>
                            <h6 className='font-jost font-bold lg:text-[20px] leading-[30px]'>$150</h6>
                        </div>
                        <h6 className='font-jost font-normal lg:text-[20px] lg:leading-[28.9px]'>Add To Cart</h6>
                    </div>

                    {/* 6 */}
                    <div className='lg:gap-4 bg-[#F7F7F7]'>
                        <div className='mt-4'>
                            <div className='flex gap-2 lg:flex lg:items-center lg:justify-between'>
                                <img src={discount} alt="" />
                                <img src={sale} alt="" />
                            </div>
                            <div>
                                <img src={image4} alt="" />
                            </div>
                            <img className='pl-10 lg:pl-20' src={slider1} alt="" />
                        </div>
                        <h4 className='font-jost font-normal lg:text-3xl leading-[40px]'>Bravo Sunglasses</h4>
                        <div className='flex gap-1'>
                            <h6 className='font-jost font-bold lg:text-[20px] leading-[30px]'>$100</h6>
                            <h6 className='font-jost font-bold lg:text-[20px] leading-[30px]'>$150</h6>
                        </div>
                        <h6 className='font-jost font-normal lg:text-[20px] lg:leading-[28.9px]'>Add To Cart</h6>
                    </div>



                </div>
            </div>
        </div>
    );
};

export default Products;