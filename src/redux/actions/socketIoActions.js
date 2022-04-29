export function SocketConnectedActions(state) {
    console.log("socket connecte actions", state)
    return {
        type: "SOCKET:OPEN",
        payload: state,
    }
}