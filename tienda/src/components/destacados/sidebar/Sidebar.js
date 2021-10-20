import Config from '../../../config';
import './sidebar.css';

const model = 'https://fashionjournal.com.au/wp-content/uploads/2018/10/Nike-Mobile_FJ.jpg'
const nike = 'http://pngimg.com/uploads/nike/nike_PNG9.png';
const rebook = 'https://logodix.com/logo/482888.png';
const newBalance = 'https://1000marcas.net/wp-content/uploads/2020/01/New-Balance-Logo-2006.png';
const puma = 'https://www.freepnglogos.com/uploads/puma-logo-png-33.jpg'
const vans = 'https://www.pinclipart.com/picdir/big/67-672814_clip-black-and-white-stock-black-friday-clipart.png'
const adidas = 'https://logodownload.org/wp-content/uploads/2014/07/adidas-logo-branco.png'

const data = [
    { img: nike, title: 'nike' },
    { img: rebook, title: 'rebook' },
    { img: newBalance, title: 'newbalance' },
    { img: puma, title: 'puma' },
    { img: vans, title: 'vans' },
    { img: adidas, title: 'adidas' }
];

const Sidebar = () => {
    return (
        <div className="container-sidebar">
            <div className="photo-sidebar">
                <img src={model} alt="woman model" />
            </div>

            <div className="marcas-sidebar">

                {
                    data.map((item, i) => (
                        <div className="card-marca" key={i}>
                            <img onClick={() => window.location.replace(`${Config.URL+'/productos/'+item.title}`)} src={item.img} title={item.title} alt="nike-log" />
                        </div>
                    ))
                }
            </div>
        </div>
    )
};

export default Sidebar;