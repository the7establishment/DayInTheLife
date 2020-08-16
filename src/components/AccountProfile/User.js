import React, {useState} from "react";
 
export default function() {

    const [user, setUser] = useState({
        userId: "32454",
        fullName: "Matthew Chuong",
        firstName: "Matthew",
        lastName: "Chuong",
        gender: "Male",
        title: "Software Developer",
        timeAt: "5 years",
        location: "Florida"
    })
}