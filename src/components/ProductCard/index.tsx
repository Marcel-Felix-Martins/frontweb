import '/home/marcel/Documentos/ProjetoWeb/frontweb/src/components/ProductCard/styles.css';

import ProductImg from '/home/marcel/Documentos/ProjetoWeb/frontweb/src/assets/images/product.png';
import ProductPrice from '../ProductPrice';



const ProductCard = () =>{


return(
    <div className="base-card product-card">
        <div className="card-top-container">
            <img src={ProductImg} alt="Imagem do produto" />
       </div>
       <div className="card-bottom-container">
           <h6>Nome do produto</h6>
           <ProductPrice />

       </div>

    </div>
   );
}

export default ProductCard;