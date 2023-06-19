export default function Product(){
    //const products = ["Laptop", "Phone","Mobile", "Oven","Computer"];
    const products = [{ id:1 , proName: "Laptop", price: 50000},
                        {id:2 , proName: "Computer", price : 45000},
                        {id:3 , proName: "Mobile",price : 34299},
                        {id:4 , proName: "Oven",price: 4000},
                        {id:5 , proName: "Pen",price: 30
},]
    const proList = products.map((product)=> (<h2 key={product.id}>{product.proName} : ${product.price}</h2>));
    
    return (
        <div>
        { proList}
            </div>
    );
    
}