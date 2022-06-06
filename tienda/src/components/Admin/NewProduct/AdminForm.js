import React, { useContext } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import ProductContext from '../../../context/Producto/productoContext';
import AdminList from '../AdminList';
import Config from '../../../config';
import { Alert } from 'react-bootstrap';
import { ImCheckboxChecked, ImCheckboxUnchecked } from 'react-icons/im';
import './adminform.css';

const AdminForm = ({ products }) => {

    //Context
    const { saveProduct, editProduct, deleteProduct } = useContext(ProductContext);

    const [product, setProduct] = React.useState({ title: '', price: '', category: '', model: '', marca: '', tallas: '', stock: true })
    const [oferta, setOferta] = React.useState({ active: false, priceSale: 0 });
    const [images, setImages] = React.useState(null);
    const [description, setDescription] = React.useState({ text: '' })

    const [edit, setEdit] = React.useState(false)
    const [message, setMessage] = React.useState({ text: '', active: false });
    const [err, setErr] = React.useState({ text: '', active: false })

    const handleChange = e => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value
        })
    }

    const handleChangeDescription = (value) => setDescription({ text: value })

    const handleImages = e => setImages(e.target.files);

    const handleSubmit = e => {
        e.preventDefault();
        if (!edit) {
            saveProduct(product, description, images, products, setErr, setMessage);
        } else {
            editProduct(product, description, products, setErr, setMessage);
        }
    }

    const handleOferta = async (e) => {
        let update;
        if (e.target.name === 'active') update = { active: true, priceSale: oferta.priceSale }
        else update = { active: false, priceSale: null }


        const config = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(update)
        }

        const res = await fetch(`${Config.URI}/create-oferta/${product.id}`, config);
        const data = await res.json();

        if (data.err) return setErr({ text: 'Cambios no producidos', active: true })

        setMessage({ text: data.message, active: true })
    }



    return (
        <div className="new-product-container">
            
            <h2 className="form-zapatilla-title col-12">{edit ? `Editar ${product.title}` : 'Agregar Nuevo'}</h2>
            <div className="form-zapatilla-container col-12">
                <form onSubmit={handleSubmit} className="formZapatilla col-6">

                    {message.active && <Alert variant="success"> {message.text.toUpperCase()} </Alert>}

                    {err.active && <Alert variant="danger"> {err.text.toUpperCase()} </Alert>}

                    <input className="form-control" name="title" placeholder="Agrega Titulo:"
                        onChange={handleChange} value={product.title}
                    />

                    <input className="form-control" name="price" placeholder="Agrega Precio:" type="number"
                        onChange={handleChange} value={product.price}
                    />

                    <input className="form-control" name="category" placeholder="Categoria:"
                        onChange={handleChange} value={product.category}
                    />

                    <ReactQuill className="descipcionZapatilla" value={description.text} onChange={handleChangeDescription} className="my-2" />

                    <input className="form-control" name="marca" placeholder="Marca:"
                        onChange={handleChange} value={product.marca}
                    />
                    <input className="form-control" name="model" placeholder="Modelo:"
                        onChange={handleChange} value={product.model}
                    />
                    
                    <input className="form-control" name="tallas" placeholder="Tallas:"
                        onChange={handleChange} value={product.tallas}
                    />
                    
                    {
                        !edit ? (
                            <input className="form-control" multiple placeholder="Titulo" type="file"
                                onChange={handleImages}
                            />
                        ) : (

                            !product.information.oferta.active ? (
                                <>
                                    <div style={{ display: 'flex', marginBottom: '10px' }}>
                                        <input type="number" placeholder="precio ofera" className="form-control my-0" typé="number"
                                            onChange={e => setOferta({ priceSale: e.target.value })} style={{ width: 'auto' }} />
                                        <button style={{ width: 'auto' }} name="active" type="button" className="btn btn-dark mx-2" onClick={handleOferta}>Ofertar</button>
                                    </div>
                                </>
                            ) : <button style={{ width: 'auto' }} className="my-2 btn btn-danger m-0" type="button" onClick={handleOferta}>Quitar Oferta Actual</button>
                        )
                    }

                    {edit && (
                        <button type="button" style={{ width: 'auto' }} className="btn btn-secondary mx-1"
                            onClick={() => setProduct({ ...product, stock: !product.stock })}
                        >Stock:  {!product.stock ? <ImCheckboxUnchecked /> : <ImCheckboxChecked />}</button>
                    )}

                    <button className="btn btn-block my-2 formZapatillaBtn">{edit ? 'Editar' : 'Subir Producto'}</button>

                </form>

                <div className="acordeon-list col-6">
                    <AdminList
                        products={products}
                        setEdit={setEdit}
                        setProduct={setProduct}
                        deleteProduct={deleteProduct}
                        setDescription={setDescription}
                    />
                </div>

            </div>
            
        </div>
    )
}

export default AdminForm;