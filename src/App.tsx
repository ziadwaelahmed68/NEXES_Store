import { useEffect, useState } from 'react';
import { fetchProducts } from './api/mockProducts';
import './App.css';

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
}

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // استدعاء الداتا الوهمية أول ما الصفحة تفتح
    fetchProducts().then((data) => {
      setProducts(data as Product[]);
      setLoading(false);
    });
  }, []);

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1 style={{ color: '#646cff' }}>NEXES Tech Store</h1>
      
      {loading ? (
        <p>جاري تحميل المنتجات...</p>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
          {products.map((product) => (
            <div key={product.id} style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '8px' }}>
              <h3>{product.name}</h3>
              <p>السعر: <strong>{product.price} EGP</strong></p>
              <span style={{ background: '#eee', padding: '5px 10px', borderRadius: '15px', fontSize: '12px' }}>
                {product.category}
              </span>
              <br/><br/>
              <button style={{ background: '#646cff', color: 'white', padding: '8px 15px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
                أضف للسلة
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;