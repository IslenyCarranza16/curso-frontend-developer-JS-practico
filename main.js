const navEmail = document.querySelector('.navbar-email');
const Desktopmenu = document.querySelector('.desktop-menu');
const menuHAmburguesa = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const navegadoCarro = document.querySelector('.navbar-shopping-cart');
const productoDetalle = document.querySelector('#productoCarcontainer');
const cardsContainer = document.querySelector('.cards-container');
const productDetail = document.querySelector('.product-detail');
const productDetailCloseIcon = document.querySelector('.product-detail-close')

navEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu(){
    const isproductoDetalleOpen = !productoDetalle.classList.contains('inactive');
    if(isproductoDetalleOpen){
        productoDetalle.classList.add('inactive');
    }
    Desktopmenu.classList.toggle('inactive');

}

menuHAmburguesa.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu(){
    const isproductoDetalleOpen = !productoDetalle.classList.contains('inactive');
    if(isproductoDetalleOpen){
        productoDetalle.classList.add('inactive');
    }
    const isProductdetailopen = !productDetail.classList.contains('inactive');
    if(isProductdetailopen){
        productDetail.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');

}
navegadoCarro.addEventListener('click', toggleCarritoMenu);

function toggleCarritoMenu(){
  
    const ismobileMenuOpen = !mobileMenu.classList.contains('inactive');
    if(ismobileMenuOpen){
        mobileMenu.classList.add('inactive');
    }
    const isProductdetailopen = !productDetail.classList.contains('inactive');
    if(isProductdetailopen){
        productDetail.classList.add('inactive');
    }

    productoDetalle.classList.toggle('inactive');

}
function mostrarDetalleProducto(){
    productoDetalle.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    productDetail.classList.remove('inactive');
  }

productDetailCloseIcon.addEventListener('click', cerrarDetalleProducto);

function cerrarDetalleProducto (){
    productDetail.classList.add('inactive');
}


// para la parte del catalogo
const productosLista =[];
productosLista.push({
    name: 'bike',
    price: 120,
    imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})
productosLista.push({
    name: 'car',
    price: 220,
    imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})
productosLista.push({
    name: 'phone',
    price: 70,
    imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})
productosLista.push({
    name: 'pc',
    price: 100,
    imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})
productosLista.push({
    name: 'mouse',
    price: 10,
    imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})
productosLista.push({
    name: 'book',
    price: 60,
    imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})

/* <div class="product-card">
        <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
        <div class="product-info">
          <div>
            <p>$120,00</p>
            <p>Bike</p>
          </div>
          <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="">
          </figure>
        </div>
      </div> */

      for (producto of productosLista){
       const productCard = document.createElement('div'); // el primer div del product-card
       productCard.classList.add('product-card');
        const img= document.createElement('img');
        img.setAttribute('src',producto.imagen);
        img.addEventListener('click', mostrarDetalleProducto);


        const productoInfo = document.createElement('div');
        productoInfo.classList.add('product-info');

        const productoInfodiv = document.createElement('div');

        const  productPrice = document.createElement('p');
        productPrice.innerText = '$' + producto.price
         const productName = document.createElement('p');
         productName.innerText = producto.name
         const productoInfigure = document.createElement('figure');
         const productImagenCard = document.createElement('img');
         productImagenCard.setAttribute('src', './icons/bt_add_to_cart.svg');
         
         productoInfigure.appendChild(productImagenCard);

         productoInfodiv.appendChild(productPrice);
         productoInfodiv.appendChild(productName);
         
         productoInfo.appendChild(productoInfodiv);
         productoInfo.appendChild(productoInfigure);

         productCard.appendChild(img);
         productCard.appendChild(productoInfo);

         cardsContainer.appendChild(productCard);


 
      }

     