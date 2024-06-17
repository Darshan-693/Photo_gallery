const  pexels= require('pexels');
const createClient = pexels.createClient;
const client = createClient('EDsiKN8L0Hw40lyEibQ74cuabVjRLb9Q154jjA7UuFdkpVCHW3hYQRkV');

// All requests made with the client will be authenticated
const response = async (req,res)=>{
   
   if(req.body.link===undefined && req.body.value===undefined)
   {
      let query = 'modern wallpapers';
      await client.photos.search({ query, per_page: 25 }).then(photos=>{res.send(photos);})
   }
   else if(req.body.value===undefined)
   {
      fetch(req.body.link,{
         headers:new Headers(
            {
               'Authorization':'EDsiKN8L0Hw40lyEibQ74cuabVjRLb9Q154jjA7UuFdkpVCHW3hYQRkV'
            }
         )
      }).then(res=>res.json()).then(data=>res.send(data))
   }
   else
   {
      console.log(req.body.value)
      let query = req.body.value;
      await client.photos.search({ query, per_page: 25 }).then(photos=>{res.send(photos)})
   }
}
module.exports = response;