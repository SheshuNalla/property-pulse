import connectDB from "@/config/database";
import User from "@/models/User";
import Property from "@/models/Property";
import { getSessionUser } from "@/utils/getSessionUser";

export const dynamic = 'force-dynamic';

// GET /api/bookmarks
export const GET = async () => {
    try {
        await connectDB();
        const sessionUser = await getSessionUser();
        
        if(!sessionUser || !sessionUser.userId) {
            return new Response("User Id is required", {status: 401})
        }

        const {userId} = sessionUser;
        // Find user in database
        const user = await User.findOne({_id: userId});
        
        // Get user bookmarks
        const bookmarks = await Property.find({_id: {$in: user.bookmarks}});

        return new Response(JSON.stringify(bookmarks), {status: 200});
    } catch (error) {
        console.log(error);
        return new Response('Something went wrong',{ status: 500 })
    }
}

export const POST = async (request) => {
    try {
        await connectDB();
        const { propertyId } = await request.json();

        if(!propertyId){
            return new Response("PropertyId is required", {status: 400});

        }
        const sessionUser = await getSessionUser();
        
        if(!sessionUser || !sessionUser.userId) {
            return new Response("User Id is required", {status: 401})
        }

        const {userId} = sessionUser;

        // Find user in database
        const user = await User.findOne({_id: userId});
        // check the property is already bookmarked
        let isBookmarked = user.bookmarks.some(
            (bookmark) => bookmark?.toString() === propertyId
        );

        let message;

        if(isBookmarked){
            // If already bookmarked remove it
            user.bookmarks.pull(propertyId);
            message = "Bookmark Removed successfully"
            isBookmarked = false;
        }else{
            // If not add to bookmark
            user.bookmarks.push(propertyId);
            message = "Bookmarks added successfully";
            isBookmarked = true;
        }

        await user.save();

        return new Response(JSON.stringify({message, isBookmarked}), {status: 200})
        
    } catch (error) {
        console.log(error)
        return new Response("Something went wrong", {status: 500})
    }
}