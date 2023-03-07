const { gql } = require("apollo-server-express")

// {product_id:1, name:"super jacket", brand:"northface"},

const typeDefs = gql`
    type Product {
        product_id: ID
        name: String
        brand: String
    }

    type Query {
        getProducts:[Product]
        getSingleProduct(product_id:ID):[Product]
    }
`

module.exports = typeDefs;