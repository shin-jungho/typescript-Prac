// typescript가 현재 가능한 타입 추론의 범위를 좁혀나가게
// 해줄 수 있는 리터럴 타입을 갖는 단일 필드를 사용
function networkStatus(state) {
    state.code;
    switch (state.state) {
        case 'loading':
            return 'Downloading...';
        case 'failed':
            return `Error ${state.code} downloading`;
        case 'success':
            return `Downloaded ${state.response.title} - ${state.response.summary}`;
    }
}
console.log(networkStatus('loading'));
