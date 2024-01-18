
import React, { useState } from "react";
import { Button } from 'primereact/button';

export default function LoadingDemo({text}) {
    const [loading, setLoading] = useState(false);

    const load = () => {
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
        }, 2000);
    };

    return (
        <div className="card flex flex-wrap justify-content-center ">
            <Button label={text} icon="pi pi-check" loading={loading} onClick={load}  className="whitespace-nowrap"  />
        </div>
    )
}
        