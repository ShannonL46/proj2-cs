export const Action = Object.freeze({
   LoadWrits: 'LoadWrits', 
   FinishNewW: 'FinishNewW',
   EditMode: 'EditMode',
});

export function loadWrits(writs){
    return {
        type: Action.LoadWrits,
        payload: writs,
    };
}

export function finishNewW(writ){
    return {
        type: Action.FinishNewW,
        payload: writ,
    };
}

export function editMode(writ){
    return {
        type: Action.EditMode,
        payload: writ,
    };
}

function checkForErrors(response){
    if(!response.ok){
        throw Error(`${response.status}: ${response.statusText}`)
    }
    return response;
}

const host = 'https://proj2-api.duckdns.org:443';

export function loadDate(year, month, day){
    return dispatch => {
    fetch(`${host}/writs/${year}/${month}/${day}`)
    .then(checkForErrors)
    .then(response => response.json)
    .then(data =>{
        if (data.ok){
            dispatch(loadWrits(data.writs));
        }
    })
    .catch(e => console.error(e));
    };
}

export function startNewW(year, month, day){
    const writ = {year, month, day, promp: '', text: ''};
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'applicatoin/json',
        },
        body: JSON.stringify(writ),
    }
    return dispatch => {
    fetch(`${host}/writs`, options)
    .then(checkForErrors)
    .then(response => response.json)
    .then(data =>{
        if (data.ok){
            writ.id = data.id;
            dispatch(finishNewW(writ));
        }
    })
    .catch(e => console.error(e));
    };
}