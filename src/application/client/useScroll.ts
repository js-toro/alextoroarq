import { IScrollState } from "@/domain/entities";
import { Category } from "@/domain/enums";
import useScrollRepository from "@/infrastructure/repositories/useScrollRepository";

const useScroll = () => {
	const { getScrollRepository, setScrollRepository } = useScrollRepository();
	const state = getScrollRepository();

	const setScroll = (scroll: IScrollState) => {
		setScrollRepository(scroll);
	};

	const setCategory = (category: Category) => {
		setScroll({ scroll: state.scroll, category });
	};

	const setCurrentScroll = (scroll: number) => {
		setScroll({ scroll, category: state.category });
	};

	return { ...state, setCurrentScroll, setCategory };
};

export default useScroll;
