import _isEmpty from "lodash/isEmpty";
import _get from "lodash/get";

export function transformTop50Data(redditData?: IRedditTop50Root) {
    const finalData: IPost[] = [];

    // Return empty array if no data is provided
    if (!redditData) return finalData;

    const posts = redditData.data.children;

    posts.forEach(post => {
        // Format each post to get just frontend necessary information.
        const newPost: IPost = {
            author: post.data.author,
            commentsQty: post.data.num_comments,
            createdAt: post.data.created_utc,
            id: post.data.id,
            photoURL: _get(post, 'post.data.preview.images.0.resolutions.3.url'),
            thumbnail: post.data.thumbnail,
            title: post.data.title,
        };

        finalData.push(newPost)
    })


    return finalData

}

