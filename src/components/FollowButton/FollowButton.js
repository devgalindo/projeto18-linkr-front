import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../../context/Context";
import { checkFollow, followOrUnfollow } from "../../service/Service";
import { FollowButtonCss } from "./style";


export default function FollowButton(){

    /* States */
    const [isFollowing, setIsFollowing] = useState(false)
    const [disable, setDisable] = useState(false)
    const {user} = useAuth()
    const personId = Number(useParams().id)

    /* Checks if user follow the other user */
    useEffect(()=>{

        checkFollow('follow', user.userId, personId, user.token)
        .then( e =>{
            
            if(e.data[0]){
                setIsFollowing(true)
            }
        }).catch( e => console.log(e.response.data))
    }, [user])

    /* In case user already follows it will unfollow */
    function FollowUser(){

        setDisable(true)

        followOrUnfollow('follow-user', user.userId, personId, user.token)

        .then( e =>{

            setIsFollowing(!isFollowing)
            setDisable(false)

        }).catch( e => console.log(e.response.data))
    }

    return(
        <FollowButtonCss disabled={disable} onClick={FollowUser} isFollowing={isFollowing}>
            {isFollowing ? 'Unfollow': "Follow"}
        </FollowButtonCss>
    );
}