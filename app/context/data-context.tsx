"use client";

import React, { createContext, useContext, useState } from "react";

// Define the shape of the context data
interface DataContextType {
	isVisible: boolean;
	setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
	activeCard: number;
	setActiveCard: React.Dispatch<React.SetStateAction<number>>;
}

// Create the context
const DataContext = createContext<DataContextType | undefined>(undefined);

// Create a provider component
export const DataProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const [isVisible, setIsVisible] = useState(false);
	const [activeCard, setActiveCard] = useState(0);

	return (
		<DataContext.Provider
			value={{ isVisible, setIsVisible, activeCard, setActiveCard }}
		>
			{children}
		</DataContext.Provider>
	);
};

// Custom hook to use the context
export const useDataContext = () => {
	const context = useContext(DataContext);
	if (!context) {
		throw new Error("useDataContext must be used within a DataProvider");
	}
	return context;
};
