"use client";
import useNavStore from "@/zustand/navStore";

export default function MainContent({ children }) {
    const { activeSection } = useNavStore();

    return (
        <div className=" relative top-[2rem] p-4 bg-blue-500">
            {children}
        </div>
    );
}
