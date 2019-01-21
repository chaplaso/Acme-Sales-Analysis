const products = [
    {
      id: 1,
      name: 'foo',
      price: 7
    },
    {
      id: 2,
      name: 'bar',
      price: 2
    },
    {
      id: 5,
      name: 'bazz',
      price: 1
    },
  ];
  
  const users = [
    {
       id: 1,
       name: 'moe'
    },
    {
       id: 2,
       name: 'larry'
    },
    {
       id: 3,
       name: 'curly'
    }
  ];
  
  // productId matches up with product in products
  // userId matches up with user in users
  const orders = [
    {
      id: 1,
      productId: 1,
      quantity: 3,
      userId: 1
    },
    {
      id: 2,
      productId: 1,
      quantity: 7,
      userId: 1
    },
    {
      id: 3,
      productId: 5,
      quantity: 70,
      userId: 3
    },
    {
      id: 3,
      productId: 5,
      quantity: 1,
      userId: 3
    }
  ];



function productsPurchased(orders, products){
    let ppObject = {
        orders,
        products
    }
    let ppItems = []
    let result= [];
    let result1= [];

    // create object of both product & orders
    // loop thru to find the objects orders
    // take the product id to print the name value and ensure no repeat
    ppObject.orders.forEach(element => { 
        if (!ppItems.includes(element.productId)) {
            ppItems.push(element.productId)
        } 

        result = ppObject.products.filter(prod => ppItems.includes(prod.id))
    });
    
    result.forEach(elem=> result1.push(elem.name))
  return result1
}



productsPurchased(orders, products)

console.log("start of 2")

function  topSellingProductByQuantity(orders, products){
    let result = []
    let result1 = []

    // get the most sold order by looking at highest quantity and  productID in orders
    orders.forEach(elem => result.push(elem.quantity))
    result1 = [Math.max(...result)]
    let result2 = orders.filter(elem => result1.includes(elem.quantity))
    let result3= products.filter(elem => elem.id === result2[0].productId )
    console.log(result3[0].name)


    // find the name in products with the productID

}
topSellingProductByQuantity(orders, products)

console.log("start of 3")


function usersWithOrders(users, orders){

    let listUsers = []
    orders.forEach(elem => {if (!listUsers.includes(elem.userId)) listUsers.push(elem.userId)})
    let listUsers1 = users.filter(elem => listUsers.includes(elem.id))
    return (listUsers1.forEach(elem => console.log(elem.name)))

}

usersWithOrders(users, orders)