export default function Games ({image, title, viewer, tag}){

    return (
        <div className="">
            <img className="w-60 sm:w-30 hover:border-l-[7px]  hover:border-b-[7px] hover:shado hover:border-[#a855f7]" src={image} alt="public" />
        <div>
            <h1>{title}</h1>
            <p className="text-gray-500" > {viewer}</p>
        </div>
        <div>
            <button className="bg-gray-500 rounded-md">{tag}</button>
        </div>
        </div>
    )
}