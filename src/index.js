const { ApolloServer, gql } = require('apollo-server');
const dotenv = require('dotenv')
dotenv.config();
const { MongoClient } = require('mongodb');
const {DB_URL, DB_NAME}=process.env;
const bcrypt = require('bcryptjs')


// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
type Query{
  misProyectos:[proyectos!]!
}

type user{
    id: ID!
    mail: String!
    identificacion: String!
    nombre: String!
    password: String!
    rol: String!

}

  type proyectos{
    id: ID!
    nombre: String!
    objGenerales: String!
    objEspecificos: String!
    presupuesto: String!
    fechaIni: String!
    fechaFin: String!
    user: [user!]!
  }

  type Mutation{
    signUp(input:SignUpInput):AuthUser!
    signIn(input:SignInInput):AuthUser!
  }

  input SignUpInput{
    mail: String!
    identificacion: String!
    nombre: String!
    password: String!
    rol: String!
  }

  input SignInInput{
    mail: String!
    password: String!
  }

  type AuthUser{
    user:user!
    token: String!
  }
`;


// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const resolvers = {
  Query: {
    misProyectos: ()=> []
  },

Mutation: {
  signUp: async(root, {input}, {db})=>{
    const hashedPassword=bcrypt.hashSync(input.password)
    const newUser={
      ...input,
      password:hashedPassword,
    }
  const result= await db.collection("user").insertOne(newUser);

  return{
    user:newUser,
    token:"token",
  }
},

signIn: async(root, {input}, {db})=>{
  const user= await db.collection("user").findOne({mail: input.mail})
  const isPasswordCorrect = user && bcrypt.compareSync(input.password, user.password);
  if(!user || !isPasswordCorrect){
    throw new Error("Credenciales no son correctas");
  }
  return{
    user,
    token:"token"
  }
}

},
user:{
  id:(root)=>{
    return root._id;
  }
}
}
// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.

  
  const start= async() =>{
    const client = new MongoClient(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true });
    await client.connect();
    const db=client.db(DB_NAME)

    const context={
      db,
    }

   // The ApolloServer constructor requires two parameters: your schema
  // definition and your set of resolvers.
  const server = new ApolloServer({ typeDefs, resolvers, context});

  // The `listen` method launches a web server.
  server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
  });

  }
  
  start();