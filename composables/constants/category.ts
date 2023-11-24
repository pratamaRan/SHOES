export const category: Category[] = [
    {
        id: 1,
        name: "Sneakers",
    },
    {
        id: 2,
        name: "High Heels",
    },
    {
        id: 3,
        name: "Boots",
    },
    {
        id: 4,
        name: "Mules",
    },
]
export interface Category {
    id? : number,
    name?: string,
}