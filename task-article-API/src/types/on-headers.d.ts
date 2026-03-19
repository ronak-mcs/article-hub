declare module 'on-headers' {
  function onHeaders(res: any, listener: () => void): void;
  export = onHeaders;
}
