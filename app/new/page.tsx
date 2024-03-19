'use client'

import React, { useState } from 'react'
import useSWR from 'swr'
import { useRouter } from 'next/navigation'
import { useDispatch } from 'react-redux'
import { addNew } from '../store/features/announcement.slice'
const New = () => {
    const [selectedBrand, setSelectedBrand] = useState("")
    const [markBrand, setmarkBrand] = useState("")
    const [CarFuel, setFuel] = useState("")
    const [carMileage, setMileage] = useState("")
    const [carYear, setYear] = useState("")
    const router = useRouter()
    const dispatch = useDispatch()
    const fetcher = (...args: any) => fetch(args).then(res => res.json())
    const [file, setFile] = useState("");
    function handleChange(e: any) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }
    const { data, error, isLoading } = useSWR('/api/brands', fetcher);

    const brands = data?.results ? Array.from(new Set(data.results.map((item: any) => item.make))) : [];
    console.log(markBrand)
    console.log(CarFuel)
    console.log(carMileage)


    const addNewAnnouncement = () => {
        dispatch(addNew({ brand: selectedBrand, mark: markBrand, fuel: CarFuel, mileage: carMileage, carImage: file, year: carYear }))
        router.push("/")
    }


    console.log(File)

    return (
        <div className='container mx-auto'>
            <div className='bg-secondary py-2 px-4 m-4'>
                <h4>
                    ELAN YERLƏŞDİRMƏK
                </h4>
            </div>

            <div>
                <ul className='list-disc list-inside mt-3 m-4'>
                    <li className=' text-sm'> Üç ay ərzində bir nəqliyyat vasitəsi yalnız bir dəfə pulsuz dərc oluna bilər.</li>
                    <li className=' text-sm'> Üç ay ərzində təkrar və ya oxşar elanlar (marka/model, rəng) ödənişlidir.</li>
                    <li className=' text-sm'> Elanınızı saytın ön sıralarında görmək üçün `İrəli çək` xidmətindən istifadə edin.</li>
                </ul>

            </div>

            <div className='flex items-start gap-10 mt-10 m-10 max-sm:flex-col'>

                <div className='w-1/2 flex justify-between max-sm:gap-11'>
                    <label>Marka</label>
                    <select name="" id="" className='border w-7/12 max-sm:w-96'
                        onChange={(e) => setSelectedBrand(e.target.value)}
                    >
                        {brands && brands.map((item: any) => {
                            return (

                                <option>
                                    {item}
                                </option>
                            )
                        })}

                    </select>
                </div>

                <div className='w-1/2 flex justify-between items max-sm:gap-8 '>
                    <label htmlFor="" >Yanacaq novu</label>
                    <select className='border w-7/12 max-sm:w-96 max-sm:h-9' onChange={(e) => setFuel(e.target.value)}>
                        <option ></option>
                        <option >Benzin</option>
                        <option >Dizel</option>
                        <option >Hibrid</option>

                    </select>
                </div>

            </div>
            <div className='flex items-start gap-10 mt-10 m-10 max-sm:flex-col '>
                <div className='w-1/2 flex justify-between items max-sm:gap-11'>
                    <label htmlFor="">Qiymət</label>
                    <input type="number" className='border w-7/12 max-sm:w-80' placeholder='Qiymət daxil edin... AZN' onChange={(e) => setmarkBrand(e.target.value)} >

                    </input>
                </div>
                <div className='flex flex-row justify-between items-center w-1/2  max-sm:gap-11'>
                    <label>Yürüş (km)</label>
                    <input type="number" className='border w-96' placeholder='Km' onChange={(e) => setMileage(e.target.value)} />
                </div>

            </div>
            <div className='flex flex-row justify-between max-sm:flex-col '>
                <input type="file" onChange={handleChange} className='mx-10 max-sm:mb-10 ' accept='image/*' />
                <div className='flex flex-row justify-between w-1/2'>
                    <p className='mx-6 max-sm:mx-10  '>Maşın ili:</p>
                    <input type="text" className='border w-96 mx-10 max-sm:w-48 max-sm:h-7' onChange={(e) => setYear(e.target.value)} />
                </div>
            </div>
            <div className='flex justify-end mt-6'>
                <button className=' bg-red py-4 px-16 text-white border-none rounded-full max-sm:mx-auto' onClick={addNewAnnouncement}>
                    Elan Yarat
                </button>
            </div>
        </div>
    )
}

export default New