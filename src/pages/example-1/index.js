import MainLayout from "@/layouts/main"
import Link from "next/link"
import { useState } from "react";
import styles from './style/example-1.module.css';

export default function Example1() {
    const [listItems, setListItems] = useState([1, 2, 3]);
    
    const addNewItem = (index) => {
        let position = index + 1;
        const arrItems = [...listItems];
        arrItems.splice(position, 0, "");
        setListItems(arrItems);
        console.log("arrItems", arrItems);
    }

    const changeItems = (value, index) => {
        const arrItems = [...listItems];
        arrItems[index] = value;
        setListItems(arrItems);
    }

    return (
        <>
            <MainLayout>
                <Link href={`/`}>
                    Quay lại trang chủ
                </Link>
                <p>Đây là trong example-1</p>
                <div className='w-full bg-black h-[500px] flex flex-col items-center justify-center'>
                    <div className="border border-white p-6 rounded flex items-center justify-center gap-2 flex-wrap">
                        { listItems.map((item, index) => (
                            <div key={index} className="w-[100px] h-[100px] border border-white border-dashed text-white flex items-center justify-center relative">
                                <input 
                                    placeholder="_"
                                    className={styles.customInput + ` border-none bg-transparent w-full h-full text-center`}
                                    onChange={(e) => changeItems(e.target.value, index)} value={item}/>
                                <div onClick={() => addNewItem(index)}
                                    className='h-full w-3 absolute right-[-8px] z-[2] cursor-pointer'></div>
                            </div>
                        )) }
                    </div>
                    <p className="text-white mt-4">Chuỗi bạn có là: {listItems.join("")}</p> 
                </div>
            </MainLayout>
        </>
    )
}