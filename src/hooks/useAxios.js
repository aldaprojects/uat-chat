import axios from 'axios';

import { useState, useEffect, useRef } from 'react';


export const useAxios = ( url ) => {
    
    const [state, setState] = useState({ data: null, loading: true, error: null });

    return state;
}
