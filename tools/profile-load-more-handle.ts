export function profileLoadMoreHandle(
    event: any,
    threshold: number,
    defaultOffset: number,
    loadMoreIsPending: boolean,
    loadMorePostsHandle: any,
) {
    if (
        event.nativeEvent.contentSize.height * threshold < event.nativeEvent.contentOffset.y + defaultOffset &&
        !loadMoreIsPending
    ) {
        loadMorePostsHandle();
    }
}
