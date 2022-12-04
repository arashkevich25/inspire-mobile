import { ComponentId } from 'navigation/constants';

export class NavigationService {
    static activeScreen: ComponentId;

    static setActiveScreen(id: ComponentId) {
        NavigationService.activeScreen = id;
    }
}
