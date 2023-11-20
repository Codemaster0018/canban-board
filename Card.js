import React from 'react';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import { PiCircleDuotone } from "react-icons/pi";
const Card = ({ ticket }) => {
    return ( <
        div className = "card" >
        <
        h4 > { ticket.id } < /h4> <
        p > { ticket.title } < /p> <
        p > < HiOutlineDotsHorizontal / > & nbsp; < PiCircleDuotone > < /PiCircleDuotone>&nbsp;{ticket.tag && ticket.tag[0]}</p >

        <
        /div>
    );
};

export default Card;