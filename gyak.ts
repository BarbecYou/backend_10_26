interface Product {
    id: number;
    title: string;
    images: string[];
}

interface ProductList {
    products: Product[];
}

async function letoltes(){
    let response = await fetch('/products.json');
    let eredmeny = await response.json() as ProductList;
    eredmeny.products.filter(e => e.images.length > 0);
}