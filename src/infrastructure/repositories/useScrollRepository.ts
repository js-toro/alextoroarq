import { useSelector, useDispatch } from "react-redux";
import { IScrollState } from "@/domain/entities";
import { setScroll } from "@/infrastructure/persistence/slice/scrollSlice";
import { IRootState } from "@/infrastructure/persistence/store/store";

const useScrollRepository = () => {
	const dispatch = useDispatch();
	const scrollState = useSelector((state: IRootState) => state.scroll);

	const getScrollRepository = (): IScrollState => {
		return scrollState;
	};

	const setScrollRepository = (scroll: IScrollState) => {
		dispatch(setScroll(scroll));
	};

	return { getScrollRepository, setScrollRepository };
};

export default useScrollRepository;
