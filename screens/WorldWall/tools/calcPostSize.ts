import { PostHeight } from '../models/PostSettings';

export function calcSize(index: number) {
    switch (index % 10) {
        case 0:
        case 3:
        case 4:
        case 9: {
            return PostHeight.Low;
        }

        case 2:
        case 5:
        case 7:
        case 8: {
            return PostHeight.Medium;
        }

        case 1:
        case 6: {
            return PostHeight.High;
        }

        default: {
            return PostHeight.Low;
        }
    }
}
