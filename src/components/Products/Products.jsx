import discount from '../../assets/images/Discount.png';
import sale from '../../assets/images/Sale.png';
import image4 from '../../assets/images/image4.png';
import image3 from '../../assets/images/image3.png';
import image2 from '../../assets/images/image2.png';
import image1 from '../../assets/images/image1.png';
import slider1 from '../../assets/images/Slider1.png';
import { useState } from 'react';


const Products = () => {
    const [count,setCount]=useState(0);
    const handleToClick = () =>{
        //console.log('Paisi');
        const newCount=count+1;
        setCount(newCount);
        
    }
    const handleToClick1 = () =>{
        const newCount=count+1;
        setCount(newCount);
    }
    const handleToClick2 = () =>{
        const newCount=count+1;
        setCount(newCount);

    }
    const handleToClick3 = () =>{
        const newCount=count+1;
        setCount(newCount);
   
    }
    const handleToClick4 = () =>{
        const newCount=count+1;
        setCount(newCount);
   
    }
    const handleToClick5 = () =>{
        const newCount=count+1;
        setCount(newCount);

    }
    return (
        <div className="mt-60">
            <div className="lg:absolute lg:top-[2835px] lg:left-[30px] lg:w-[1321px] h-[566px] lg:h-[1200.39px]">
                <h1 className='font-jost font-bold text-3xl leading-[48px] mb-4 text-center'>Count:{count}</h1>
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

                    <div className='lg:gap-4 bg-[#F7F7F7] lg:p-4'>
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
                        <button onClick={handleToClick} className='font-jost font-normal lg:text-[20px] lg:leading-[28.9px]'>Add To Cart</button>
                    </div>


                    {/* 2 */}
                    <div className='lg:gap-4 bg-[#F7F7F7] lg:p-4'>
                        <div className='mt-4'>
                            <div className='flex gap-2 lg:flex lg:items-center lg:justify-between'>
                                <img src={discount} alt="" />
                                <img src={sale} alt="" />
                            </div>
                            <div>
                                <img src={image3} alt="" />
                            </div>
                            <img className='pl-10 lg:pl-20' src={slider1} alt="" />
                        </div>
                        <h4 className='font-jost font-normal lg:text-3xl leading-[40px] lg:pb-4'>Bravo Sunglasses</h4>
                        <div className='flex gap-1 lg:pb-4'>
                            <h6 className='font-jost font-bold lg:text-[20px] leading-[30px]'>$100</h6>
                            <h6 className='font-jost font-bold lg:text-[20px] leading-[30px]'>$150</h6>
                        </div>
                        <button onClick={handleToClick1} className='font-jost font-normal lg:text-[20px] lg:leading-[28.9px] lg:pb-4'>Add To Cart</button>
                    </div>

                    {/* 3 */}
                    <div className='lg:gap-4 bg-[#F7F7F7] lg:p-4'>
                        <div className='mt-4'>
                            <div className='flex gap-2 lg:flex lg:items-center lg:justify-between'>
                                <img src={discount} alt="" />
                                <img src={sale} alt="" />
                            </div>
                            <div>
                                <img src={image3} alt="" />
                            </div>
                            <img className='pl-10 lg:pl-20' src={slider1} alt="" />
                        </div>
                        <h4 className='font-jost font-normal lg:text-3xl leading-[40px]'>Bravo Sunglasses</h4>
                        <div className='flex gap-1'>
                            <h6 className='font-jost font-bold lg:text-[20px] leading-[30px]'>$100</h6>
                            <h6 className='font-jost font-bold lg:text-[20px] leading-[30px]'>$150</h6>
                        </div>
                        <button onClick={handleToClick2} className='font-jost font-normal lg:text-[20px] lg:leading-[28.9px]'>Add To Cart</button>
                    </div>

                    {/* 4 */}
                    <div className='lg:gap-4 bg-[#F7F7F7] lg:p-4'>
                        <div className='mt-4'>
                            <div className='flex gap-2 lg:flex lg:items-center lg:justify-between'>
                                <img src={discount} alt="" />
                                <img src={sale} alt="" />
                            </div>
                            <div>
                                <img src={image2} alt="" />
                            </div>
                            <img className='pl-10 lg:pl-20' src={slider1} alt="" />
                        </div>
                        <h4 className='font-jost font-normal lg:text-3xl leading-[40px]'>Bravo Sunglasses</h4>
                        <div className='flex gap-1'>
                            <h6 className='font-jost font-bold lg:text-[20px] leading-[30px]'>$100</h6>
                            <h6 className='font-jost font-bold lg:text-[20px] leading-[30px]'>$150</h6>
                        </div>
                        <button onClick={handleToClick3} className='font-jost font-normal lg:text-[20px] lg:leading-[28.9px]'>Add To Cart</button>
                    </div>

                    {/* 5 */}
                    <div className='lg:gap-4 bg-[#F7F7F7] lg:p-4'>
                        <div className='mt-4'>
                            <div className='flex gap-2 lg:flex lg:items-center lg:justify-between'>
                                <img src={discount} alt="" />
                                <img src={sale} alt="" />
                            </div>
                            <div>
                                <img src={image1} alt="" />
                            </div>
                            <img className='pl-10 lg:pl-20' src={slider1} alt="" />
                        </div>
                        <h4 className='font-jost font-normal lg:text-3xl leading-[40px]'>Bravo Sunglasses</h4>
                        <div className='flex gap-1'>
                            <h6 className='font-jost font-bold lg:text-[20px] leading-[30px]'>$100</h6>
                            <h6 className='font-jost font-bold lg:text-[20px] leading-[30px]'>$150</h6>
                        </div>
                        <button onClick={handleToClick4} className='font-jost font-normal lg:text-[20px] lg:leading-[28.9px]'>Add To Cart</button>
                    </div>

                    {/* 6 */}
                    <div className='lg:gap-4 bg-[#F7F7F7] lg:p-4'>
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
                        <button onClick={handleToClick5} className='font-jost font-normal lg:text-[20px] lg:leading-[28.9px]'>Add To Cart</button>
                    </div>



                </div>
            </div>
        </div>
    );
};

export default Products;