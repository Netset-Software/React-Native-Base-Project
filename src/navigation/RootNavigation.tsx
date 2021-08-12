import * as React from 'react';

export const navigationRef = React.createRef();

export const resetStack = (name: string, params: any) => {
    console.log("call this")
    navigationRef.current?.reset({
        index: 0, routes: [{
            name: name, params: params
        }]
    })
}