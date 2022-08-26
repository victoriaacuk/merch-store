import Filter from "./Filter";

const AllCategories = () => {
    return(
        <div>
            <h1>Choose a category and see amazing things!</h1>
            {["COVER SETS/ BLANKETS", "ROOM DECOR", "TRAVEL CUPS", "K-POP KIT", "ALL"].map(category => <Filter category={category}/>)}
            
        </div>
    )
}

export default AllCategories;