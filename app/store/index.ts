import { configureStore } from "@reduxjs/toolkit";
import AnnouncementReducer from "./features/announcement.slice"

// type Ibrand = {
//     brand: string
// }
// type Imark = {
//     mark: number
// }
type Icard = {
    brand: string,
    mark: number,
    fuel: string,
    mileage: string,
    carImage: HTMLImageElement,
    year: string,
    item: any

}
// export interface IStateMark{
//     announcement:Imark[],
// }
// export interface IState {
//     announcement: Ibrand[],

// }
export interface IStateCard {
    announcement: Icard[],

}


export const store = configureStore({
    reducer: {
        'announcement': AnnouncementReducer
    }
})