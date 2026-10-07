const [, , method, route, ...params] = process.argv;

async function main() {
  if (!method || !route) return;

  const [resource, id] = route.split('/');
  
  if (resource !== 'products') return;

  if (method === 'GET') {
    const url = id ? `https://fakestoreapi.com/products/${id}` : 'https://fakestoreapi.com/products';
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
  } 
  else if (method === 'POST') {
    const [title, price, category] = params;
    const res = await fetch('https://fakestoreapi.com/products', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, price: Number(price), category })
    });
    const data = await res.json();
    console.log(data);
  } 
  else if (method === 'DELETE') {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`, {
      method: 'DELETE'
    });
    const data = await res.json();
    console.log(data);
  }
}

main();