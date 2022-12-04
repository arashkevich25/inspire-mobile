import Base64Binary from 'base64-arraybuffer';

export function getArrayBuffer(base64: string): ArrayBuffer {
    return Base64Binary.decode(base64);
}
