import { createSelectorHook} from "react-redux"
import { RootState } from "reducers"

const useSelector = createSelectorHook<RootState>() 
export default useSelector