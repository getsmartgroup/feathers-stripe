import { Params } from '@feathersjs/feathers'
import { Stripe } from 'stripe'
import errorHandler from '../errorHandler'
import normalizeQuery from '../normalizeQuery'
import Base from './base'

export default class Service extends Base {
	find = (params: Params) =>
		this.stripe.paymentMethods.list(normalizeQuery(params) as any).catch(errorHandler)

	get = (id: string) => this.stripe.paymentMethods.retrieve(id).catch(errorHandler)

	create = (data: Stripe.PaymentMethodCreateParams) =>
		this.stripe.paymentMethods.create(data).catch(errorHandler)

	patch = (...args: [any, any]) => this.update(...args)

	update = (id: string, data: any) =>
		this.stripe.paymentMethods.update(id, data).catch(errorHandler)

	remove = (id: string, params: Params) =>
		this.stripe.paymentMethods.detach(id, params.stripe).catch(errorHandler)
}
