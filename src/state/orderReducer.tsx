let initialState = {
    firstName: '',
    lastName: '',
    phone: 0,
    city: '',
    street: '',
    homeNumber: 0,
    storey: 0,
    apartmentNumber: 0,
    orderPrice: 0,
    counterFood: 0,
    order: {
        soups: [
            {
                img:'https://clipart-best.com/img/soup/soup-clip-art-44.png',
                food: 'shi',
                price: 2.29,
                counter: 0
            },
            {   img:'https://im0-tub-ru.yandex.net/i?id=e778b59bd8c63c3c929672ed586d0f89&ref=rim&n=33&w=150&h=150',
                food: 'lagman',
                price: 2.89,
                counter: 0

            },
            {
                img:'https://clipart-best.com/img/soup/soup-clip-art-25.png',
                food: 'kharchoSoup',
                price: 3.19,
                counter: 0

            },
            {
                img:'https://clipart-best.com/img/noodle/noodle-clip-art-83.png',
                food: 'rassolnik',
                price: 2.49,
                counter: 0
            }] as Array<SoupsType>
    },
    drinks: [{
        drink: 'cocaCola',
        price: 0,
        counter: 0
    },
        {
            drink: 'water',
            price: 0,
            counter: 0
        }
    ] as Array<DrinkType>
}

export const orderReducer = (state = initialState, action: ActionType): InitialState => {
    switch (action.type) {
        case 'order/LOGIN':
            return {
                ...state,
                firstName: action.firstName,
                lastName: action.lastName,
                phone: action.phone,
                city: action.city,
                street: action.street,
                homeNumber: action.homeNumber,
                storey: action.storey,
                apartmentNumber: action.apartmentNumber
            }
        case 'order/SOUPS':
            return {
                ...state,
                counterFood: state.counterFood + 1,
                order: {
                    ...state.order,
                    soups: state.order.soups.map(s => ({
                        ...s,
                        counter: s.food === action.food ? s.counter + 1 : s.counter
                    }))
                }
            }
        default:
            return state
    }
}
// ac    //  1 ac - замена 8
export const login = (firstName: string, lastName: string, phone: number, city: string, street: string,
                      homeNumber: number, storey: number, apartmentNumber: number) =>
    ({type: 'order/LOGIN', firstName, lastName, phone, city, street, homeNumber, storey, apartmentNumber} as const)

export const food = (food: 'shi' | 'lagman' | 'kharchoSoup' | 'rassolnik') => ({type: 'order/SOUPS', food} as const)

// type
export type Login = ReturnType<typeof login>
export type Food = ReturnType<typeof food>


export type InitialState = typeof initialState
export type ActionType = Login | Food

export type SoupsType = {
    img:string
    food: 'shi' | 'lagman' | 'kharchoSoup' | 'rassolnik'
    price: number
    counter: number

}
export type DrinkType = {
    drink: 'cocaCola' | 'water'
    price: number
    counter: number

}