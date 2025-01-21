"use client";

import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'

function MasterPage() {
    const router = useRouter();
    useEffect(() => {
        router.push('/admin/dashboard');
    }, [router])

    return (
        <div>MasterPage</div>
    )
}

export default MasterPage