import connectDB from "@/lib/db";
import { Post } from "@/models/post.model";
import { NextRequest, NextResponse } from "next/server";


export const GET =  async (req:NextRequest,{params}:{params:{postId:string}})=>{

    try {
        await connectDB();
        const post  = Post.findById({_id:params.postId});
        if(!post) return NextResponse.json({error:"Post not found."});
        const comments = await post.populate({path:'comments',options:{sort:{createdAt:-1}},
        });
        return NextResponse.json(comments);
    } catch (error) {
        return NextResponse.json({error:"An error occurred."})
    }
}