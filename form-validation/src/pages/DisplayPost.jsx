import React, { useEffect, useState } from 'react';
import '../global.css'


// services
import { fetchPostData } from '../service/codebuddy.service';
const DisplayPost = () => {
    const [posts, setPosts] = useState([]);


    const fetchPostDataFromDb = async () => {
        try {
            const data = await fetchPostData()
            return data
        } catch (err) {
            console.log(err)
        }

    }

    useEffect(() => {
        const fetchData = async () => {
            const postData = await fetchPostDataFromDb();
            console.log("...........<><><>", postData);
            setPosts(postData);
        };

        fetchData();

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
