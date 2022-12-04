export const acceptActionClassMiddleware = () => (next: any) => (action: any) => {
    const keys = Object.keys(action);
    if (!keys.includes('type')) {
        return new Error('Doesnt have type key');
    }
    const preparedAction = keys.reduce(
        (previousValue, currentValue) => ({ ...previousValue, [currentValue]: action[currentValue] }),
        {},
    );
    next(preparedAction);
};
