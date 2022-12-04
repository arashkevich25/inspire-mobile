export enum InitAppActions {
    InitApp = '[Init] init app',
    InitAppSuccess = '[Init] init app success',
    InitAppFailed = '[Init] init app failed',
}

interface InitApp {
    type: typeof InitAppActions.InitApp;
}

interface InitAppSuccess {
    type: typeof InitAppActions.InitAppSuccess;
}

interface InitAppFailed {
    type: typeof InitAppActions.InitAppFailed;
    error: string;
}

export type InitAppUnion = InitApp | InitAppSuccess | InitAppFailed;
