// using axios to fetch data

import React, { useState, useEffect } from 'react';
import axios from 'axios';


const DataFetching = () => {

    const [posts, setPosts] = useState([]);
    const [id, setId] = useState(1);
    const [idFromButtonClick, setIdFromButtonClick] = useState(1)

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
            .then((response) => {
                console.log(response.data);
                setPosts(response.data);
            })
            .catch((error) => {
                console.log(error);
            });

    }, [idFromButtonClick])

    const buttonClickHandler = () => {
        setIdFromButtonClick(id);
    }
    


    return (
        <div>
            DataFetching

            <div className="posts">
                <input type="text" value={id} onChange={(event) => {
                    setId(event.target.value);
                }
                } />
                <button type="button" onClick={()=>{buttonClickHandler()}}>Fetch Post</button>
                <div>{posts.title}</div>
                {/* <ul>
                    {
                        posts.map((post) => (
                            <li key={post.id}>{post.title}</li>
                        )
                        )
                    }
                </ul> */}
            </div>
        </div>

    );
};

export default DataFetching;