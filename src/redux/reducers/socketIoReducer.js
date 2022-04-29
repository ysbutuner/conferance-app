
const intialState = {
    socket: false
}
const socketIoReducer = (state = intialState, action) => {
    switch (action.type) {
        case "SOCKET:OPEN":
            return {
                ...state,
                socket: action.payload
            };

        default:
            return state;
    }
};

export default socketIoReducer;