import { useEffect } from "react";
import { initialize } from 'react-ga';

export default function GAHoc() {
    useEffect(() => {
        initialize(process.env.NEXT_PUBLIC_GA_KEY!);
    },[])
}