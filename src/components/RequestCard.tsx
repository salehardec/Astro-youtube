import { IRequest } from '../types'
import { useState } from 'preact/hooks'
import { h } from 'preact'

interface RequestCardProps {
	request: IRequest
}

export default function RequestCard ({ request }: RequestCardProps) {
	return <div className="border border-slate-400 rounded mb-2 p-3">
		<h2 className="text-lg">{request.file}</h2>
		

		<a href={`/request/${request.id}`}>Открыть обращение</a>
		<br />
	</div>
}