import React from 'react';
import { get, ref } from 'firebase/database';
import { useState, useEffect } from 'react';
import { database } from '../firebaseConfig';

const Demo = () => {

    const [students, setStudents] = useState([]);

    useEffect(() => {
        const studentsRef = ref(database, 'Students');
        get(studentsRef).then((snapshot) => {
            if (snapshot.exists()) {
                const studentsArray = Object.entries(snapshot.val()).map(([id, data]) => ({
                    id, ...data,
                }));
                setStudents(studentsArray);
            }
            else {
                console.log("No Data Available!");
            }
        }).catch((err) => {
            console.log(err);
        })
    }, []);


    return (
        <>
            <h1>Firebase Testing</h1>
            {
                students.map((item,index) => {
                    return (
                        <h1 key={index}> {item.Name}</h1>
                    )
                })
            }
        </>
    )
}

export default Demo;