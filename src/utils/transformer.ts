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
            photoURL: getMediumImage(post.data),
            photoURLBig: getBiggestImage(post.data),
            thumbnail: post.data.thumbnail,
            title: post.data.title,
        };

        finalData.push(newPost)
    })

    return finalData
}


function getMediumImage(post: IRedditTop50DataItem) {
    let imgUrl = post.thumbnail;
    const images = _get(post, 'preview.images.0.resolutions', []);

    if (images.length > 2) {
        imgUrl = _get(images[images.length - 2], 'url', post.thumbnail);
    }

    return imgUrl.replace(/\&amp\;/g, '&');
}

function getBiggestImage(post: IRedditTop50DataItem) {
    let imgUrl = post.thumbnail;
    const images = _get(post, 'preview.images.0.resolutions', []);

    if (!!images.length) {
        imgUrl = _get(images[images.length - 1], 'url', getMediumImage(post));
    }

    return imgUrl.replace(/\&amp\;/g, '&');
}