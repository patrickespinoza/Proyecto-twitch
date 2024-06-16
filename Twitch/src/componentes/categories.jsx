export default function Categories () {
    const categories = [
        "Games", "IRL", "MUSIC", "Creative", "Esports"]
    
        return (
            <div className="flex flex-row gap-4">
            {categories.map((category)=> {
                return (<span key={`category-${category}`} className="py-2 px-4 bg-[#7c3aed] rounded-sm   hover:bg-purple-950">
                    {category}
                    </span>)
            })}
            </div>
        )
}