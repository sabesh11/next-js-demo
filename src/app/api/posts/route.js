import connectMangodb from "../../../../utils/connectMangodb";
import postModal from "../../../../modals/postModal";


export async function GET(){

    try{
        await connectMangodb();
        const post= await postModal.find({});
        return Response.json(post);

    }
    catch(e){
  return Response.json({message:e.message});
    }
  
}

export async function POST(req) {
    try {
     
      await connectMangodb();
  
      
      const body = await req.json();
  
      
      const newPost = new postModal(body);
      const savedPost = await newPost.save();
  
      
      return new Response(JSON.stringify(savedPost), {
        status: 201, 
        headers: { "Content-Type": "application/json" },
      });
    } catch (e) {
      
      return new Response(JSON.stringify({ message: e.message }), {
        status: 500, 
        headers: { "Content-Type": "application/json" },
      });
    }
  }