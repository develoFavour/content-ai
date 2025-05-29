"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

interface DataContextType {
	activeCard: number;
	setActiveCard: (value: number | ((prev: number) => number)) => void;
	isVisible: boolean;
	setIsVisible: (value: boolean) => void;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export function DataProvider({ children }: { children: ReactNode }) {
	const [activeCard, setActiveCard] = useState(0);
	const [isVisible, setIsVisible] = useState(false);

	return (
		<DataContext.Provider
			value={{
				activeCard,
				setActiveCard,
				isVisible,
				setIsVisible,
			}}
		>
			{children}
		</DataContext.Provider>
	);
}

export function useDataContext() {
	const context = useContext(DataContext);
	if (context === undefined) {
		throw new Error("useDataContext must be used within a DataProvider");
	}
	return context;
}
