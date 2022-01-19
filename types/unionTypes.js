function padLeft(value, padding) {
    if (typeof padding === 'number') {
        return Array(padding + 1).join(' ') + value;
    }
    if (typeof padding === 'string') {
        return padding + value;
    }
    throw new Error(`expected string or number, got '${padding}'.`);
}
padLeft('Hello world', 4);
