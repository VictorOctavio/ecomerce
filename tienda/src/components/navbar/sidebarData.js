import {FaShoePrints} from 'react-icons/fa';
import {GiRunningShoe, GiConverseShoe} from 'react-icons/gi';
import {HiTemplate} from 'react-icons/hi';


const Cateogorias = [
    {
        title: 'Accesorios',
        icon: <HiTemplate/>,
        enlace: `/productos/accesorios`
    },{
        title: 'Urbana',
        icon: <FaShoePrints/>,
        enlace: `/productos/urban`
    },{
        title: 'Casual',
        icon: <GiConverseShoe/>,
        enlace: `/productos/casual`
    },{
        title: 'Deportiva',
        icon: <GiRunningShoe/>,
        enlace: `/productos/deportiva`
    }
]

export default Cateogorias