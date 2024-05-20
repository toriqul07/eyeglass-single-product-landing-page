import first from '../../assets/images/Block2.png'
import second from '../../assets/images/Block4.png'
import third from '../../assets/images/Block1.png'
import fourth from '../../assets/images/Block3.png'

const DiscountProducts = () => {
    return (
        <div className="lg:grid grid-cols-2 lg:absolute lg:top-[1015px] lg:left-[10px] lg:w-[1321px] lg:h-[1000px]">
            <img className='w-30' src={first} alt="" />
            <img src={second} alt="" />
            <img src={third} alt="" />
            <img src={fourth} alt="" />
        </div>
    );
};

export default DiscountProducts;