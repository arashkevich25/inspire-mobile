import { Client, Configuration } from 'rollbar-react-native';

export class RollbarLogging {
    static client: Client;

    static key = '';

    static init() {
        if (__DEV__) {
            return;
        }
        RollbarLogging.client = new Client(RollbarLogging.key);
    }

    static setUser(id: string, name: string, email: string) {
        RollbarLogging.client.setPerson(id, name, email);
    }

    static reportErrorAtSpace(error: Error, space: string) {
        RollbarLogging.client.error(error, { space });
    }

    static reportError(error: Error, extra?: any) {
        RollbarLogging.client.error(error, extra);
    }

    static reportInfoAtSpace(error: any, space: string) {
        RollbarLogging.client.info(error, { space });
    }

    static disable() {
        RollbarLogging.client = new Client(new Configuration(RollbarLogging.key, { enabled: false }));
    }
}
