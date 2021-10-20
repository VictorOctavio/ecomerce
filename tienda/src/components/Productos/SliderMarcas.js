import './filtros.css';
import Config from '../../config';

const nike = 'http://pngimg.com/uploads/nike/nike_PNG9.png';
const rebook = 'https://logodix.com/logo/482888.png';
const newBalance = 'https://1000marcas.net/wp-content/uploads/2020/01/New-Balance-Logo-2006.png';
const puma = 'https://www.freepnglogos.com/uploads/puma-logo-png-33.jpg'
const vans = 'https://www.pinclipart.com/picdir/big/67-672814_clip-black-and-white-stock-black-friday-clipart.png'
const adidas = 'https://logodownload.org/wp-content/uploads/2014/07/adidas-logo-branco.png'

const data = [
    {img: nike, title: 'nike'}, 
    {img: rebook, title: 'rebook'}, 
    {img: newBalance, title: 'newbalance'}, 
    {img: puma, title: 'puma'},
    {img: vans, title: 'vans'}, 
    {img: adidas, title: 'adidas'}
];

const SliderMarcas = () => {
    
    const handleMarca = (marca) => {
        window.location.replace(`${Config.URL}/productos/${marca}`);
    }

    return(
      <div className="container-marcas">
          {
             data.map((item, i) => (
                 <div className="card-marcas" key={i}>
                     <img src={item.img} alt={item.title}  title={item.title} style={{
                         width: '100%', height: '100%', objectFit: 'contain', padding: '5px'
                        }} onClick={() => handleMarca(item.title)}/>
                 </div>
             )) 
          }
      </div>
    )
}

export default SliderMarcas;