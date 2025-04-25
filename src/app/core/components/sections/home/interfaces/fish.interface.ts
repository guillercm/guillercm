export interface Fish {
    ref: number,
    direction: 'left' | 'right',
    topObjetive: number | null,
    styles: {
        transform: {
            scaleX: number,
            rotate: number
        },
        left: number,
        top: number,
    }
}