import { useState } from 'react';

export const useForm = ( initialState = {} ) => {
    
    const [value, setValue] = useState(initialState);

    const handleInputChange = ({ target }) => {
        let valid;
        switch (target.name) {
            case "username":
                if( target.value.length < 4 ) {
                    valid = false;
                } else {
                    valid = true;
                }
                break;
            case "email":
                const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
                if( !regex.test(target.value) ) {
                    valid = false;
                } else {
                    valid = true;
                }
                break;
            case "password":
                if( target.value.length < 7 ) {
                    valid = false;
                } else {
                    valid = true;
                }
                break;
            default:
                break;
        }

        setValue({
            ...value,
            [ target.name ]: {
                value: target.value,
                valid: valid,
                touched: true
            }
        });
    }

    return [ value, handleInputChange ];

}
