import './destacados.css';
//Components
import Sidebar from './sidebar/Sidebar';
import Card from '../card/Card';
import Config from '../../config';

const Destacados = ({ products }) => {

    return (
        <div className="container container-destacados">
            <div className="row m-0 p-0">

                <div className="col-12 title-destacado">
                    <h2>Ultimas Publicaciones</h2>
                </div>

                <div className="col-12 col-lg-9 container-cards">
                    {
                        products && products.docs !== undefined && (
                            products.docs.map(product => (
                                !product.information.oferta.active && (
                                    <Card
                                        key={product._id}
                                        product={product}
                                    />
                                )
                            ))
                        )
                    }

                    <div className="col-12" style={{ display: 'flex', justifyContent: 'center' }}>
                        <a href={`${Config.URL}/productos`} className="btn btn-primary px-5 py-2" style={{ fontSize: '18px' }}>Ver más</a>
                    </div>

                </div>

                <div className="col-12 col-lg-3">
                    <Sidebar />
                </div>
            </div>
        </div>
    )
};

export default Destacados;