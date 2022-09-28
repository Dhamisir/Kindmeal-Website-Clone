import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react'
import Banner from '../Components/Banner'
import {CategorySection, DiscoverSection, YummySection} from '../Components/HomeSection'
export default function Home() {
    const [category,setCategory]=useState([]);
    const [yummy,setYummy]=useState([]);
    const [discover,setDiscover]=useState([]);

    useEffect(()=>{
        getData();
    },[])

    const getData=()=>{
       
        // category
        axios.get("https://www.themealdb.com/api/json/v1/1/categories.php")
        .then((res)=>{
            // console.log(res.data.categories)
            let categories=res.data.categories;
            let filterData=categories.filter((ele)=>{
                return ele.idCategory<=5;
            })
            // console.log(filterData)
            setCategory(filterData);
        })
        .catch((error)=>{
            console.log(error);
        })

        // yummy
        axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian")
        .then((res)=>{
            // console.log(res.data.meals)
            let yummy=res.data.meals;
            let filterData=yummy.filter((ele,i)=>{
                return i<5;
            })
            // console.log(filterData)
            setYummy(filterData);
        })
        .catch((error)=>{
            console.log(error);
        })

        // discover
        axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
        .then((res)=>{
            let discover=res.data.meals;
            let filterData=discover.filter((ele,i)=>{
                return i<5;
            })
            // console.log(filterData)
            setDiscover(filterData);
        })
        .catch((error)=>{
            console.log(error);
        })
    }

    return (
        <>
            {/* <Banner/> */}
            <CategorySection data={category}/>
            <YummySection data={yummy}/>
            <DiscoverSection data={discover}/>
        </>
    )
};
