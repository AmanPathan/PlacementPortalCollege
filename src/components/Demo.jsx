import React from 'react';
import { get, set,push, ref } from 'firebase/database';
import { useState, useEffect } from 'react';
import { database } from '../firebaseConfig';

const Demo = () => {

    const [students, setStudents] = useState([]);

    const get_data = ()=>{
        const studentsRef = ref(database, 'dashboard');
        get(studentsRef).then((snapshot) => {
            if (snapshot.exists()) {
                const studentsArray = snapshot.val();
                console.log(studentsArray);
                setStudents(Object.values(studentsArray));
            }
            else {
                console.log("No Data Available!");
            }
        }).catch((err) => {
            console.log(err);
        })
    }

    const set_data = async ()=>{
        const newDocRef = push(ref(database,"dashboard/statistics"));
        set(newDocRef,{
            totalStudents: 150,
            placedStudents: 100,
            totalCompanies: 50,
            averagePackage:6
        }).then(()=>{
            alert('data saved successfully');
        }).catch((err)=>{
            alert('Error:',err.message);
        })
    }


    const update_data = async ()=>{
        const studentsRef = ref(database, 'dashboard');
        const snapshot = await get(studentsRef);
        if(snapshot.exists()){
            setStudents(Object.values(snapshot.val()));
            console.log("Done bro");
        }
        else{
            alert("Error fecthing data")
            console.log("Error fecthing data");
        }
    }

    useEffect(() => {
        get_data();
        // update_data();
    }, []);


    return (
        <>
            <h1>Firebase Testing</h1>

            <button onClick={(e)=>{set_data()}} className='text-dark bg-white'> Save Data</button>
            {
                students.map((item,index) => {
                    return (
                        <>
                        <p className='text-white' key={index}>Average Package: {item.averagePackage}</p>
                        <p className='text-white' key={index}>Placed Stud: {item.placedStudents}</p>
                        <p className='text-white' key={index}>Total Comapanies: {item.totalCompanies}</p>
                        <p className='text-white' key={index}>Total Stud: {item.totalStudents}</p>
                        </>
                    )
                })
            }
        </>
    )
}

export default Demo;