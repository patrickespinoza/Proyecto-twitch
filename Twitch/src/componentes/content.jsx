import Games from "./Games"
import Categories from "./categories"
export default function Content () {


    const publiclist = [ {
        image:"https://static-cdn.jtvnw.net/ttv-boxart/509658-285x380.jpg",
        title:"Just Chatting",
        viewer:"206k viewers",
        tag:"IRL"},
        {
        image:"https://static-cdn.jtvnw.net/ttv-boxart/263490_IGDB-285x380.jpg",
        title:"Rust",
        viewer:"133k viewers",
        tag:"FPD Shooter RPG"},
        {
        image:"https://static-cdn.jtvnw.net/ttv-boxart/509663-285x380.jpg",
        title:"special Events",
        viewer:"46.3k viewers",
        tag:"IRL"},
        {
       image:"https://static-cdn.jtvnw.net/ttv-boxart/21779-285x380.jpg",
        title:"League of Legends",
        viewer:"306k viewers",
        tag:"RPG Strategy"},
        {
        image:"https://static-cdn.jtvnw.net/ttv-boxart/516575-285x380.jpg",
        title:"VALORANT",
        viewer:"106k viewers",
        tag:"FPS Shooter"},
        {
        image:"https://static-cdn.jtvnw.net/ttv-boxart/27471_IGDB-285x380.jpg",
        title:"Minecraft",
        viewer:"33.2k viewers",
        tag:"Simulation"},
        {
        image:"https://static-cdn.jtvnw.net/ttv-boxart/1863222988-285x380.jpg",
        title:"Kings League",
        viewer:"19 viewers",
        },
        {
        image:"https://static-cdn.jtvnw.net/ttv-boxart/33214-285x380.jpg",
        title:"Fortinte",
        viewer:"137k viewers",
        tag:"Shooter RPG"},
        {
        image:"https://static-cdn.jtvnw.net/ttv-boxart/512953_IGDB-285x380.jpg",
        title:"ELDER RING",
        viewer:"206k viewers",
        tag:"RPG Adventure game"},
        {
        image:"https://static-cdn.jtvnw.net/ttv-boxart/512710-285x380.jpg",
        title:"Call of Duty: Wazone",
        viewer:"45.2k viewers",
        tag:"FPS ",
        tag:"Shooter"},
        

    ]
    

    return (
        <section className="col-start-2 col-end-3 row-start-2 row-end-3 flex flex-col gap-2 text-white">
       
              <Categories/>

            <section className="grid lg:grid-cols-9 gap-3 text-white sm:grid-cols-2 md:grid-cols-4">
                {publiclist.map((game)=> {
                    return <Games
                    key={`game-${game.title}`}
                    image={game.image}
                    title ={game.title}
                    viewer={game.viewer}
                    tag={game.tag}
                    />
                })}
                

            </section>
        </section>
    )
}