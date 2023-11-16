import React from 'react'

export default function ItemCategory({ item }) {
    const { img, title } = item
    return (
        <div className="w-full h-[420px] shadow-sm rounded-2xl p-4 bg-slate-50 dark:bg-[#1f1b24] dark:hover:bg-[#121015] dark:text-white dark:outline-none dark:border-none border border-slate-100 outline outline-slate-100  hover:shadow-2xl relative">
            <div className=" flex flex-col gap-6">
                <div>
                    <img
                        src={img}
                        width={200}
                        height={200}
                        alt="photos"
                        className="w-full object-cover"
                    />
                </div>
                <h3 className="font-bold text-xl pb-5 font-dancing-script">{title}</h3>
            </div>
        </div>
    )
}
