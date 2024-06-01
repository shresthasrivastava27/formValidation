import React, { useEffect, useState } from 'react';
import '../global.css'

const DisplayPost = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://codebuddy.review/posts')
            .then((response) => response.json())
            .then((data) => setPosts(data.data));
    }, []);

    return (
        <div >
            {posts.map((post) => (
                <div key={post.id} className="post">
                    <img src={post.image} alt="Post" className="post-image" />
                    <div className="post-author">
                        <img src={post.avatar} alt="Avatar" className="post-avatar" />
                        {post.firstName} {post.lastName}
                    </div>
                    <div className="post-writeup">{post.writeup}</div>
                </div>
            ))}

        </div>
    );
};

export default DisplayPost;
