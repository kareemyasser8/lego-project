import APIClient from "./apiClient";

export interface filterOption{
    name: string,
    value: {name: string, count: number}[]
}

export const initialFilterOptions: filterOption[] = [
    {name: "Price", 
        value: [
            {name: "$0 - $25", count: 0},
            {name: "$25 - $50", count: 0},
            {name: "$50 - $75", count: 0},
            {name: "$75 - $100", count: 0},
            {name: "$100", count: 0},
        ]
    },
    {name: "Theme", 
        value: [
            {name: "Art", count: 0},
            {name: "BrickHeadz", count: 0},
            {name: "City", count: 0},
            {name: "Creator 3-in-1", count: 0},
            {name: "Creator Expert", count: 0},
            {name: "Disney Mickey and Friends", count: 0},
        ]
    },
    {name: "Interest", 
        value: [
            {name: "Aeroplanes", count: 0},
            {name: "Animals", count: 0},
            {name: "Art, Design & Music", count: 0},
            {name: "Arts and crafts", count: 0},
            {name: "Boats", count: 0},
            {name: "Buildings", count: 0},
        ]
    },
]

export default new APIClient<filterOption>("/productFilterOptions")