var database = [
    {product_id:1, name:"super jacket", brand:"northface"},
    {product_id:2, name:"mediorce jacket", brand:"patigonia"},
    {product_id:3, name:"super vest", brand:"artexrix"},
    {product_id:4, name:"mediocore vest", brand:"salmon"},
    {product_id:5, name:"skis", brand:"k2"}
  ]  


const resolvers ={
    Query:{
        getProducts: async ()=>{
            console.log("INSIDE GETPRODUCTS")
            return database
        },
        getSingleProduct: async (parent, args) =>{
            specificItem = []
            console.log("----------")
            console.log(args)
            console.log("----------")
            for (let i = 0; i < database.length; i++){
                if(args.product_id==database[i].product_id){
                    specificItem.push(database[i])
                }
              }
            return specificItem
        }
    }
}

module.exports = resolvers;