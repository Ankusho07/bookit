// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// }

// module.exports = nextConfig


// restrt the server whenever we change something in this file

module.exports ={

  env:{
    DB_LOCAL_URI:'mongodb://localhost:27017/bookit'   //bookit is our db name
  }
}