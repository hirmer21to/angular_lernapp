import { Modus } from "./modus";

export const MODI: Modus[] = [
    {
        name: 'theorist',
        theorySmall: true,
        theoryLarge: true,
        praxis: false
    },
    {
        name: 'practitioner',
        theorySmall: false,
        theoryLarge: false,
        praxis: true
    },
    {
        name: 'both',
        theorySmall: true,
        theoryLarge: true,
        praxis: true
    }
]
