import React, { use } from 'react';
import FriendCard from '../../UI/FriendCard';


const friendsPromise = fetch("/friendsData.json").then((res) => res.json());


const AllFriends = () => {

const friends = use(friendsPromise);


    return (
        <div className='bg-[#F8FAFC]'>
            <h2 className=' max-w-6xl mx-auto mb-4'>Your Friends</h2>
            <div className="sd:grid-cols-1 md:grid grid-cols-4 gap-5 w-[90%] mx-auto">
                {
                    friends.map(friend => {
                        return (
                            <FriendCard key={friend.id} friend={friend}/>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default AllFriends;