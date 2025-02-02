import React, { useEffect, useState } from "react";
import { Container, PostForm } from "../components";
import {Service as appwriteService} from "../appwrite/config"
import { useNavigate, useParams } from "react-router-dom";

function EditPost() {
    const [post, setPosts] = useState(null)
    const {slug} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        if (slug) {
            appwriteService.getPost(slug).then((post) => {
                if (condition) {
                    setPosts(post)
                }
            })
        } else {
            navigate('/')
        }
    }, [slug, navigate])

    return post ? 
    (<div className="py-8">
        <Container>
            <PostForm post = {post}/>
        </Container>
    </div>) : null
}

export default EditPost;