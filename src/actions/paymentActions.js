import { FETCH_ALL_PAYMENTS, ADD_PAYMENT, RELOAD_PAYMENT } from './types'
import api from '../services/api'

export const fetchPayments = () => (dispatch, getState) => {

    const timeSinceLastFetch = getState().paymentsList.lastFetchedAll;
    const isDataStale = Date.now() - timeSinceLastFetch > (100 * 60 *5);

    if (isDataStale || !timeSinceLastFetch) {
        api.get(`/payments`)
        .then(payments => dispatch({
            type: FETCH_ALL_PAYMENTS,
            payload: payments,
            time: Date.now(),
        }))
    } else {
        dispatch({
            type: FETCH_ALL_PAYMENTS,
            payload:getState().paymentsList.payments,
            time: getState().paymentsList.lastFetchedAll,
        })
    }
}

export const fetchSinglePayment = (pid) => (dispatch, getState) => {
    const paymentArray = getState().paymentsList.payment
    const target = paymentArray ? paymentArray.find(x => x.id === pid) : undefined;

    if ( target === undefined ) {
        console.log('reducer scenario')
        api.get(`/payments/${pid}`)
        .then(payment => {
            payment.time = Date.now()
            dispatch({
                type: ADD_PAYMENT,
                payload: payment
            })
        })
    }

    if (target) {
        const timeSinceLastFetch = target.time;
        const isDataStale = Date.now() - timeSinceLastFetch > (100 * 60 *5);
            if (!isDataStale) {
                console.log('targetc scenario')
                const payment = [{ target }]
                const paymentsList = {payment}
                return paymentsList
            }

        console.log('reload scenario')
        target.time = Date.now()
        for (var key in paymentArray) {
            if (paymentArray.hasOwnProperty(key)) {
                if (paymentArray[key] == null) {
                    paymentArray[key] = target[key];
                }
            }
         }
        dispatch({
            type: RELOAD_PAYMENT,
            payload: paymentArray
        })
    }
}
