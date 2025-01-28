import MasterBox from '@/components/dashboard/MasterBox'
import Loading from '@/utils/Loading'
import React, { Suspense } from 'react'

function DashboardMainPage() {
    return (
        <>
            <Suspense fallback={<Loading global={true} isLoading={true} />}>
                <MasterBox />
            </Suspense>
        </>
    )
}

export default DashboardMainPage