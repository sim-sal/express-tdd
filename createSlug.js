const posts = require("./posts");

function createSlug(title, posts) {
    let slug = title.toLowerCase().replace(/\s+/g, "-");

    for (let i = 0; i < posts.length; i++) {
        const post = posts[i];

        if (slug === post.slug) {
            slug = slug + "1";
        }
    }

    return slug;
}

module.exports = createSlug;