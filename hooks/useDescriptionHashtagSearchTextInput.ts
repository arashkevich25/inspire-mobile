// import { useTagsGlobalSearch } from './useTagsGlobalSearch';
import { MutableRefObject } from 'react';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function useDescriptionHashtagSearchTextInput(value: any, ref: MutableRefObject<any> | null = null) {
    // const { search, isSearching, tags, reset, query } = useTagsGlobalSearch();
    return function hashTagRender(matchingString: string) {
        // const partString = value.substring(0, ref!.current._lastNativeSelection.start).split(/(\r\n|\n|\r|\s)/gm);
        // const lastWord = partString[partString.length - 1];
        // const isHash = lastWord.includes('#');

        // if (isHash && lastWord.length >= 3 && !isSearching && query !== lastWord.substring(1)) {
        //     search(lastWord.substring(1));
        // } else if (query && tags.length && !isHash) {
        //     reset();
        // }
        return matchingString;
    };
}
