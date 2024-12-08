"use client";

import { useCallback } from "react";

export const useScrollToSection = () => {
    return useCallback((sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    }, []);
};
