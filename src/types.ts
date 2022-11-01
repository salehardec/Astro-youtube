export interface IProduct {
	title: string
	price: number
	id: number
	image: string
	description: string
}

export interface IRequest {
	id: number
	status: boolean
	file: string
	dateUpload: Date
	dateSend: Date
	whoSend: string
	respStatus: string
	respCode: string
}