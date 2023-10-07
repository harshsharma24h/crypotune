export const coinData = (amount) => {
    return (dispatch) => {
        dispatch({
            type: 'coin',
            payload: amount
        })
    }
}