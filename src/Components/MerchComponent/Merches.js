import dataMerch from "../../data/dataMerch";
import Merch from "./Merch";
import { useSelector } from "react-redux";
import { getSelectedCategory } from "../../redux/merchSlice";

const Merches = () => {

    const selectedCategory = useSelector(getSelectedCategory);
    return (
        <div>
            {dataMerch
            .filter(merch => {
                if (selectedCategory ==="ALL") return true;
                return selectedCategory === merch.category;
            })
            .map(merch => <Merch merch={merch}/>)}
        </div>
    )
}

export default Merches;