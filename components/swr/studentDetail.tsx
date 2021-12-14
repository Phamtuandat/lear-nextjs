import * as React from 'react'
import useSWR from 'swr'

export interface StudentDetailProps {
    studentId: String
}

export function StudentDetail({ studentId }: StudentDetailProps) {
    const { data, isValidating, error, mutate } = useSWR(`/students/${studentId}`)

    return <div>name: {data?.name || '...'}</div>
}
