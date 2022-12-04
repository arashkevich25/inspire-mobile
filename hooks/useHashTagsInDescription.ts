import { Tag } from '@inspire/types';

interface UseHashTagsInDescriptionOutput {
    clickHandle: (tag: Tag) => void;
}

export function useHashTagsInDescription(formRef: any): UseHashTagsInDescriptionOutput {
    function clickHandle(tag: Tag) {
        const partString = formRef
            .current!.values.desc.substring(0, formRef.current!.descRef.current._lastNativeSelection.start)
            .replace(/(\r\n|\n|\r|\s)/gm, ' ')
            .split(' ');
        const separator = partString.length === 1 ? '' : ' ';
        const newString = [
            ...(partString.splice(0, partString.length - 1).join(' ') + separator),
            `#${tag.tag}`,
            formRef.current!.values.desc.substring(formRef.current!.descRef.current._lastNativeSelection.start),
        ].join('');

        formRef.current!.setValues({
            ...formRef.current!.values,
            desc: newString,
        });
        formRef.current!.descRef.current.focus();
    }

    return {
        clickHandle,
    };
}
