"use client";
import { Provider } from "react-redux";
import store from "@/infrastructure/persistence/store";

type StoreProviderProps = {
	children: React.ReactNode;
};

export default function StoreProvider({ children }: StoreProviderProps) {
	return <Provider store={store}>{children}</Provider>;
}
